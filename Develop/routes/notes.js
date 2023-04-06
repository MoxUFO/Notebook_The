const router = require('express').Router();
const {readFile, writeFile} = require("fs/promises")
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const latestNotes = async () => {
    // return readFile('./db/db.json').then((data) =>{
    //     console.log(JSON.parse(data))
    //  return JSON.parse(data)
    // })

   return JSON.parse(await readFile("./db/db.json", "utf-8"))

}

router.get('/', async (req, res) =>{
    res.json( await latestNotes())
});

router.post('/', async (req, res) =>{
    // console.log(req.body.title);
    console.log("Should be posting a note")
    var notes = await latestNotes()
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        note_id: uuidv4()
    }
    notes.push(newNote)
    writeFile("./db/db.json", JSON.stringify(notes))
    res.json({message: "You added a note"})
    
});  

router.delete('/', async (req, res) =>{
    let notes = await latestNotes();
    console.log(notes);
});

module.exports = router