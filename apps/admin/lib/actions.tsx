"use server";

import { Login } from "../contracts/login";

export const LoginHandler = (formData: Login) => {
  console.log(formData);
  return Promise.resolve();
};
