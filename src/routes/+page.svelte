<script>
	export let data;
</script>

<h1>Quote</h1>

<ul>
	<li>{data.quote.text} {data.quote.author}</li>
</ul>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<style>
	h1 {
		width: 100%;
	}
</style>
