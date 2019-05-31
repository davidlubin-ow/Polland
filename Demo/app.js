const express = require('express')
const app = express()
const path = require('path')
const port = 8080

app.get('/', (req,res) => {res.sendFile(path.join(__dirname, 'index.html'))})

express.static(__dirname)
app.use('/js', express.static('js'))

app.listen(port, () => console.log(`Form Builder Demo app listening on port ${port}`))