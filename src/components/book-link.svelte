<script lang="ts">
	import type { Library } from "../types"

	export let book: Library
</script>

<a href={`libro/${book.book.href}`} class="w-full max-w-[350px] bg-zinc-700 rounded-[15px]">
	<img
		src={book.book.cover}
		alt=""
		class="w-full h-[350px] object-fill rounded-t-[15px]"
		style={`view-transition-name: book-${book.book.ISBN}`}
	/>
	<div class="p-[1em]">
		<h2>
			{book.book.title}
		</h2>
		<p>
			{book.book.synopsis}
		</p>
	</div>
</a>
