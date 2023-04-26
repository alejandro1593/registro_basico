const form = document.getElementById('registration-form');
const message = document.createElement('p');
message.style.color = 'green';

form.addEventListener('submit', (event) => {
	event.preventDefault();
	message.textContent = 'User registered';
	form.appendChild(message);
});
