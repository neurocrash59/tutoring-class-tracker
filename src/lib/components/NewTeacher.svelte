<script>
	import BtnBlock from '../ui/BtnBlock.svelte';

	export let addTeacher;
	let newTeacher = '';

	function submitNewTeacher() {
		addTeacher(newTeacher);
		newTeacher = '';
	}
</script>

<h2 class="text-2xl mb-4">Hello, Teacher!</h2>
<p class="w-2/3 mb-4">If you've somehow found your way here, it likely means that you want to keep track of when you tutor each of your students without having to edit an Excel spreadsheet everyday. Well, you've come to the right place! This simple class tracker will allow you to keep track of your students, log lesson dates, and even generate an Excel spreadsheet with the information you've entered.</p>

<h2 class="text-2xl mb-4">How Does It Work?</h2>
<p class="w-2/3 mb-8">
	It's pretty simple. Just enter your name below to get set up. Then you can set the current working month, add students, log the dates you've taught a student, and even download an Excel spreadsheet. You don't have to worry about logging in or any personal information because everything your enter will be stored on your web browser's (Firefox, Chrome, Safari, etc.) built-in <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Web Storage API</a>
	. Basically, we don't store any information you enter here because your browser can store it locally. Although it should be mentioned that turning on "incognito" mode will wipe that data, so be sure to download a spreadsheet beforehand!
</p>

<h2 class="text-2xl mb-4">Get Started</h2>

<form class="w-1/2 p-4 mb-12 bg-light-200 border-1 shadow rounded-lg text-left" on:submit={submitNewTeacher}>
	<div class="mb-3 pt-0">
		<label>
			<span>Anyway, enter your name here to get started:</span>
			<input class="px-3 py-3 mt-2 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:ring w-full" type="text" name="newTeacher" placeholder="Your Name" bind:value={newTeacher} />
		</label>
	</div>

	<BtnBlock>Add Teacher</BtnBlock>
</form>
