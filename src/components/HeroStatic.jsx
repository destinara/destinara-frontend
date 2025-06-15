import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react"; // icon back (bisa pakai icon bebas)
import { changeToSlug } from "../utils/ChangeToSlug";

export const HeroStatic = ({ destination }) => {
  const navigate = useNavigate();

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
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white,transparent_50%,transparent_50%,white)]" />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full px-4 lg:mx-20 ">
        <p className="text-sm text-black md:text-lg">{destination.location}</p>
        <h2 className="text-2xl font-medium md:text-4xl">
          {destination.title}
        </h2>
      </div>
    </div>
  );
};

// export const HeroStatic = ({ destinations }) => {
//   const navigate = useNavigate();
//   const item = destinations[0]; // tampilkan satu destinasi aja

//   return (
//     <div className="relative w-full h-[500px]">
//       {/* BACK BUTTON */}
//       <button
//         onClick={() => navigate(-1)}
//         className="absolute z-20 p-2 text-black rounded-full shadow top-4 left-4 bg-white/80 hover:bg-white"
//       >
//         <ArrowLeft size={20} />
//       </button>

//       {/* BACKGROUND IMAGE */}
//       <div
//         className="absolute inset-0 bg-center bg-cover"
//         style={{ backgroundImage: `url(${item.image})` }}
//         onClick={() => navigate(`/destinations/${changeToSlug(item.title)}`)}
//       >
//         {/* Overlay gradasi */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white,transparent_50%,transparent_50%,white)]" />
//       </div>

//       {/* TEXT */}
//       <div
//         className="relative z-10 flex flex-col justify-end h-full p-6 text-[#2F92B7] cursor-pointer"
//         onClick={() => navigate(`/destinations/${changeToSlug(item.title)}`)}
//       >
//         <h2 className="text-2xl font-bold md:text-4xl">{item.title}</h2>
//         <p className="text-sm text-black md:text-lg">{item.location}</p>
//       </div>
//     </div>
//   );
// };
