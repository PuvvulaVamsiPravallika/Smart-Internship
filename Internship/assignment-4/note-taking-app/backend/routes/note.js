const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// GET /notes - Retrieve all notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET /notes/:id - Retrieve a note by ID
router.get('/notes/:id', getNote, (req, res) => {
    res.json(res.note);
});

// POST /notes - Create a new note
router.post('/notes', async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content
    });
    try {
        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT /notes/:id - Update a note by ID
router.put('/notes/:id', getNote, async (req, res) => {
    if (req.body.title != null) {
        res.note.title = req.body.title;
    }
    if (req.body.content != null) {
        res.note.content = req.body.content;
    }
    try {
        const updatedNote = await res.note.save();
        res.json(updatedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE /notes/:id - Delete a note by ID
router.delete('/notes/:id', getNote, async (req, res) => {
    try {
        await res.note.remove();
        res.json({ message: 'Deleted Note' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware function to get note by ID
async function getNote (req, res, next) {
    let note;
    try {
        note = await Note.findById(req.params.id);
        if (note == null) {
            return res.status(404).json({ message: 'Cannot find note' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.note = note;
    next();
}

module.exports = router;
