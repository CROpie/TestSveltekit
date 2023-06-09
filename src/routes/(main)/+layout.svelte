<script>
	import Title from '$lib/title.svelte';
	import '../../styles/global.css';
</script>

<header>
	<Title title="BeerBear Beer Guides" />
</header>
<main>
	<!-- page content -->
	<slot />
</main>
<footer>
	<p>Copyright 2023 BeerBear Beer Guides</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	footer {
		text-align: center;
	}
</style>
