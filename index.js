const express = require('express')
const app = express()
const port = 1513
let counter = 0

app.use (express.static('public'))

app.get('/', (req, res) => res.send('Hello PJ!'))

app.get('/counter', function (req, res) {

	counter = counter + 1;

  res.send('counter ' + counter);
})

app.get('/date', function (req, res) {

	let d = new Date();
	console.log(d);

	counter = counter + 1;

  res.send('Date ' + d);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

