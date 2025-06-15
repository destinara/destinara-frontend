import axios from "axios";

const ROOT_API =
  import.meta.env.ROOT_API || "https://destinara-api.leapcell.app";

export const SurveyApi = async ({ aktifitas, max_recom, treshold }) => {
  if (!aktifitas) {
    throw new Error("Data tidak boleh kosong saat SurveyApi dipanggil.");
  }

  if (!localStorage.getItem("token")) {
    throw new Error("Silahkan login / register terlebih dahulu.");
  }

  try {
    const res = await axios.post(
      `${ROOT_API}/survey?max_recom=${max_recom}&treshold=${treshold}`,
      {
        aktifitas,
        token: localStorage.getItem("token"),
      }
    );

    console.log(res.data);

    localStorage.setItem("rekomendasi", res.data);

    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
