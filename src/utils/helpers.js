/**
A function that returns the current section in a day
@param { Boolean }.-- returns true if it's day time and false if its night 
*/

import writings from "../data/writings.json";

export function day() {
	const now = new Date();
	const hour = now.getHours();
	if (hour > 4 && hour < 18) {
		return "true";
	}
	return "false";
}

export function formatPostDate(date, lang) {
	if (typeof Date.prototype.toLocaleDateString !== "function") {
		return date;
	}

	date = new Date(date);
	const args = [
		lang,
		{ day: "numeric", month: "long", year: "numeric" }
	].filter(Boolean);
	return date.toLocaleDateString(...args);
}

export function sortedWritings() {
	const sortedSlugs = Object.keys(writings).sort(
		(a, b) => new Date(writings[b].date) - new Date(writings[a].date)
	);

	const sortedWritings = sortedSlugs.map(slug => ({
		slug,
		...writings[slug]
	}));

	return sortedWritings;
}
