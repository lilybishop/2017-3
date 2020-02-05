const express = require('express')
const app = express()
const port = 1510
let counter = 0

 app.use(express.static('public'));

app.get('/Hello', (req, res) => res.send('Hello Lily!'))
counter = counter + 1;
app.get('/counter', function (req, res) {
  res.send('counter' + counter)
})

app.get('/date', function (req, res) {
	let d = new Date();
  res.send('Date ' + d)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))