import { USERS_DATA } from "../bbdd.js";

const auth_by_email_password = (email, password) => {
  const user_data = USERS_DATA.find((user) => user.email === email);

  if (!user_data) throw new Error();
  if (user_data.password !== password) throw new Error();

  return user_data;
};

export default auth_by_email_password;
