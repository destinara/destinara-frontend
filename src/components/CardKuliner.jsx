import { MapPin } from "lucide-react";
import { Link } from "react-router";

export const CardKuliner = ({ url_gambar, slug, name, provinsi }) => {
  return (
    <Link
      to={`/kuliners/${slug}`}
      className="block overflow-hidden transition-shadow bg-white shadow-md rounded-2xl hover:shadow-lg"
    >
      {/* url_gambar */}
      <img
        src={url_gambar}
        alt={name}
        className="object-cover w-full h-48"
        loading="lazy"
      />

      {/* Body */}
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold">{name}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-1 text-red-500" />
          <span>{provinsi}</span>
        </div>
      </div>
    </Link>
  );
};
