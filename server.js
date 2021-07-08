const express = require('express')
const app = express();
var cors = require('cors');
const { v4: uuidV4 } = require('uuid')    

app.use(cors());

let jitsiID = "";


app.get('/', (req, res) => {

   res.send('<h1>Api is working properly :)')
})

app.get('/generateID', (req, res) => {

    jitsiID = "myroom"+Math.random();
    res.json({
        id: jitsiID,
    })
})

app.get('/getID', (req, res) => {

    res.json({
        id: jitsiID
    })
})


app.get('/hangup', (req, res) => {

    jitsiID = "";
    res.send('hangup')
})


app.listen(5000)