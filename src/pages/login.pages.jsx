import { useState } from "react";
import { AuthLayouts } from "../layouts/auth.layouts";
import { FaviconDestinara, LogoDestinara } from "../assets";
import { Input } from "../components";

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

  return (
    <AuthLayouts>
      <div className="flex flex-col justify-center w-[350px] p-4 bg-white border border-gray-200 shadow-xl rounded-2xl">
        <img
          className="w-32 mx-auto"
          src={LogoDestinara}
          alt="Logo Destinara"
        />
        <div className="flex flex-col gap-4">
          <Input
            name="email"
            type="text"
            placeholder="Masukan Email Anda"
            value={formData.email}
            onChange={handleChange}
          >
            Email
          </Input>
          <Input
            name="password"
            type="password"
            placeholder="Masukan Password Anda"
            value={formData.password}
            onChange={handleChange}
          >
            Password
          </Input>
        </div>
        <button
          onClick={() => console.log(formData)}
          className="p-2 my-4 border rounded-md bg-[#2F92B7] text-white"
        >
          Login
        </button>
      </div>
    </AuthLayouts>
  );
};
