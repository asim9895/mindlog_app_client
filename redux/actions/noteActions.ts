import { NoteActionTypes } from "../types/noteTypes";

export const add_note = ({
  title,
  body,
}: {
  title: string;
  body: string | undefined;
}) => {
  return (dispatch: any) => {
    dispatch({
      type: NoteActionTypes.ADD_NOTE,
      payload: {
        title,
        body: body === undefined || body === null ? "" : body,
      },
    });
  };
};

export const delete_note = (id: string) => {
  return (dispatch: any) => {
    dispatch({
      type: NoteActionTypes.DELETE_NOTE,
      payload: { id },
    });
  };
};

export const edit_note = ({
  id,
  title,
  body,
}: {
  id: string;
  title: string;
  body: string;
}) => {
  return (dispatch: any) => {
    dispatch({
      type: NoteActionTypes.EDIT_NOTE,
      payload: {
        id,
        title,
        body,
      },
    });
  };
};
