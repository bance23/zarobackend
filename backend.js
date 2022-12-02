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


//-----------------------------------------  score felvitel
app.post('/newpalya', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })

  let palya_name = bufferFile("ppalyanev.txt");

  connection.connect()

  connection.query('insert into palya values (null, ' + palya_name + ')', (err, rows, fields) => {
    if (err) throw err

    res.send("Sikerült a felvitel! ")
  })

  connection.end()
})

app.get('/toplist', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()

  //let palya_id = bufferFile("ppalyaid.txt");

  connection.query('SELECT player.player_name, score.score_points, score.score_time FROM `score` INNER JOIN player ON player.player_id = score.score_playerid WHERE score.score_palyaid = ' + req.body.bevitel1 + ' ORDER BY score.score_points DESC LIMIT 10', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
