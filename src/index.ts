type NDateMethodsParams = {
	UTC?: boolean
}

type NDateFormatParams = {
	localeMatcher?: "best fit" | "lookup"
  weekday?: "narrow" | "short" | "long"
  era?: "narrow" | "short" | "long"
  year?: "numeric" | "2-digit"
  month?: "numeric" | "2-digit" | "narrow" | "short" | "long"
  day?: "numeric" | "2-digit"
  hour?: "numeric" | "2-digit"
  minute?: "numeric" | "2-digit"
  second?: "numeric" | "2-digit"
  timeZoneName?: "short" | "long"
  formatMatcher?: "best fit" | "basic"
  hour12?: boolean;
  timeZone?: string;
}

export class NDate {
	private _date: Date

	constructor(date: Date = new Date()) {
		this._date = date
	}

	public getDate(): string {
		return this._date.toISOString()
	}
	public getYear(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCFullYear()
		return this._date.getFullYear()
	}
	public getMonth(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCMonth() + 1
		return this._date.getMonth() + 1
	}
	public getWeekDay(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCDay() + 1
		return this._date.getDay() + 1
	}
	public getDay(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCDate()
		return this._date.getDate()
	}
	public getHours(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCHours()
		return this._date.getHours()
	}
	public getMinutes(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCMinutes()
		return this._date.getMinutes()
	}
	public getSeconds(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCSeconds()
		return this._date.getSeconds()
	}
	public getMilliseconds(params: NDateMethodsParams = {}): number {
		if (params.UTC) return this._date.getUTCMilliseconds()
		return this._date.getMilliseconds()
	}

	public setDate(value: string): NDate {
		this._date = new Date(value)
		return this
	}
	public setYear(value: number, params: NDateMethodsParams = {}): NDate {
		if (params.UTC) this._date.setUTCFullYear(value)
		else this._date.setFullYear(value)
		return this
	}
	public setMonth(value: number, params: NDateMethodsParams = {}): NDate {
		if (params.UTC) this._date.setUTCMonth(value - 1)
		else this._date.setMonth(value - 1)
		return this
	}
	public setDay(value: number, params: NDateMethodsParams = {}): NDate {
		if (params.UTC) this._date.setUTCDate(value)
		else this._date.setDate(value)
		return this
	}
	public setHours(value: number, params: NDateMethodsParams = {}): NDate {
		if (params.UTC) this._date.setUTCHours(value)
		else this._date.setHours(value)
		return this
	}
	public setMinutes(value: number, params: NDateMethodsParams = {}): NDate {
		if (params.UTC) this._date.setUTCMinutes(value)
		else this._date.setMinutes(value)
		return this
	}
	public setSeconds(value: number, params: NDateMethodsParams = {}): NDate {
		if (params.UTC) this._date.setUTCSeconds(value)
		else this._date.setSeconds(value)
		return this
	}
	public setMilliseconds(value: number, params: NDateMethodsParams = {}): NDate {
		if (params.UTC) this._date.setUTCMilliseconds(value)
		else this._date.setMilliseconds(value)
		return this
	}

	public format(options: NDateFormatParams = {year: "numeric",  month: "2-digit",  day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"}): string {
		return this._date.toLocaleDateString("en-US", options)
	}

	private toString(): string {
		return this._date.toISOString()
	}
	private toJSON(): string {
		return this._date.toJSON()
	}
	private valueOf(): number {
		return this._date.valueOf()
	}
}
