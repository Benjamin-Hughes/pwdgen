const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
})

app.get('/api/passwords', (req, res) => {
	const count = 5;

	const passwords = Array.from(Array(count).keys()).map(i => generatePassword(12, false))

	res.json(passwords);

	console.log(`Sent ${count} passwords`);
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = 8080;
app.listen(port);

console.log(`Password generator listening on port ${port}`);
