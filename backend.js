const fs = require('fs');
const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
var path = require('path');

app.use(express.json())

function bufferFile(fileName) {
  return fs.readFileSync(path.join(__dirname, fileName));
}

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'colorball'
})*/

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 's_60db'
})*/


//------------------------     játékos adatok lekérdezése
app.get('/player', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()

  connection.query('SELECT * from player', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})

//-----------------------------------------  player felvitel
app.post('/newplayer', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  let username = bufferFile("username.txt");
  console.log("username: " + username);

  connection.connect()
  connection.query(`insert into player values (null, '` + username + `', CURDATE())`, (err, rows, fields) => {
    if (err) throw err

    res.send("Sikerült a felvitel! ")
  })

  connection.end()
})


//-----------------------------------------  score felvitel
app.post('/newscore', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  let playerid = bufferFile("playerid.txt")
  let palyaid = bufferFile("palyaid.txt");
  let score = bufferFile("score.txt")
  let time = bufferFile("time.txt")

  connection.connect()

  connection.query('insert into score values (null, ' + playerid + ', ' + palyaid + ', ' + score + ', CURDATE(), "' + time + '")', (err, rows, fields) => {
    if (err) throw err

    res.send("Sikerült a felvitel! ")
  })

  connection.end()
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
