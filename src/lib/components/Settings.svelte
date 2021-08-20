<script>
	import BtnPrimary from '../ui/BtnPrimary.svelte';

	export let teacher;
	export let currentMonth;
	let selectedMonth;
	const year = new Date().getFullYear();

	function leapYear() {
		return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
	}

	function setMonth() {
		currentMonth = selectedMonth;
		localStorage.setItem('currentMonth', JSON.stringify(currentMonth));
	}
</script>

<h2 class="text-2xl mb-4">Hello, {teacher}</h2>

<form class="w-full lg:w-1/2 p-4 mb-12 bg-light-200 border-1 shadow rounded-md text-left" on:submit={setMonth}>
	<label>
		Please selected the current month:
		<select class="mt-2 px-3 py-3 mr-6 outline-none text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:border-blue-400 focus:outline-none focus:ring" name="month" id="month" bind:value={selectedMonth}>
			<option value="" disabled selected>Select month</option>
			<option value="January">January</option>
			<option value="February">February</option>
			<option value="March">March</option>
			<option value="April">April</option>
			<option value="May">May</option>
			<option value="June">June</option>
			<option value="July">July</option>
			<option value="August">August</option>
			<option value="September">September</option>
			<option value="October">October</option>
			<option value="November">November</option>
			<option value="December">December</option>
		</select>
	</label>
	<BtnPrimary>Set Month</BtnPrimary>
</form>
