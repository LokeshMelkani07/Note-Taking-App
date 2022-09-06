import React, { useEffect, useState } from "react";
import Favicon from "react-favicon";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };
  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };
  const pinNote = (id) => {
    // console.log("Button Clicked");
    const temp = [...notes];
    const index = temp.findIndex((item) => item.id === id);
    document.getElementById(id).style.border = "2px solid black";
    document.getElementById(id).style.padding = "2px";
    if (index < 0) return;
    let element = temp[index];
    // console.log(index);
    temp.splice(index, 1);
    temp.push(element);
    // console.log(temp);
    setNotes(temp);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      <Favicon url="https://upload.wikimedia.org/wikipedia/commons/e/ed/Apple_Notes_%28iOS%29.png" />
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        pinNote={pinNote}
        updateText={updateText}
      />
    </div>
  );
};

export default App;
