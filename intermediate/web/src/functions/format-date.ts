import { type FormatOptions, format, isValid, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

/**
 * Formats a date according to the provided format string and options.
 *
 * @param date - The date to format. Can be a Date object, a timestamp (number), or an ISO 8601 string.
 * @param formatStr - The format string to use for formatting the date.
 * @param options - Additional options for formatting the date.
 *
 * @returns The formatted date as a string.
 **/
export function formatDate(
	date: Date | number | string,
	formatStr: string,
	options?: FormatOptions,
) {
	let parsedDate: Date;

	if (typeof date === "string") {
		parsedDate = parseISO(date);
	} else if (typeof date === "number") {
		parsedDate = new Date(date);
	} else if (date instanceof Date) {
		parsedDate = date;
	} else {
		return "";
	}

	if (!isValid(parsedDate)) {
		return "";
	}

	return format(parsedDate, formatStr, {
		locale: ptBR,
		...options,
	});
}
