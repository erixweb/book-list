<script lang="ts">
	import type { Library } from "../types"

	export let book: Library
</script>

<div class="flex flex-wrap p-[20px]">
	<div class="ml-[0px]">
		<img
			src={book.book.cover}
			alt=""
			style={`view-transition-name: book-${book.book.ISBN}`}
			class="w-[400px] h-[500px] max-w-[100%]"
		/>
	</div>
	<div class="ml-[0px] mt-[0px]">
		<h1 class="text-[40px] font-bold">
			{book.book.title}
		</h1>
        <p>
            {book.book.synopsis}
        </p>
	</div>
</div>
