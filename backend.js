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


//------------------------     palya adatok lekérdezése
app.get('/palya', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()

  connection.query('SELECT * from palya', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})


//
//------------------------     score adatok lekérdezése
app.get('/score', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()

  connection.query('SELECT * from score', (err, rows, fields) => {
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

app.post('/toplist', (req, res) => {
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


//-----------------------------------------  login update
app.post('/loginUpdate', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('UPDATE login SET username="' + req.body.bevitel1 + '", password="' + req.body.bevitel2 + '" WHERE username="' + req.body.bevitel3 + '"', (err, rows, fields) => {
    if (err) throw err
    
    //console.log(req.body.bevitel3)
    res.send("Modositas sikeres!")
  })

  connection.end()
})


//-----------------------------------------  player update
app.post('/playerUpdate', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('UPDATE player SET player_name="' + req.body.bevitel1 + '", player_join_date="' + req.body.bevitel2 + '" WHERE player_name="' + req.body.bevitel3 + '"', (err, rows, fields) => {
    if (err) throw err
    
    console.log(req.body.bevitel2)
    res.send("Modositas sikeres!")
  })

  connection.end()
})

//-----------------------------------------  score update
app.post('/scoreUpdate', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('UPDATE score SET score_playerid="' + req.body.bevitel1 + '", score_palyaid="' + req.body.bevitel2 + '", score_points="' + req.body.bevitel3 + '", score_date="' + req.body.bevitel4 + '", score_time="' + req.body.bevitel5 + '" WHERE score_id = "' + req.body.bevitel6 + '"', (err, rows, fields) => {
    if (err) throw err

    res.send("Modositas sikeres!")
  })

  connection.end()
})


//-----------------------------------------  palya update
app.post('/palyaUpdate', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('UPDATE palya SET palya_name="' + req.body.bevitel1 + '" WHERE palya_id="' + req.body.bevitel2 + '"', (err, rows, fields) => {
    if (err) throw err
    
    //console.log(req.body.bevitel3)
    res.send("Modositas sikeres!")
  })

  connection.end()
})

//-----------------------------------------  login Delete
app.post('/loginDelete', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('DELETE FROM login WHERE username="' + req.body.bevitel1 + '"', (err, rows, fields) => {
    if (err) throw err
  
    res.send("Modositas sikeres!")
  })

  connection.end()
})

//-----------------------------------------  palya Delete
app.post('/palyaDelete', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('DELETE FROM palya WHERE palya_id="' + req.body.bevitel1 + '"', (err, rows, fields) => {
    if (err) throw err
  
    res.send("Modositas sikeres!")
  })

  connection.end()
})

//-----------------------------------------  player Delete
app.post('/playerDelete', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('DELETE FROM player WHERE player_id="' + req.body.bevitel1 + '"', (err, rows, fields) => {
    if (err) throw err
  
    res.send("Modositas sikeres!")
  })

  connection.end()
})

//-----------------------------------------  score Delete
app.post('/scoreDelete', (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'colorball'
  })
  connection.connect()
  
  connection.query('DELETE FROM score WHERE score_id="' + req.body.bevitel1 + '"', (err, rows, fields) => {
    if (err) throw err
  
    res.send("Modositas sikeres!")
  })

  connection.end()
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})