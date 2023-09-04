<script>
	export let minpages, maxpages, name
</script>

<form class="w-full p-[20px] max-w-[400px] ml-0">
	<input
		type="text"
		name="name"
		class="text-white bg-zinc-900 border-none p-[8px] rounded-[8px] outline-none w-full"
		autocomplete="off"
		placeholder="Título del libro"
		value={name}
	/>
	<div class="py-[16px]">
		<div class="inline-flex gap-[40px]">
			<div class="ml-[0px]">
				<h3>Mínimo de páginas</h3>
				<input type="range" min="150" max="1000" name="minpages" value={minpages} />
			</div>
			<div class="ml-[0px]">
				<h3>Máximo de páginas</h3>
				<input type="range" min="150" max="3500" name="maxpages" value={maxpages} />
			</div>
		</div>
	</div>

	<button class="w-full p-[8px] px-[15px] rounded-[8px] bg-sky-600"> Buscar </button>
</form>
