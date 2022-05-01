import axios from "axios";

export const signupService = async (userFormData) => {
  return await axios.post("/api/auth/signup", { ...userFormData });
};
