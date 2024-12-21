import { NoteAction, NoteActionTypes } from "../types/noteTypes";

export interface NoteInitiationStateTypes {
  notes: {
    id: string;
    title: string;
    body: string;
  }[];
}

const initialState: NoteInitiationStateTypes = {
  notes: [],
};

export const noteReducer = (
  state: NoteInitiationStateTypes = initialState,
  actions: NoteAction
): NoteInitiationStateTypes => {
  switch (actions.type) {
    case NoteActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [
          {
            id: Math.random().toString(),
            title: actions.payload.title,
            body: actions.payload.body,
          },
          ...state.notes,
        ],
      };
    case NoteActionTypes.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === actions.payload.id) {
            return {
              ...note,
              title: actions.payload.title,
              body: actions.payload.body,
            };
          }
          return note;
        }),
      };
    case NoteActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => {
          console.log(note.id !== actions.payload.id);
          return note.id !== actions.payload.id;
        }),
      };
    default:
      return state;
  }
};
