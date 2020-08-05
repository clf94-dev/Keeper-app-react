import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([{}]);
  function addNote(note) {
    console.log(note);
    var newNote = note;

    console.log(newNote);
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  function deleteNote(id) {
    console.log("delete pressed");
    setNotes(prevNotes => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            delete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
