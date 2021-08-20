<script>
	// Components
	import BtnBlock from '../ui/BtnBlock.svelte';

	// Variables
	let studentName = '';
	export let addStudent;

	// Functions
	function submitNewStudent() {
		addStudent({ studentName });
		studentName = '';
	}
</script>

<h2 class="text-2xl mb-4" id="addStudentForm">Add New Student</h2>

<form class="w-full lg:w-1/2 p-4 mb-12 bg-light-200 border-1 shadow rounded-md text-left" on:submit|preventDefault={submitNewStudent}>
	<div class="mb-3 pt-0">
		<label>
			<span>Please enter your student's name:</span>
			<input class="px-3 py-3 mt-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full" type="text" name="studentName" id="studentName" placeholder="Student's Name" bind:value={studentName} />
		</label>
	</div>

	<BtnBlock>Add Student</BtnBlock>
</form>
