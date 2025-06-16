import { useEffect, useState } from "react";
import { getDataDestinasi } from "../api/destinasi.api";
import { Navbar, Carousel, CardDestinasi } from "../components";
// import { destinations } from "../api/data";

export const Home = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinasi = async () => {
      const response = await getDataDestinasi();
      if (response.status === "success") {
        // Gabungkan semua destinasi dari tiap tipe
        const allDestinasi = response.data.flatMap((item) => item.destinations);
        setDestinations(allDestinasi);
      } else {
        console.error("Gagal ambil data:", response.message);
      }
    };

    fetchDestinasi();
  }, []);

  if (destinations.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      {/* <Carousel destinations={destinations} /> */}

      <Carousel
        destinations={destinations.map((d) => ({
          slug: d.slug,
          title: d.name,
          image: d.url_gambar,
          location: d.provinsi,
          lat: d.latitude,
          long: d.longitude,
          id: d.id,
        }))}
      />

      <section className="m-4 md:mx-10 lg:mx-20">
        <h2 className="mb-4 text-2xl font-bold">Rekomendasi</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {destinations.map((dest) => (
            <CardDestinasi key={dest.id} {...dest} />
          ))}
        </div>
      </section>
    </div>
  );
};
