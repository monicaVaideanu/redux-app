import { ADD_NOTE } from "../actions/actions";
import { DELETE_NOTE} from "../actions/actions";
import { UPDATE_NOTE } from "../actions/actions";


const initialState = {
  notes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
           ...state.notes,
          {
            title: action.payload.title,
            description: action.payload.description,
            id: action.payload.id
          },
        ],
      };
      case DELETE_NOTE:
        console.log('Deleting note with ID from reducere :', action.payload.id);
        return {
          ...state.notes,
          notes: state.notes.filter(note => note.id !== action.payload)
        };
        case UPDATE_NOTE:
          console.log('updating note with ID from reducere :', action.payload.id);
          return {
              ...state.notes,
              notes: state.notes.map(note =>
                note.id === action.payload.id ? { ...note, description: action.payload.description, title: action.payload.title } : note
              ),
          }

    default:
      return state;
  }
};

export default rootReducer;
