<script lang="ts">
	import { ERROR_RETURN, Try } from "../try"

	export let id: any

	let addedBooks: any
    let currentBook: any

	if (typeof window !== "undefined") {
		addedBooks = Try(() => JSON.parse(localStorage.getItem("books-list")!)) || []
        if (addedBooks !== ERROR_RETURN) {
            currentBook = addedBooks.find((element: any) => element.id === id)
        }
	}
	function addBook() {
		if (!currentBook) {
            addedBooks.push({id})
            localStorage.setItem("books-list", JSON.stringify(addedBooks))
            currentBook = true
        }
	}
</script>

<button on:click={addBook}> Añadir </button>
