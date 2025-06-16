import axios from "axios";

const ROOT_API = import.meta.env.ROOT_API || "https://api.arialog.my.id";

export const LoginApi = async (email, password) => {
  if (!email || !password) {
    throw new Error("Email dan password harus diisi saat LoginApi dipanggil.");
  }

  try {
    const res = await axios.post(`${ROOT_API}/auth/login`, {
      email,
      password,
    });

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const RegisterApi = async (data) => {
  if (!data) {
    throw new Error("Data tidak boleh kosong saat RegisterApi dipanggil.");
  }

  const { email, password, name, gender } = data;
  try {
    const res = await axios.post(`${ROOT_API}/auth/register`, {
      name,
      email,
      gender,
      password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const Logout = async () => {
  try {
    const res = await axios.post(`${ROOT_API}/auth/logout`, {});
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
