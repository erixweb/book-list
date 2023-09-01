<script lang="ts">
    export let id: any

    let addedBooks: any
    let currentBook: any

    if (typeof window !== "undefined") {
        addedBooks = JSON.parse(localStorage.getItem("books-list")!)
    }

    function addBook () {
        if (addedBooks) {
            currentBook = [addedBooks].find((element: any) => element.id === id)
        }
        if (!currentBook) {
            localStorage.setItem("books-list", JSON.stringify([JSON.stringify(addedBooks) + { id }]))
        }
    }
    </script>
<button on:click={addBook}> Añadir </button>