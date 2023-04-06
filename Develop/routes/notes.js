const router = require('express').Router();
const {readFile, writeFile} = require("fs/promises")
const path = require('path');

const latestNotes = async () => {
    // return readFile('./db/db.json').then((data) =>{
    //     console.log(JSON.parse(data))
    //  return JSON.parse(data)
    // })

   return JSON.parse(await readFile("./db/db.json", "utf-8"))

}

router.get('/', async (req, res) =>{
    // res.json( await latestNotes())
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

router.post('/', async (req, res) =>{
    console.log(req.body);
    console.log("Should be posting a note")
    var notes = await latestNotes()
    notes.push(req.body)
    writeFile("./db/db.json", JSON.stringify(notes))
    res.json({message: "You added a note"})
});

module.exports = router