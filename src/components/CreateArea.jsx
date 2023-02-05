import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [textArea , setTextArea] = useState({
    rows : 1,
    zoomIn : false,
    visibility : "hidden"
  })

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick() {
    setTextArea({
      rows : 3,
      zoomIn : true,
      visibility : "none"
    })
  }

  return (
    <div>
      <form className="create-note">
        <input
          type={textArea.visibility}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          onClick={handleClick}
          value={note.content}
          placeholder="Take a note..."
          rows={textArea.rows}
        />
        <Zoom in={textArea.zoomIn}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
