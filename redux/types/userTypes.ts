export enum ActionTypes {
  SAVE_USER = "SAVE_USER",
  LOGOUT_USER = "LOGOUT_USER",
  CHANGE_PROFILE_PIC = "CHANGE_PROFILE_PIC",
  FIRST_TIME_ENTRY_CHANGE = "FIRST_TIME_ENTRY_CHANGE",
}

interface saveUserActionType {
  type: ActionTypes.SAVE_USER;
  payload: {
    user_info: any;
    token: string;
    authenticated: boolean;
    profile_pic: string | null;
  };
}

interface changeProfilePicActionType {
  type: ActionTypes.CHANGE_PROFILE_PIC;
  payload: { profile_pic: string | null };
}

interface logoutUserActionType {
  type: ActionTypes.LOGOUT_USER;
  payload: { authenticated: boolean };
}

interface firstTimeEntryChangeActionType {
  type: ActionTypes.FIRST_TIME_ENTRY_CHANGE;
  payload: { first_time_entry: boolean };
}

export type Action =
  | saveUserActionType
  | logoutUserActionType
  | changeProfilePicActionType
  | firstTimeEntryChangeActionType;
