export interface DateRange {
    start: Date;
    end: Date;
}

export class DateRangeVO implements DateRange {
    constructor(
        public readonly start: Date,
        public readonly end: Date
    ) {
        this.validate();
    }

    // Factory methods
    static create(start: Date, end: Date): DateRangeVO {
        return new DateRangeVO(start, end);
    }

    static createFromMonth(year: number, month: number): DateRangeVO {
        const start = new Date(year, month - 1, 1);
        const end = new Date(year, month, 0);
        return new DateRangeVO(start, end);
    }

    static createFromQuarter(year: number, quarter: number): DateRangeVO {
        const startMonth = (quarter - 1) * 3;
        const start = new Date(year, startMonth, 1);
        const end = new Date(year, startMonth + 3, 0);
        return new DateRangeVO(start, end);
    }

    static createFromYear(year: number): DateRangeVO {
        const start = new Date(year, 0, 1);
        const end = new Date(year, 11, 31);
        return new DateRangeVO(start, end);
    }

    static createLastDays(days: number): DateRangeVO {
        const end = new Date();
        const start = new Date();
        start.setDate(start.getDate() - days);
        return new DateRangeVO(start, end);
    }

    static createNextDays(days: number): DateRangeVO {
        const start = new Date();
        const end = new Date();
        end.setDate(end.getDate() + days);
        return new DateRangeVO(start, end);
    }

    // Validation
    private validate(): void {
        if (this.start > this.end) {
            throw new Error('Start date cannot be after end date');
        }
    }

    // Duration calculations
    getDurationInDays(): number {
        const diffTime = Math.abs(this.end.getTime() - this.start.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    getDurationInMonths(): number {
        const startYear = this.start.getFullYear();
        const startMonth = this.start.getMonth();
        const endYear = this.end.getFullYear();
        const endMonth = this.end.getMonth();

        return (endYear - startYear) * 12 + (endMonth - startMonth);
    }

    getDurationInYears(): number {
        const startYear = this.start.getFullYear();
        const endYear = this.end.getFullYear();
        return endYear - startYear;
    }

    // Date checks
    contains(date: Date): boolean {
        return date >= this.start && date <= this.end;
    }

    overlaps(other: DateRangeVO): boolean {
        return this.start <= other.end && this.end >= other.start;
    }

    isAdjacent(other: DateRangeVO): boolean {
        const nextDay = new Date(this.end);
        nextDay.setDate(nextDay.getDate() + 1);
        return nextDay.getTime() === other.start.getTime();
    }

    // Comparison operations
    equals(other: DateRangeVO): boolean {
        return this.start.getTime() === other.start.getTime() &&
            this.end.getTime() === other.end.getTime();
    }

    // Utility methods
    isPast(): boolean {
        const now = new Date();
        return this.end < now;
    }

    isFuture(): boolean {
        const now = new Date();
        return this.start > now;
    }

    isCurrent(): boolean {
        const now = new Date();
        return this.contains(now);
    }

    isSingleDay(): boolean {
        return this.getDurationInDays() === 1;
    }

    // Transformations
    extend(days: number): DateRangeVO {
        const newEnd = new Date(this.end);
        newEnd.setDate(newEnd.getDate() + days);
        return new DateRangeVO(this.start, newEnd);
    }

    shift(days: number): DateRangeVO {
        const newStart = new Date(this.start);
        const newEnd = new Date(this.end);
        newStart.setDate(newStart.getDate() + days);
        newEnd.setDate(newEnd.getDate() + days);
        return new DateRangeVO(newStart, newEnd);
    }

    // OHADA specific methods for accounting periods
    isFiscalMonth(): boolean {
        return this.getDurationInDays() >= 28 && this.getDurationInDays() <= 31;
    }

    isFiscalQuarter(): boolean {
        const months = this.getDurationInMonths();
        return months >= 2 && months <= 4;
    }

    isFiscalYear(): boolean {
        const months = this.getDurationInMonths();
        return months >= 11 && months <= 13;
    }

    // Formatting
    format(locale: string = 'fr-FR'): string {
        const formatter = new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        return `${formatter.format(this.start)} - ${formatter.format(this.end)}`;
    }

    formatShort(locale: string = 'fr-FR'): string {
        const formatter = new Intl.DateTimeFormat(locale, {
            month: 'short',
            day: 'numeric'
        });

        if (this.start.getFullYear() === this.end.getFullYear()) {
            if (this.start.getMonth() === this.end.getMonth()) {
                return `${this.start.getDate()}-${this.end.getDate()} ${formatter.format(this.start)}`;
            }
            return `${formatter.format(this.start)} - ${formatter.format(this.end)} ${this.start.getFullYear()}`;
        }
        return this.format(locale);
    }

    // Serialization
    toJSON(): DateRange {
        return {
            start: this.start,
            end: this.end
        };
    }

    toString(): string {
        return `${this.start.toISOString().split('T')[0]} to ${this.end.toISOString().split('T')[0]}`;
    }

    // Static utility methods
    static getCurrentMonth(): DateRangeVO {
        const now = new Date();
        return DateRangeVO.createFromMonth(now.getFullYear(), now.getMonth() + 1);
    }

    static getCurrentQuarter(): DateRangeVO {
        const now = new Date();
        const quarter = Math.floor(now.getMonth() / 3) + 1;
        return DateRangeVO.createFromQuarter(now.getFullYear(), quarter);
    }

    static getCurrentYear(): DateRangeVO {
        const now = new Date();
        return DateRangeVO.createFromYear(now.getFullYear());
    }

    static getLast30Days(): DateRangeVO {
        return DateRangeVO.createLastDays(30);
    }

    static getLast90Days(): DateRangeVO {
        return DateRangeVO.createLastDays(90);
    }
}
