export interface Value {
	value?: String;
	day?: Number;
	weekDay?: Number;
	month?: Number;
	year?: Number;
	hour?: Number;
	minute?: Number;
	am?: Boolean;
}

export interface TmpValue {
	month: Number;
	year: Number;
}

export interface TmpYearValue {
	year: Number;
	month: Number;
}

export interface TmpYearRangeValue {
	year: Number;
	start: Number;
	end: Number;
}