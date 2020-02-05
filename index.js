const express = require('express')
const app = express()
const port = 1513
let counter = 0

app.get('/', (req, res) => res.send('Hello PJ!'))

app.get('/counter', function (req, res) {

	counter = counter + 1;

  res.send('counter ' + counter);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

