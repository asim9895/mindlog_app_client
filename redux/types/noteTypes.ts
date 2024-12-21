export enum NoteActionTypes {
  ADD_NOTE = "ADD_NOTE",
  EDIT_NOTE = "EDIT_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
}

// interface saveUserActionType {
//   type: ActionTypes.SAVE_USER;
//   payload: {
//     user_info: any;
//     token: string;
//     authenticated: boolean;
//     profile_pic: string | null;
//   };
// }

// interface changeProfilePicActionType {
//   type: ActionTypes.CHANGE_PROFILE_PIC;
//   payload: { profile_pic: string | null };
// }

// interface logoutUserActionType {
//   type: ActionTypes.LOGOUT_USER;
//   payload: { authenticated: boolean };
// }

interface AddNoteActionType {
  type: NoteActionTypes.ADD_NOTE;
  payload: { title: string; body: string };
}
interface EditNoteActionType {
  type: NoteActionTypes.EDIT_NOTE;
  payload: { id: string; title: string; body: string };
}
interface DeleteNoteActionType {
  type: NoteActionTypes.DELETE_NOTE;
  payload: { id: string };
}

export type NoteAction =
  | AddNoteActionType
  | EditNoteActionType
  | DeleteNoteActionType;
