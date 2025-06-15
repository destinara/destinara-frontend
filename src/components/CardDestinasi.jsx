import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { changeToSlug } from "../utils/ChangeToSlug";

export const CardDestinasi = ({ image, title, location, id }) => {
  return (
    <Link
      to={`/destinations/${changeToSlug(title)}`}
      className="block overflow-hidden transition-shadow bg-white shadow-md rounded-2xl hover:shadow-lg"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48"
        loading="lazy"
      />

      {/* Body */}
      <div className="p-4">
        <h3 className="mb-1 text-lg font-semibold">{title}</h3>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={16} className="mr-1 text-red-500" />
          <span>{location}</span>
        </div>
      </div>
    </Link>
  );
};
