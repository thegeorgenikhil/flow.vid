import axios from "axios";

export const signinService = async (userFormData) => {
  return await axios.post("api/auth/login", { ...userFormData });
};
