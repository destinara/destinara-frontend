import { useState } from "react";
import { AuthLayouts } from "../layouts/auth.layouts";
import { LogoDestinara } from "../assets";
import { Input } from "../components";
import { Link } from "react-router";
import { LoginApi } from "../api/auth.api";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {
      alert("Email dan Password harus diisi");
      return;
    }

    try {
      const response = await LoginApi(formData.email, formData.password);

      if (response.status === "success") {
        const { token, data } = response;

        // Simpan ke localStorage (bertahan meskipun di-refresh atau pindah page)
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data)); // simpan seluruh info user

        // Redirect atau navigasi setelah login
        window.location.href = "/"; // ubah sesuai halaman kamu
      } else {
        alert("Login gagal: " + response.message);
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayouts style=" h-screen ">
      <div className="flex flex-col justify-center w-[350px] p-4 bg-white border border-gray-200 shadow-xl rounded-2xl">
        <img
          className="w-32 mx-auto"
          src={LogoDestinara}
          alt="Logo Destinara"
        />
        <div className="flex flex-col gap-4">
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
          Login
        </button>
        <p className="text-center">
          Belum Punya Akun?
          <Link to="/register" className="text-[#2F92B7]">
            {" "}
            klik disini
          </Link>
        </p>
      </div>
    </AuthLayouts>
  );
};
