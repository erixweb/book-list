<script lang="ts">
	import BookLink from "./book-link.svelte"

	export let books: any

	let library: any = books["library"]
</script>

<div class="flex flex-wrap mt-[20px] gap-[20px] p-[20px] w-full">
	{#each library as book}
		<BookLink {book} />
	{/each}
</div>
