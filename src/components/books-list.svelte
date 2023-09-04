<script lang="ts">
	import type { Library } from "../types"
	import BookLink from "./book-link.svelte"
	import FiltersForm from "./filters-form.svelte"

	export let books: any
	export let url: URL


	let library: any = books["library"]
	let booksFilter: Library[] = library

	const filter = {
		name: url.searchParams.get("name")! || "",
		minpages: url.searchParams.get("minpages") || "",
		maxpages: url.searchParams.get("maxpages") || ""
	}
	
	if (filter.name) {
		booksFilter = booksFilter.filter((book: any) => book.book.title.toLocaleLowerCase().includes(filter.name.toLowerCase()))
	}
	if (filter.minpages) {
		booksFilter = booksFilter.filter((book: Library) => book.book.pages >= parseInt(filter.minpages))
	}
	if (filter.maxpages) {
		booksFilter = booksFilter.filter((book: Library) => book.book.pages <= parseInt(filter.maxpages))
	}


</script>

<FiltersForm minpages={filter.minpages} maxpages={filter.maxpages} name={filter.name} />
<div class="flex flex-wrap mt-[20px] gap-[20px] p-[20px] w-full">
	{#each booksFilter as book}
		<BookLink 
			{book}
			lazy={true}
		/>
	{/each}
</div>
