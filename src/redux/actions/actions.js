export const ADD_NOTE = "ADD_NOTE";

export const addNote = (title, description) => {
    return {
        type: ADD_NOTE,
        payload: {
            id: Date.now(), 
            title: title, 
            description: description
        }
    };
};

export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = (id) => {
    console.log('Deleting note with ID from actions:', id);
    return {
        type: DELETE_NOTE,
        payload: id
    }
};


export const UPDATE_NOTE = 'UPDATE_NOTE';

export const updateNote = (id,title, description) => {
    console.log('updating note with ID from actions:', id);
    return {
        type: UPDATE_NOTE,
        payload: {
            id : id,
            title: title, 
            description: description
        }
    }
}
;