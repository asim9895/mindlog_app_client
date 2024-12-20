import { Action, ActionTypes } from "../types/userTypes";

export interface UserInitiationStateTypes {
  user_info: any;
  token: string | null;
  authenticated: boolean;
  first_time_entry: boolean;
}

const initialState: UserInitiationStateTypes = {
  user_info: null,
  token: null,
  authenticated: false,
  first_time_entry: true,
};

export const userReducer = (
  state: UserInitiationStateTypes = initialState,
  actions: Action
): UserInitiationStateTypes => {
  switch (actions.type) {
    case ActionTypes.SAVE_USER:
      return {
        ...state,
        user_info: actions.payload.user_info,
        authenticated: actions.payload.authenticated,
        token: actions.payload.token,
      };
    case ActionTypes.LOGOUT_USER:
      return {
        ...state,
        user_info: null,
        authenticated: false,
        token: null,
      };
    case ActionTypes.FIRST_TIME_ENTRY_CHANGE:
      return {
        ...state,
        first_time_entry: false,
      };
    default:
      return state;
  }
};
