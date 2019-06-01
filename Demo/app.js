const express = require('express')
const app = express()
const path = require('path')
const port = 8080
const mongo = require('mongodb').MongoClient
const mongoUrl = 'mongodb://localhost:27017'
const dbUpdates = require('./db.js')

let db, demoCollection;

mongo.connect(mongoUrl, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  db = client.db('formdata')
  demoCollection = db.collection('demo1')
})

app.get('/', (req,res) => {res.sendFile(path.join(__dirname, 'index.html'))})
app.get('/generator.html', (req,res) => {res.sendFile(path.join(__dirname, 'generator.html'))})
app.get('/foundation.html', (req,res) => {res.sendFile(path.join(__dirname, 'index-foundation.html'))})

app.get('/push', (req,res) => {
  logger.info('Pushing data to database');
  var status = dbUpdates.push(req, demoCollection);
  res.status(200).send({ status });
})

app.get('/pull', (req,res) => {
  logger.info('Pulling data from database');
  var status = dbUpdates.pull(req, demoCollection);
  res.status(200).send({ status });
})

express.static(path.join(__dirname))
app.use('/js', express.static('js'))
app.use('/json', express.static('json'))
app.use('/src', express.static('../src'))

app.listen(port, () => console.log(`Form Builder Demo app listening on port ${port}`))