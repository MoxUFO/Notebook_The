const express = require('express');
const path = require('path');

const PORT = 3001;

const app = express();



app.use(express.static('public'));


app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
); 

app.get('/*', (req,res) =>{
  res.sendFile(path.join(__dirname, '/public/pages/404.html'))
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} ---9595!`)
);