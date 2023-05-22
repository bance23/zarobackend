const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 24002
var cors = require('cors')

/*var connectionData = mysql.createConnection({
  host: '192.168.0.200',
  user: 'u60_QaZMtq2ODq',
  password: 'M=3gV@@i1+9E844B^DfSe85Q',
  database: 's60_db',
  port: '3306',
})*/

/*const host = '192.168.0.200';
const user = 'u60_QaZMtq2ODq';
const password = 'M=3gV@@i1+9E844B^DfSe85Q';
const database = 's60_db';
const portdb = '3306';*/

//localhost
const host = 'localhost';
const user = 'root';
const password = '';
const database = 'colorball';
const portdb = '3306';


app.use(express.json())
app.use(cors())

//------------------------     player coin get
app.get('/', (req, res) => {
  res.send("Hello World")
})


//------------------------     player coin get
app.get('/coinget', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })

  connection.connect()

  connection.query('SELECT Coin_coin from coin where Coin_playerid = ' + req.body.bevitel1 + '', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})


//------------------------     player coin get
app.get('/coin', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('SELECT * from coin', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})


//------------------------     player coin get
app.post('/coinDelete', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('DELETE FROM palya WHERE palya_id="' + req.body.bevitel1 + '"', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})

//------------------------     player coin update
app.post('/coinUpdate', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('UPDATE coin set Coin_coin=' + req.body.bevitel1 + ' where Coin_playerid = ' + req.body.bevitel2 + '', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})

//------------------------     player coin update
app.post('/newcoin', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('INSERT INTO coin VALUES ("'+req.body.bevitel1+'", "'+req.body.bevitel2+'")', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})



//------------------------     játékos adatok lekérdezése
app.get('/player', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })

  connection.connect()
  connection.query(`insert into player values (null, '` + req.body.bevitel1 + `', CURDATE())`, (err, rows, fields) => {
    if (err) throw err

    res.send("Uj username!")
  })

  connection.end()
})


//-----------------------------------------  score felvitel
app.post('/newscore', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })

  connection.connect()
  connection.query('insert into score values (null, ' + req.body.bevitel1 + ', ' + req.body.bevitel2 + ', CURDATE(), "' + req.body.bevitel3 + '")', (err, rows, fields) => {
    if (err) throw err

    res.send("Sikerült a felvitel! ")
  })

  connection.end()
})

//
//-----------------------------------------  username kereses
app.post('/valami', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })

  connection.connect()
  connection.query('insert into score values (null, ' + req.body.bevitel1 + ', ' + req.body.bevitel2 + ', CURDATE(), "' + req.body.bevitel3 + '")', (err, rows, fields) => {
    if (err) throw err

    res.send("Sikerült a felvitel! ")
  })

  connection.end()
})


//-----------------------------------------  score felvitel
app.post('/newpalya', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('SELECT player.player_name, score.score_points, score.score_time FROM `score` INNER JOIN player ON player.player_id = score.score_playerid ORDER BY score.score_points DESC LIMIT 10', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})


//-----------------------------------------  login update
app.post('/loginUpdate', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('UPDATE login SET username="' + req.body.bevitel1 + '", password="' + req.body.bevitel2 + '" WHERE username="' + req.body.bevitel3 + '"', (err, rows, fields) => {
    if (err) throw err

    console.log(req.body.bevitel3)
    res.send("Modositas sikeres!")
  })

  connection.end()
})


//-----------------------------------------  player update
app.post('/playerUpdate', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
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
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('DELETE FROM score WHERE score_id="' + req.body.bevitel1 + '"', (err, rows, fields) => {
    if (err) throw err

    res.send("Modositas sikeres!")
  })

  connection.end()
})

app.get('/rekord', (req, res) => {
  const connection = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
    port: portdb,
  })
  connection.connect()

  connection.query('SELECT score.score_points, score.score_time FROM `score` INNER JOIN player ON player.player_id = score.score_playerid WHERE player_id="' + req.body.bevitel1 + '" ORDER BY score.score_points DESC LIMIT 1', (err, rows, fields) => {
    if (err) throw err

    console.log(rows)
    res.send(rows)
  })

  connection.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
