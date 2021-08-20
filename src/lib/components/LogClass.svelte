<script>
	// Imports
	import BtnBlock from '../ui/BtnBlock.svelte';

	// Variables
	export let students;
	export let logClass;
	let selectedStudent;
	let selectedDate;

	// Functions
	function submitLogClass() {
		logClass({ selectedStudent, selectedDate });
	}
</script>

<h2 class="text-2xl mb-4" id="logClassForm">Log A Class</h2>

<form class="w-full lg:w-1/2 p-4 mb-12 bg-light-200 border-1 shadow rounded-lg text-left" on:submit|preventDefault={submitLogClass}>
	<div class="mb-3">
		<label>
			<span>Select the student you taught:</span>
			<select class="w-full block mt-2 px-3 py-3 outline-none text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:border-blue-400 focus:outline-none focus:ring" name="selectStudent" id="selectStudent" bind:value={selectedStudent}>
				{#if students}
					<option value="defaultSelect" selected disabled>Select from {students.length} students</option>
					{#each students as student}
						<option value={student}>{student.studentName}</option>
					{/each}
				{:else}
					<option value="defaultSelect" selected disabled>No students</option>
				{/if}
			</select>
		</label>
	</div>

	<div class="mb-3 w-full">
		<label>
			<span>Select the lesson date:</span>
			<input class="block mt-2 px-3 py-3 outline-none text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:border-blue-400 focus:outline-none focus:ring" type="number" name="date" id="date" min="1" max="31" placeholder="Date" bind:value={selectedDate} />
		</label>
	</div>

	<BtnBlock>Log Class</BtnBlock>
</form>
