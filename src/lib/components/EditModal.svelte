<script>
	import { blur, fade, fly } from 'svelte/transition';
	import BtnBlock from '../ui/BtnBlock.svelte';

	export let editStudent;
</script>

<div class="modal-container" in:blur out:fade>
	<div class="modal-content" transition:fly={{ y: 200 }}>
		<form on:submit|preventDefault={editStudent} class="w-2/3 p-4 mb-12 bg-light-200 border-1 shadow rounded-lg text-left">
			<h2 class="text-2xl mb-4 mt-2">Edit Lesson Dates</h2>
			<div class="mb-3 pt-0">
				<slot />
			</div>
			<BtnBlock>Submit</BtnBlock>
		</form>
	</div>
</div>

<style>
	.modal-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		z-index: 2;
	}
	.modal-content {
		background: var(--mainWhite);
		width: 85vw;
		max-width: 35rem;
		margin: 0 auto;
		margin-top: 5rem;
		padding: 3rem;
		border-radius: var(--mainBorderRadius);
		position: relative;
	}
</style>
