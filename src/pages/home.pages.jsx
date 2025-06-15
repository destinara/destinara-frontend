import { Navbar, Carousel, CardDestinasi } from "../components";
import { destinations } from "../api/data";

export const Home = () => {
  return (
    <div>
      <Navbar />

      <Carousel destinations={destinations} />

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
