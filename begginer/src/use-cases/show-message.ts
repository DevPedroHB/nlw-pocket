export function showMessage(message: string) {
	console.clear();

	if (message !== "") {
		console.log(message);
		console.log("");
	}
}
