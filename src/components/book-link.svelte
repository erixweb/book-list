<script lang="ts">
	import type { Book, Library } from "../types"

	export let book: Library
</script>

<a href={book.book.ISBN} class="w-full max-w-[400px] bg-zinc-700 rounded-[15px]">
	<img src={book.book.cover} alt="" class="w-full h-[400px] object-fill rounded-t-[15px]" />
	<div class="p-[1em]">
		<h2>
			{book.book.title}
		</h2>
		<p>
			{book.book.synopsis}
		</p>
	</div>
</a>
