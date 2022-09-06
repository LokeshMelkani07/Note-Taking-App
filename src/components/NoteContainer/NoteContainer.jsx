import React, { useState } from "react";
import "./NoteContainer.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Note from "../Note/Note";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const emptyNotes = () => {};
  const notes = reverseArray(props.notes);
  const [page, Setpage] = useState(1);
  return (
    <div className="note-container">
      <h2 className="note-container_heading">Write Your Notes Below..</h2>
      <div className="note-container_notes">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              pinNote={props.pinNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3 className="note-container_headings">
            ❌❌❌ No Notes Present ❌❌❌
          </h3>
        )}
      </div>
      <Stack
        spacing={2}
        py={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Pagination
          count={10}
          color="primary"
          showFirstButton={true}
          showLastButton={true}
          defaultValue={page}
          onChange={(event, value) => {
            Setpage(value);
          }}
        />
      </Stack>
    </div>
  );
};

export default NoteContainer;
