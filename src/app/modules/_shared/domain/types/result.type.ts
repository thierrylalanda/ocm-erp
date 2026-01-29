/**
 * Result Pattern for functional error handling
 * 
 * Instead of throwing exceptions, return a Result object that can be either:
 * - Success: contains a value
 * - Failure: contains an error
 * 
 * @example
 * // Use case
 * async execute(dto: CreateUserDto): Promise<Result<UserResponseDto, DomainError>> {
 *   const emailResult = Email.create(dto.email);
 *   if (emailResult.isFailure) {
 *     return Result.fail(emailResult.error);
 *   }
 *   
 *   const user = await this.repository.create(userEntity);
 *   return Result.ok(UserMapper.toResponseDto(user));
 * }
 * 
 * // Component
 * const result = await this.createUserUseCase.execute(dto);
 * if (result.isFailure) {
 *   this.toastService.typeError(result.error.message);
 *   return;
 * }
 * this.user = result.value;
 */
export class Result<T, E = Error> {
    private constructor(
        private readonly _isSuccess: boolean,
        private readonly _value?: T,
        private readonly _error?: E
    ) {
        Object.freeze(this);
    }

    /**
     * Create a successful result
     */
    static ok<T>(value: T): Result<T, never> {
        return new Result<T, never>(true, value, undefined);
    }

    /**
     * Create a failed result
     */
    static fail<E>(error: E): Result<never, E> {
        return new Result<never, E>(false, undefined, error);
    }

    /**
     * Check if the result is successful
     */
    get isSuccess(): boolean {
        return this._isSuccess;
    }

    /**
     * Check if the result is a failure
     */
    get isFailure(): boolean {
        return !this._isSuccess;
    }

    /**
     * Get the value (only available if success)
     * @throws Error if called on a failure result
     */
    get value(): T {
        if (!this._isSuccess) {
            throw new Error('Cannot get value from a failed result');
        }
        return this._value!;
    }

    /**
     * Get the error (only available if failure)
     * @throws Error if called on a success result
     */
    get error(): E {
        if (this._isSuccess) {
            throw new Error('Cannot get error from a successful result');
        }
        return this._error!;
    }

    /**
     * Get the value or a default value if failure
     */
    getValueOrDefault(defaultValue: T): T {
        return this._isSuccess ? this._value! : defaultValue;
    }

    /**
     * Get the value or null if failure
     */
    getValueOrNull(): T | null {
        return this._isSuccess ? this._value! : null;
    }

    /**
     * Map the value to another type
     */
    map<U>(fn: (value: T) => U): Result<U, E> {
        if (this._isSuccess) {
            return Result.ok(fn(this._value!));
        }
        return Result.fail(this._error!);
    }

    /**
     * Map the error to another type
     */
    mapError<F>(fn: (error: E) => F): Result<T, F> {
        if (this._isSuccess) {
            return Result.ok(this._value!);
        }
        return Result.fail(fn(this._error!));
    }

    /**
     * Combine multiple results
     */
    static combine<T, E>(results: Result<T, E>[]): Result<T[], E> {
        const values: T[] = [];

        for (const result of results) {
            if (result.isFailure) {
                return Result.fail(result.error);
            }
            values.push(result.value);
        }

        return Result.ok(values);
    }
}
