<script lang="ts">
	import { ERROR_RETURN, Try } from "../try"

	export let id: any

	let addedBooks: any
	let currentBook: any

	function findBookState () {
		addedBooks = Try(() => JSON.parse(localStorage.getItem("books-list")!)) || []
		if (addedBooks !== ERROR_RETURN) {
			currentBook = addedBooks.find((element: any) => element.id === id)
		}
	}

	if (typeof window !== "undefined") {
		findBookState()
		window.addEventListener("storage", (e) => {
			if (e.key !== "books-list") return

			findBookState()
		})
	}
	function addBook() {
		if (!currentBook) {
			addedBooks.push({ id })
			localStorage.setItem("books-list", JSON.stringify(addedBooks))
			currentBook = true
		}
	}
	function deleteBook() {
		if (currentBook) {
			addedBooks.splice(addedBooks.findIndex((element: any) => element.id === id), 1)
			currentBook = false
			localStorage.setItem("books-list", JSON.stringify(addedBooks))
		}
	}
</script>

{#if typeof currentBook === "undefined" || currentBook === false}
	<button 
		class="p-[10px] px-[25px] bg-sky-500 rounded-[15px] mt-[20px]"
		on:click={addBook}>
		Añadir
	</button>
{:else}
	<button 
		class="p-[10px] px-[25px] bg-red-600 rounded-[15px] mt-[20px]"
		on:click={deleteBook}>
		Eliminar
	</button>
{/if}
