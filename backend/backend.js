const express = require('express')
const app = express()
const port = 3000

app.use(express.static('kepek'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function ido() {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return year + '-' + month + '-' + date
}


//------------------------     játékos adatok lekérdezése
app.get('/player', (req, res) => {
    const mysql = require('mysql')
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
    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'colorball'
    })
    
    let datum = ido()
    console.log(datum)
    connection.connect()
    
    connection.query('insert into player values (null, "'+req.body.bevitel1+'", CURDATE())', (err, rows, fields) => {
      if (err) throw err
    
      res.send("Sikerült a felvitel!")
    })
    
    connection.end()
  })


  //-----------------------------------------  score felvitel
  app.post('/newscore', (req, res) => {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'colorball'
    })
    
    connection.connect()
    
    connection.query('insert into score values (null, "'+req.body.bevitel1+'", "'+req.body.bevitel2+'", "'+req.body.bevitel3+'", CURDATE(), "'+req.body.bevitel4+'")', (err, rows, fields) => {
      if (err) throw err
    
      res.send("Sikerült a felvitel!")
    })
    
    connection.end()
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})