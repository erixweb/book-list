<script lang="ts">
	import type { Library } from "../types"

	export let book: Library
</script>

<div class="flex flex-wrap p-[20px]">
	<div class="ml-[0px] text-center">
		<img
			data-src={book.book.cover}
			loading="lazy"
			alt=""
			style={`view-transition-name: book-${book.book.ISBN}`}
			class="w-[400px] h-[500px] max-w-[100%]"
		/>
	</div>
	<div class="ml-[0px] mt-[0px] p-[16px]">
		<h1 class="text-[40px] font-bold text-sky-500 mb-[12px]">
			{book.book.title}
		</h1>
		<h2 class="text-[25px] mb-[20px]">
			{book.book.author.name}
		</h2>
		<p>
			<strong>
				{book.book.year}
			</strong>
		</p>
		<p class="mt-[20px]">
			Libro de
			<strong>
				{book.book.genre}
			</strong>
		</p>
		<p>
			<strong>
				{book.book.pages}
			</strong>
			páginas
		</p>

		<h2 class="text-[25px] font-bold mt-[20px]">Sinopsis</h2>
		<p class="max-w-[450px]">
			{book.book.synopsis}
		</p>
		<div>
			<h2 class="text-[22px] font-bold my-[20px]">Del mismo autor</h2>
			<ul>
				{#each book.book.author.otherBooks as otherBook}
					<li class="mb-[5px]">
						{otherBook}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
