export interface Money {
    amount: number;
    currency: string;
}

export class MoneyVO implements Money {
    constructor(
        public readonly amount: number,
        public readonly currency: string
    ) {
        this.validate();
    }

    // Factory methods
    static create(amount: number, currency: string = 'XAF'): MoneyVO {
        return new MoneyVO(amount, currency);
    }

    static zero(currency: string = 'XAF'): MoneyVO {
        return new MoneyVO(0, currency);
    }

    // Validation
    private validate(): void {
        if (this.amount < 0) {
            throw new Error('Amount cannot be negative');
        }
        if (!this.currency || this.currency.length !== 3) {
            throw new Error('Currency must be a 3-letter code');
        }
    }

    // Arithmetic operations
    add(other: MoneyVO): MoneyVO {
        this.validateSameCurrency(other);
        return new MoneyVO(this.amount + other.amount, this.currency);
    }

    subtract(other: MoneyVO): MoneyVO {
        this.validateSameCurrency(other);
        return new MoneyVO(this.amount - other.amount, this.currency);
    }

    multiply(multiplier: number): MoneyVO {
        return new MoneyVO(this.amount * multiplier, this.currency);
    }

    divide(divisor: number): MoneyVO {
        if (divisor === 0) {
            throw new Error('Cannot divide by zero');
        }
        return new MoneyVO(this.amount / divisor, this.currency);
    }

    // Comparison operations
    equals(other: MoneyVO): boolean {
        return this.amount === other.amount && this.currency === other.currency;
    }

    greaterThan(other: MoneyVO): boolean {
        this.validateSameCurrency(other);
        return this.amount > other.amount;
    }

    lessThan(other: MoneyVO): boolean {
        this.validateSameCurrency(other);
        return this.amount < other.amount;
    }

    greaterThanOrEqual(other: MoneyVO): boolean {
        this.validateSameCurrency(other);
        return this.amount >= other.amount;
    }

    lessThanOrEqual(other: MoneyVO): boolean {
        this.validateSameCurrency(other);
        return this.amount <= other.amount;
    }

    // Utility methods
    isZero(): boolean {
        return this.amount === 0;
    }

    isPositive(): boolean {
        return this.amount > 0;
    }

    isNegative(): boolean {
        return this.amount < 0;
    }

    negate(): MoneyVO {
        return new MoneyVO(-this.amount, this.currency);
    }

    absolute(): MoneyVO {
        return new MoneyVO(Math.abs(this.amount), this.currency);
    }

    // Formatting
    format(locale: string = 'fr-FR'): string {
        const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: this.currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
        return formatter.format(this.amount);
    }

    // OHADA specific methods
    calculateTVA(tvaRate: number): MoneyVO {
        if (tvaRate < 0 || tvaRate > 100) {
            throw new Error('TVA rate must be between 0 and 100');
        }
        return new MoneyVO(this.amount * (tvaRate / 100), this.currency);
    }

    calculateHT(tvaRate: number): MoneyVO {
        if (tvaRate < 0 || tvaRate > 100) {
            throw new Error('TVA rate must be between 0 and 100');
        }
        return new MoneyVO(this.amount / (1 + tvaRate / 100), this.currency);
    }

    calculateTTC(tvaRate: number): MoneyVO {
        if (tvaRate < 0 || tvaRate > 100) {
            throw new Error('TVA rate must be between 0 and 100');
        }
        return new MoneyVO(this.amount * (1 + tvaRate / 100), this.currency);
    }

    // Rounding for OHADA compliance
    roundToUnit(unit: number = 5): MoneyVO {
        const roundedAmount = Math.round(this.amount / unit) * unit;
        return new MoneyVO(roundedAmount, this.currency);
    }

    // Validation helper
    private validateSameCurrency(other: MoneyVO): void {
        if (this.currency !== other.currency) {
            throw new Error('Cannot perform operations on different currencies');
        }
    }

    // Serialization
    toJSON(): Money {
        return {
            amount: this.amount,
            currency: this.currency
        };
    }

    toString(): string {
        return `${this.amount} ${this.currency}`;
    }
}
