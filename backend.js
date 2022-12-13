const fs = require('fs');
const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
var cors = require('cors')

app.use(express.json())
app.use(cors())

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

//------------------------     login adatok lekérdezése
app.get('/login', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()

  connection.query('SELECT * from login', (err, rows, fields) => {
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

  connection.connect()
  connection.query(`insert into player values (null, '` + req.body.bevitel1 + `', CURDATE())`, (err, rows, fields) => {
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

  connection.connect()
  connection.query('insert into score values (null, ' + req.body.bevitel1 + ', ' + req.body.bevitel2 + ', ' + req.body.bevitel3 + ', CURDATE(), "' + req.body.bevitel4 + '")', (err, rows, fields) => {
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
  connection.connect()

  connection.query('insert into palya values (null, "' + req.body.bevitel1 + '")', (err, rows, fields) => {
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

  connection.query('SELECT player.player_name, score.score_points, score.score_time FROM `score` INNER JOIN player ON player.player_id = score.score_playerid WHERE score.score_palyaid = ' + req.body.bevitel1 + ' ORDER BY score.score_points DESC LIMIT 10', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})

//szoszi szöszi

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})