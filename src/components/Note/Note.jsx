import { debounce } from "@mui/material";
import React from "react";
import deleteIcon from "../../images/delete.png";
import pinIcon from "../../images/pin.png";
import "./Note.css";

const Note = (props) => {
  let timer = 500,
    timeout;
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = monthNames[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };
  const debounce = (func) => {
    clearTimeout(timer);
    timeout = setTimeout(func, timer);
  };
  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };
  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        cols="30"
        rows="10"
        onChange={(event) => updateText(event.target.value, props.note.id)}
        defaultValue={props.note.text}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <div className="note_footer_images">
          <img
            src={deleteIcon}
            alt="Delete icon"
            onClick={() => props.deleteNote(props.note.id)}
          />
          <img
            src={pinIcon}
            alt="pin icon"
            id={props.note.id}
            onClick={() => {
              props.pinNote(props.note.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
