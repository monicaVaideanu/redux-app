import React from "react";
import Note from "../note/Note";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../redux/actions/actions";
import { updateNote} from "../../redux/actions/actions";

const NotesList = (props) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  

  const handleDeleteNote = (id) => () => {
    console.log('Deleting note with ID from noteList:', id);
    dispatch(deleteNote(id));
  };

  const handleUpdate =(id,title,description) => () => {
    console.log('updating note with ID from noteList:', id);
    dispatch(updateNote(id,title,description));
  }

  return (
    <div
      style={{
        padding: "8px",
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
    <div>
      {notes && notes.map((note) => (
        <Note
          key={note.id} 
          id={note.id} 
          title={note.title}
          description={note.description}
          onDelete={handleDeleteNote(note.id)} 
          onUpdate={handleUpdate(note.id, note.title, note.description)}
        />
      ))}
    </div>
    </div>
  );
};

export default NotesList;
