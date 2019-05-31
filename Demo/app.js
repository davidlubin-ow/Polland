const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.get('/', (req,res) => {res.sendFile(path.join(__dirname, 'index.html'))})
app.get('/foundation.html', (req,res) => {res.sendFile(path.join(__dirname, 'index-foundation.html'))})

express.static(path.join(__dirname))
app.use('/js', express.static('js'))
app.use('/json', express.static('json'))
app.use('/src', express.static('../src'))

app.listen(port, () => console.log(`Form Builder Demo app listening on port ${port}`))