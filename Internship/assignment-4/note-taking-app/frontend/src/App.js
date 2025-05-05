import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import axios from 'axios';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const res = await axios.get('http://localhost:5000/api/notes');
        setNotes(res.data);
    };

    const addNote = async (note) => {
        const res = await axios.post('http://localhost:5000/api/notes', note);
        setNotes([...notes, res.data]);
    };

    const editNote = async (updatedNote) => {
        const res = await axios.put(`http://localhost:5000/api/notes/${updatedNote._id}`, updatedNote);
        setNotes(notes.map(note => (note._id === updatedNote._id ? res.data : note)));
    };

    const deleteNote = async (id) => {
        await axios.delete(`http://localhost:5000/api/notes/${id}`);
        setNotes(notes.filter(note => note._id !== id));
    };

    return (
        <div className="App">
            <h1>Note Taking App</h1>
            <AddNote onAdd={addNote} />
            <NoteList notes={notes} onEdit={editNote} onDelete={deleteNote} />
        </div>
    );
};

export default App;
