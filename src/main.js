import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Helen',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'automation of building, testing and deployment'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Jenkins',
		// What do you want to learn in this workshop? 
		expectations: [
			'basic knowledge on how to set up a pipeline, rough understanding of the pipeline steps'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'yoga', 
			'hiking',
			'reading'
		]
	}
});
