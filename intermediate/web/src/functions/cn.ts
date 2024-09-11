import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge Tailwind CSS classes using `clsx` and `twMerge`.
 *
 * This function accepts any number of `ClassValue` inputs, which can be strings, arrays, or objects.
 * It uses `clsx` to merge the inputs into a single string of class names, and then applies `twMerge`
 * to ensure that any duplicate classes are removed.
 *
 * @param inputs - Any number of `ClassValue` inputs to be merged.
 *
 * @returns A single string of class names, with duplicates removed.
 **/
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
