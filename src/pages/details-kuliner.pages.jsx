import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { HeroStatic, Navbar } from "../components";
import { getDetailKuliner } from "../api/kuliner.api";

export const KulinersDetail = () => {
  const { slug } = useParams();
  const [kuliners, setKuliners] = useState(null);

  useEffect(() => {
    const fetchKuliner = async () => {
      const response = await getDetailKuliner(slug);
      if (response?.data) {
        setKuliners(response.data);
      }
    };
    fetchKuliner();
  }, [slug]);

  console.log(slug);

  if (!kuliners) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <HeroStatic data={kuliners} />
      <section className="px-4 py-2 space-y-4 lg:mx-20">
        <p className="text-base/relaxed">{kuliners.deskripsi}</p>
      </section>
    </div>
  );
};
