import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react"; // icon back (bisa pakai icon bebas)
// import { changeToSlug } from "../utils/ChangeToSlug";

export const HeroStatic = ({ data }) => {
  const navigate = useNavigate();

  console.log("data :", data);
  console.log("gambar :", data.url_gambar);
  return (
    <div className="relative w-full h-[500px]">
      <button
        onClick={() => navigate(-1)}
        className="absolute z-20 p-4 text-black rounded-full shadow lg:mx-20 top-4 left-4 bg-white/80 hover:bg-white"
      >
        <ArrowLeft size={20} />
      </button>

      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${data.url_gambar})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white,transparent_50%,transparent_50%,white)]" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full px-4 lg:mx-20 ">
        <p className="text-sm text-black md:text-lg">{data.provinsi}</p>
        <h2 className="text-2xl font-medium md:text-4xl">{data.name}</h2>
      </div>
    </div>
  );
};
