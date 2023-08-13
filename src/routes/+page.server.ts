export async function load() {
	const response = await fetch(
		'https://raw.githubusercontent.com/christianvuerings/kwoti-quotes/main/dist/quotes.json'
	);
	const quotes = await response.json();

	return {
		quote: quotes[Math.floor(Math.random() * quotes.length)]
	};
}
