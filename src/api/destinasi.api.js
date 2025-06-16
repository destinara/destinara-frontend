import axios from "axios";

const ROOT_API = import.meta.env.ROOT_API || "https://api.arialog.my.id";

export const getDataDestinasi = async () => {
  if (!localStorage.getItem("token") && !localStorage.getItem("user")) {
    alert("Silahkan login atau register terlebih dahulu.");
    window.location.href = "/login";
  }

  const { id } = JSON.parse(localStorage.getItem("user"));

  const res_rekomendasi = await axios.get(`${ROOT_API}/rekomendasi?id=${id}`);
  const { data } = res_rekomendasi.data;

  if (!data) {
    alert("Silahkan isi survey terlebih dahulu.");
    window.location.href = "/survey";
  }

  const result = data.join(",");
  console.log(result);
  try {
    const res = await axios.get(`${ROOT_API}/destinations?tipe=${result}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDetailDestinasi = async (slug) => {
  try {
    const res = await axios.get(`${ROOT_API}/destinations/${slug}`);

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
