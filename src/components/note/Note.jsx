import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../../redux/actions/actions";

const Note = ({ id, title, description, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editDescription, setEditDescription] = useState(description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateNote(id, editTitle, editDescription));
    setIsEditing(false);
  };

  return (
    <div
      style={{
        width: "240px",
        height: "240px",
        background: "#f5b042",
        borderRadius: "10px",
        overflowY: "auto",
        margin: "4px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <button onClick={handleSave} style={{ marginTop: "8px", backgroundColor: "#32de84" }}>
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <span style={{ marginTop: "8px" }}>{description}</span>
          <button onClick={handleEdit} style={{ marginTop: "8px", backgroundColor: "#32de84" }}>
            Edit
          </button>
          <button onClick={() => onDelete(id)} style={{ marginTop: "8px", backgroundColor: "#ff4d4d" }}>
            Delete Note
          </button>
        </>
      )}
    </div>
  );
};

export default Note;
