import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { CardDestinasi, GoogleMapEmbed, Navbar } from "../components";
import { HeroStatic } from "../components/HeroStatic";
import { kuliners } from "../api/data";
import { getDataDestinasi, getDetailDestinasi } from "../api/destinasi.api";
import { getDataKuliner } from "../api/kuliner.api";
import { CardKuliner } from "../components/CardKuliner";

export const DestinationDetail = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [kuliners, setKuliners] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      const response = await getDetailDestinasi(slug);
      if (response?.data) {
        setDestination(response.data);
      }
    };
    fetchDestination();
  }, [slug]);

  useEffect(() => {
    const fetchKuliner = async () => {
      if (!destination) return;
      const response = await getDataKuliner({
        provinsi: destination.provinsi,
        jumlah_data: 10,
      });
      if (response?.data) {
        setKuliners(response.data);
      }
    };
    fetchKuliner();
  }, [destination]);

  if (!destination) return <div>Loading.. </div>;

  console.log(destination);

  const provinsi_destinasi = destination.provinsi;

  console.log("provinsi_destinasi: ", provinsi_destinasi);

  console.log(kuliners);
  return (
    <div>
      <Navbar />
      <HeroStatic data={destination} />
      <section className="px-4 py-2 space-y-4 lg:mx-20">
        <p className="text-base/relaxed">{destination.deskripsi}</p>
        <div>
          <GoogleMapEmbed
            latitude={Number(destination.latitude)}
            longitude={Number(destination.longitude)}
            zoom={15}
          />
        </div>
        <h2 className="text-2xl font-medium md:text-4xl">
          Rekomendasi Kuliner Untuk Kamu
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.isArray(kuliners) &&
            kuliners
              .filter((dest) => dest.provinsi === provinsi_destinasi)
              .map((dest) => <CardKuliner key={dest.id} {...dest} />)}
        </div>
      </section>
    </div>
  );
};
