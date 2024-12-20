export const API_URL = "http://192.168.1.7:7500/notely/api";

export const user_routes = {
  sign_up: `${API_URL}/user/register-user`,
  sign_in: `${API_URL}/user/login-user`,
  generate_forgot_password_code: `${API_URL}/user/generate-forgot-password-code`,
  verify_forgot_password_code: `${API_URL}/user/verify-forgot-password-code`,
  reset_password: `${API_URL}/user/reset-password`,
};
