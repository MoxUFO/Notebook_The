const router = require('express').Router();
const notesRouter = require('./notes')


router.use('/notes', notesRouter);

// router.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );


module.exports = router

// const router = require('express').Router();
// const notesRouter = require('./notes')

// router.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// );

// router.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// );


// module.exports = router