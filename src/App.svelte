<script>
	// Imports
	import { onMount, afterUpdate } from 'svelte';

	import NewTeacher from './lib/components/NewTeacher.svelte';
	import Settings from './lib/components/Settings.svelte';
	import AddStudent from './lib/components/AddStudent.svelte';
	import LogClass from './lib/components/LogClass.svelte';
	import ClassTable from './lib/components/ClassTable.svelte';

	// Variables
	let students = [];
	let teacher = '';
	let currentMonth = '';

	// Functions
	function addTeacher(newTeacher) {
		const teacher = newTeacher;

		localStorage.setItem('teacher', JSON.stringify(teacher));
	}

	function addStudent({ studentName }) {
		const student = {
			id: Date.now(),
			studentName,
			dates: [],
		};

		students = [...students, student];
	}

	function logClass({ selectedStudent, selectedDate }) {
		const index = students.findIndex((student) => selectedStudent.id === student.id);

		students[index].dates = [...students[index].dates, selectedDate];

		students[index].dates.sort((a, b) => a - b);
	}

	function removeStudent() {
		students = students.filter((s) => s.id !== parseInt(this.id));
	}

	function setLocalStorage() {
		localStorage.setItem('students', JSON.stringify(students));
	}

	onMount(() => {
		// Check localStorage for values. Assign values to vars, otherwise set vars as empty
		students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [];

		teacher = localStorage.getItem('teacher') ? JSON.parse(localStorage.getItem('teacher')) : '';

		currentMonth = localStorage.getItem('currentMonth') ? JSON.parse(localStorage.getItem('currentMonth')) : '';
	});

	afterUpdate(() => setLocalStorage());
</script>

<header class="w-full bg-light-400 px-4 py-8 text-gray-800 text-center">
	<h1 class="text-3xl uppercase">Class Tracker</h1>
	<p class="capitalize">An App For Tutors</p>
</header>

<main class="w-full min-h-screen bg-light-400 px-4 py-8 text-gray-800 flex flex-col items-center">
	{#if !teacher}
		<NewTeacher {addTeacher} />
	{:else}
		<Settings {teacher} {currentMonth} />
		<AddStudent {addStudent} />
		<LogClass {students} {logClass} />
		<ClassTable {students} {currentMonth} {teacher} {removeStudent} {setLocalStorage} />
	{/if}
</main>

<style windi:preflights:global windo:safelist:global>
</style>
