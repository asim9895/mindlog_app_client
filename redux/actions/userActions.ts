// import axios from "axios";
// import { user_routes } from "../api_path";
import { UserActionTypes } from "../types/userTypes";

// export const save_user =
//   ({
//     user_info,
//     token,
//     authenticated,
//   }: {
//     user_info: any;
//     token: string;
//     authenticated: boolean;
//   }) =>
//   (dispatch: any) => {
//     try {
//       dispatch({
//         type: ActionTypes.SAVE_USER,
//         payload: { user_info, token, authenticated },
//       });
//     } catch (error: any) {
//       console.log(error);
//     }
//   };

// export const logout_user = () => (dispatch: any) => {
//   try {
//     dispatch({
//       type: ActionTypes.LOGOUT_USER,
//     });
//   } catch (error: any) {
//     console.log(error);
//   }
// };

export const first_time_entry_change = () => (dispatch: any) => {
  try {
    dispatch({
      type: UserActionTypes.FIRST_TIME_ENTRY_CHANGE,
    });
  } catch (error: any) {
    console.log(error);
  }
};

// export const sign_up_user = async ({
//   username,
//   email,
//   password,
// }: {
//   username: string;
//   email: string;
//   password: string;
// }) => {
//   try {
//     const request = await axios.post(
//       user_routes.sign_up,
//       { username, email, password },
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Accept: "application/json",
//         },
//       }
//     );

//     return request;
//   } catch (error: any) {
//     return error?.response;
//   }
// };

// export const sign_in_user = async ({
//   username_email,
//   password,
// }: {
//   username_email: string;
//   password: string;
// }) => {
//   try {
//     const request = await axios.post(
//       user_routes.sign_in,
//       { username_email, password },
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Accept: "application/json",
//         },
//       }
//     );

//     return request;
//   } catch (error: any) {
//     // console.log(JSON.stringify(error?.response));
//     return error?.response;
//   }
// };

// export const send_forgot_password_code = async ({
//   email,
// }: {
//   email: string;
// }) => {
//   try {
//     const request = await axios.put(
//       `${user_routes.generate_forgot_password_code}`,
//       { email },
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Accept: "application/json",
//         },
//       }
//     );

//     return request;
//   } catch (error: any) {
//     console.log(JSON.stringify(error?.response));
//     return error?.response;
//   }
// };

// export const verify_forgot_password_code = async ({
//   email,
//   forgot_password_code,
// }: {
//   email: string;
//   forgot_password_code: string;
// }) => {
//   try {
//     const request = await axios.put(
//       `${user_routes.verify_forgot_password_code}`,
//       {
//         email,
//         forgot_password_code,
//       },
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Accept: "application/json",
//         },
//       }
//     );

//     return request;
//   } catch (error: any) {
//     return error?.response;
//   }
// };

// export const reset_password = async ({
//   email,
//   password,
//   confirm_password,
// }: {
//   email: any;
//   password: string;
//   confirm_password: string;
// }) => {
//   try {
//     const request = await axios.put(
//       `${user_routes.reset_password}`,
//       {
//         email,
//         password,
//         confirm_password,
//       },
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Accept: "application/json",
//         },
//       }
//     );

//     return request;
//   } catch (error: any) {
//     return error?.response;
//   }
// };
