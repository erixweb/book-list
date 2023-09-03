<script lang="ts">
	import { Try } from "../try"
	import json from "../json/books.json"
	import type { Library } from "../types"
	import BookLink from "./book-link.svelte"

	let booksList: any
	let booksData: Library[]

	if (typeof window !== "undefined") {
		booksList = Try(() => JSON.parse(localStorage.getItem("books-list")!)) || []

		if (typeof booksList === "object") {
			booksData = booksList.map((book: any) => {
				return json["library"].find((element) => element.book.ISBN === book.id)
			})
		}
	}
</script>

<div class="flex flex-wrap mt-[20px] gap-[20px] p-[20px] w-full">
	{#if booksData}
		{#each booksData as book}
			<BookLink 
				{book}
				lazy={false}
			/>
		{/each}
	{/if}
</div>
