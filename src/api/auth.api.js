import axios from "axios";

export const login = (email, password) => {
  try {
    axios.post("/api/auth/login", { email, password });
  } catch (error) {
    console.log(error);
  }
};
