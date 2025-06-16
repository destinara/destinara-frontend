import axios from "axios";

const ROOT_API = import.meta.env.ROOT_API || "https://api.arialog.my.id";

export const getDataKuliner = async ({ provinsi, jumlah_data }) => {
  if (!localStorage.getItem("token")) {
    alert("Silahkan login atau register terlebih dahulu.");
    window.location.href = "/login";
  }

  if (!localStorage.getItem("survey_result")) {
    alert("Silahkan isi survey terlebih dahulu.");
    window.location.href = "/survey";
  }

  console.log(provinsi);
  console.log(jumlah_data);

  try {
    const res = await axios.get(
      `${ROOT_API}/kuliners?provinsi=${provinsi}&jumlah_data=${jumlah_data}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDetailKuliner = async (slug) => {
  try {
    const res = await axios.get(`${ROOT_API}/kuliners/${slug}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
