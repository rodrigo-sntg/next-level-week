import express from 'express';

const app = express();

app.get('/users', (request, response) => {
	console.log('Listagem louca de usuários');
	const lista = ['User1', 'User2','User3'];
	response.json(lista);
});

app.listen(3333);
