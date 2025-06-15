import { useState } from "react";
import { AuthLayouts } from "../layouts/auth.layouts";
import axios from "axios";
import { LogoDestinara } from "../assets";
import { SurveyApi } from "../api/survey.api";

export const Survey = () => {
  const [formData, setFormData] = useState({
    aktifitas: [],
    jarak: "",
    age: "",
    frekuensi: "",
  });

  const handleCheckboxChange = (value) => {
    setFormData((prev) => {
      const newAktifitas = prev.aktifitas.includes(value)
        ? prev.aktifitas.filter((item) => item !== value)
        : [...prev.aktifitas, value];
      return { ...prev, aktifitas: newAktifitas };
    });
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      aktifitas: formData.aktifitas.map((a) => a.toLowerCase()).join(", "),
      jarak: formData.jarak.toLowerCase(),
      age: formData.age.toLowerCase(),
      frekuensi: formData.frekuensi.toLowerCase(),
    };

    const { aktifitas } = payload;

    // Validasi field required
    if (!payload.aktifitas || payload.aktifitas.trim() === "") {
      alert("Pilih minimal satu aktivitas");
      return;
    }

    if (!payload.jarak || payload.jarak.trim() === "") {
      alert("Jarak tidak boleh kosong");
      return;
    }

    if (!payload.age || payload.age.trim() === "") {
      alert("Pilih range umur kamu ya");
      return;
    }

    if (!payload.frekuensi || payload.frekuensi.trim() === "") {
      alert("Pilih frekuensi kamu ya");
      return;
    }

    // // Simpan ke localStorage
    // localStorage.setItem("survey_result", JSON.stringify(payload));
    // alert("Survey berhasil disimpan ke localStorage");
    // window.location.href = "/";

    // e.preventDefault();

    // const payload = {
    //   aktifitas: formData.aktifitas.map((a) => a.toLowerCase()).join(", "),
    //   jarak: formData.jarak.toLowerCase(),
    //   age: formData.age.toLowerCase(),
    //   frekuensi: formData.frekuensi.toLowerCase(),
    // };

    const max_recom = 5;
    const treshold = 0.5;

    console.log(payload.age);
    console.log(max_recom);
    console.log(treshold);

    try {
      const response = await SurveyApi({ aktifitas, max_recom, treshold });

      if (response.status === "success") {
        alert("Survey berhasil disimpan ke localStorage");
        window.location.href = "/";
      } else {
        alert("Survey gagal disimpan ke localStorage");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal mengirim data.");
    }
  };

  return (
    <AuthLayouts>
      <img
        className="w-40 p-4 mx-auto"
        src={LogoDestinara}
        alt="Logo Destinara"
      />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full gap-6 p-4 mx-auto"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Pertanyaan 1 - Aktifitas */}
          <div className="p-4 bg-white shadow rounded-2xl">
            <p className="mb-2 font-semibold">
              Kalau liburan, kamu lebih suka aktivitas seperti apa?{" "}
              <span className="text-red-500">*</span>
            </p>
            {[
              "Petualangan",
              "Belanja",
              "Santai",
              "Interaksi dengan hewan",
              "Edukasi",
              "Aktifitas keluarga",
              "Sejarah dan budaya",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  value={item}
                  checked={formData.aktifitas.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Pertanyaan 2 - Jarak */}
          <div className="p-4 bg-white shadow rounded-2xl">
            <p className="mb-2 font-semibold">
              Kamu lebih suka liburan seperti apa?{" "}
              <span className="text-red-500">*</span>
            </p>
            {[
              {
                label: "Dekat - dekat aja (dalam kota atau provinsi)",
                value: "dekat",
              },
              {
                label: "Ke luar provinsi tapi masih satu pulau",
                value: "luar provinsi",
              },
              {
                label: "Jauh sekalian (antar pulau, lintas daerah)",
                value: "jauh",
              },
            ].map(({ label, value }) => (
              <label key={value} className="flex items-center gap-2 mt-1">
                <input
                  type="radio"
                  name="jarak"
                  value={value}
                  checked={formData.jarak === value}
                  onChange={(e) => handleRadioChange("jarak", e.target.value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          {/* Pertanyaan 3 - Usia */}
          <div className="p-4 bg-white shadow rounded-2xl">
            <p className="mb-2 font-semibold">
              Berapa usia kamu sekarang? <span className="text-red-500">*</span>
            </p>
            {["<18", "18 - 25", "26 - 34", "35 - 50", ">50"].map((value) => (
              <label key={value} className="flex items-center gap-2 mt-1">
                <input
                  type="radio"
                  name="age"
                  value={value}
                  checked={formData.age === value}
                  onChange={(e) => handleRadioChange("age", e.target.value)}
                />
                <span>{value}</span>
              </label>
            ))}
          </div>

          {/* Pertanyaan 4 - Frekuensi */}
          <div className="p-4 bg-white shadow rounded-2xl">
            <p className="mb-2 font-semibold">
              Seberapa sering kamu liburan dalam setahun?{" "}
              <span className="text-red-500">*</span>
            </p>
            {[
              { label: "Jarang (1-2 Kali)", value: "Jarang" },
              { label: "Kadang - kadang (3-5 Kali)", value: "Kadang" },
              { label: "Sering (lebih dari 5 kali)", value: "Sering" },
            ].map(({ label, value }) => (
              <label key={value} className="flex items-center gap-2 mt-1">
                <input
                  type="radio"
                  name="frekuensi"
                  value={value}
                  checked={formData.frekuensi === value}
                  onChange={(e) =>
                    handleRadioChange("frekuensi", e.target.value)
                  }
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Tombol Submit */}
        <button
          type="submit"
          className="bg-[#2F92B7] cursor-pointer w-fit text-white rounded-lg px-4 py-2 font-semibold shadow hover:bg-[#25799a]"
        >
          Submit Survey
        </button>
      </form>
    </AuthLayouts>
  );
};
