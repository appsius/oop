const notes = [
	{
		title: 'Learn Arabic',
		body: 'I will take 3 years for you to master it',
	},
	{
		title: 'Learn Persian',
		body: 'I will take 2 years for you to master it',
	},
	{
		title: 'Speak fluent English',
		body: 'I will take 1 years for you to master it',
	},
];

const filters = {
	searchText: '',
};

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function (note) {
		return note.title
			.toLowerCase()
			.includes(filters.searchText.toLowerCase());
	});

	document.querySelector('#notes').innerHTML = '';

	filteredNotes.forEach(function (note) {
		const noteEl = document.createElement('p');
		noteEl.textContent = note.title;
		document.querySelector('#notes').appendChild(noteEl);
	});
};

renderNotes(notes, filters);

document.querySelector('#add-notes').addEventListener('click', function (e) {
	e.target.textContent = 'Button was clicked..';
});

document.querySelector('#search-text').addEventListener('input', function (e) {
	filters.searchText = e.target.value;
	renderNotes(notes, filters);
});

document.querySelector('#name-form').addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(e.target.elements.firstName.value);
	e.target.elements.firstName.value = '';
});
