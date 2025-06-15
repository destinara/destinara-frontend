import { useState } from "react";
import { AuthLayouts } from "../layouts/auth.layouts";
import { LogoDestinara } from "../assets";
import { Input, Combobox } from "../components";
import { Link } from "react-router";
import { RegisterApi } from "../api/auth.api";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      !formData.name ||
      !formData.email ||
      !formData.gender ||
      !formData.password
    ) {
      alert("Name, Email, Gender dan Passowrd harus diisi");
      return;
    }

    try {
      const response = await RegisterApi(formData);

      if (response.status === "success") {
        alert("Register Berhasil");

        console.log(response);

        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.data));

        window.location.href = "/survey";
      } else {
        alert("Register Gagal");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayouts style="h-screen">
      <div className="flex flex-col justify-center w-[350px] p-4 bg-white border border-gray-200 shadow-xl rounded-2xl">
        <img
          className="w-32 mx-auto"
          src={LogoDestinara}
          alt="Logo Destinara"
        />
        <div className="flex flex-col gap-4">
          <Input
            name="name"
            type="text"
            placeholder="Masukan Nama Anda"
            required
            value={formData.name}
            onChange={handleChange}
          >
            Name
          </Input>

          <Input
            name="email"
            type="email"
            placeholder="Masukan Email Anda"
            required
            value={formData.email}
            onChange={handleChange}
          >
            Email
          </Input>

          <Combobox
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            options={[
              { value: "male", label: "Laki - Laki" },
              { value: "female", label: "Perempuan" },
            ]}
          />

          <Input
            name="password"
            type="password"
            placeholder="Masukan Password Anda"
            required
            value={formData.password}
            onChange={handleChange}
          >
            Password
          </Input>
        </div>
        <button
          onClick={handleSubmit}
          className="p-2 my-4 border rounded-md bg-[#2F92B7] text-white"
        >
          Register
        </button>
        <p className="text-center">
          Sudah Punya Akun?
          <Link to="/Login" className="text-[#2F92B7]">
            {" "}
            klik disini
          </Link>
        </p>
      </div>
    </AuthLayouts>
  );
};
