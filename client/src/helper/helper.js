export function format(date) {
	const formattedDate = new Date(date).toLocaleDateString();
	return formattedDate;
}
