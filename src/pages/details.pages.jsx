import { useParams } from "react-router";
import { CardDestinasi, GoogleMapEmbed, Navbar } from "../components";
import { HeroStatic } from "../components/HeroStatic";
import { destinations, kuliners } from "../api/data";
import { changeToSlug } from "../utils/ChangeToSlug";

export const DestinationDetail = () => {
  const { slug } = useParams(); // ambil 'nama-destinasi-1' dari URL

  const destination = destinations.find(
    (item) => changeToSlug(item.title) === slug
  );

  if (!destination) return <div>Destinasi tidak ditemukan</div>;

  const kuliner = kuliners.filter(
    (item) => item.location === destination.location
  );

  return (
    <div>
      <Navbar />

      <HeroStatic destination={destination} />

      <section className="px-4 py-2 space-y-4 lg:mx-20">
        {/* <h1 className="text-2xl font-bold">Detail Destinasi: {slug}</h1> */}
        <p className="text-base/relaxed">{destination.deskripsi}</p>

        <div>
          <GoogleMapEmbed
            latitude={-8.449307}
            longitude={119.8230278}
            zoom={15}
          />
        </div>

        <h2 className="text-2xl font-medium md:text-4xl">
          Rekomendasi Kuliner Untuk Kamu
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {kuliner.map((dest) => (
            <CardDestinasi key={dest.id} {...dest} />
          ))}
        </div>
      </section>

      {/* Kamu bisa fetch data berdasarkan slug ini */}
      {/* Misal fetch ke `/api/destinations/${slug}` */}
    </div>
  );
};
