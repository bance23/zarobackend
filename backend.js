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

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'colorball'
})

/*const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 's_60db'
})*/


//------------------------     játékos adatok lekérdezése
app.get('/player', (req, res) => {
    connection.connect()
    
    connection.query('SELECT * from test', (err, rows, fields) => {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  })

//-----------------------------------------  player felvitel
  app.post('/newplayer', (req, res) => {   
    let username = bufferFile("adat.txt");
    console.log("username: " + username);
    
    connection.connect()
    connection.query(`insert into test values (null, '`+username+`', CURDATE())`, (err, rows, fields) => {
      if (err) throw err
    
      res.send("Sikerült a felvitel! ")
    })
    
    connection.end()
  })


  //-----------------------------------------  score felvitel
  app.post('/newscore', (req, res) => {

    let newscore = bufferFile("adat.txt");
    console.log("newscore: " + newscore);

    let tomb = newscore.split(' ');

    let playerid = tomb[0]
    let palyaid = tomb[1]
    let points = tomb[2]
    let playtime = tomb[3]


    connection.connect()
    connection.query('insert into score values (null, '+playerid+', '+palyaid+', '+points+', CURDATE(), "'+playtime+'")', (err, rows, fields) => {
      if (err) throw err
    
      res.send("Sikerült a felvitel! ")
    })
    
    connection.end()
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})