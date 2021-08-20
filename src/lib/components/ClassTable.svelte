<script>
	// Components
	import EditModal from './EditModal.svelte';

	// Libraries
	import Icon from 'svelte-awesome';
	import { pencil, times, download } from 'svelte-awesome/icons';
	import XLSX from 'xlsx';

	// Variables
	export let students;
	export let teacher;
	export let removeStudent;
	export let setLocalStorage;
	export let currentMonth;
	let editMode = false;
	let setIndex = null;

	// Functions
	function enableEditMode(e) {
		setIndex = students.findIndex((s) => s.id === parseInt(this.id));
		editMode = true;
	}

	function disableEditMode() {
		editMode = false;
	}

	function editStudent(e) {
		const newDates = document.getElementById('new-dates');
		students[setIndex].dates = newDates.value.split(',');
		setLocalStorage();
		setIndex = null;
		disableEditMode();
	}

	function exportToExcel(xlsx, fn, dl) {
		const table = document.querySelector('table');
		const tableData = XLSX.utils.table_to_book(table, { sheet: 'sheet1' });

		return dl
			? XLSX.write(tableData, {
					bookType: xlsx,
					bookSST: true,
					type: 'string',
			  })
			: XLSX.writeFile(tableData, fn || 'completedClasses.xlsx');
	}
</script>

<h2 class="text-2xl mb-4">Class Log</h2>

<button class="mb-4" on:click={exportToExcel}><Icon data={download} scale="2" /></button>
<div class="w-full shadow overflow-hidden border-1 border-gray-200 rounded-lg">
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				<th colspan="2" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Month: {currentMonth}</th>
				<th colspan="2" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher: {teacher}</th>
			</tr>
			<tr>
				<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
				<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lesson Dates</th>
				<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Edit</th>
				<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
			</tr>
		</thead>
		<tbody class="bg-white divide-y divide-gray-200">
			{#if students}
				{#each students as student, index (student.id)}
					<tr>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="text-sm text-gray-500">{student.studentName}</div>
						</td>
						<td class="px-6 py-4 overflow-ellipsis">
							<div class="text-sm text-gray-500">{student.dates.join(', ')}</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<button class="text-gray-600 hover:text-lime-600" id={student.id} on:click={enableEditMode}><Icon data={pencil} /></button>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<button class="text-gray-600 hover:text-red-600" id={student.id} on:click={removeStudent}><Icon data={times} /></button>
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>

{#if editMode}
	<EditModal {editStudent}>
		<input class="px-3 py-3 mt-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full" type="text" id="new-dates" value={students[setIndex].dates} />
	</EditModal>
{/if}
