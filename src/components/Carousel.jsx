import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useNavigate } from "react-router";
import { useRef, useEffect } from "react";
import { changeToSlug } from "../utils/ChangeToSlug";
import { MapPin } from "lucide-react";

export const Carousel = ({ destinations = [], interval = 3000 }) => {
  const navigate = useNavigate();

  const timeoutRef = useRef();
  const mouseOverRef = useRef(false);

  const clearNextTimeout = () => clearTimeout(timeoutRef.current);

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
      mode: "snap",
    },
    [
      (slider) => {
        function nextTimeout() {
          clearTimeout(timeoutRef.current);
          if (mouseOverRef.current) return;
          timeoutRef.current = setTimeout(() => {
            slider.next();
          }, interval);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOverRef.current = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOverRef.current = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div ref={sliderRef} className="w-full overflow-hidden keen-slider">
      {destinations.map((item, index) => (
        <div
          key={index}
          className="keen-slider__slide relative h-[500px] md:h-[500px] cursor-pointer"
          onClick={() => navigate(`/destinations/${changeToSlug(item.title)}`)}
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            {/* Gradient overlay from top (white) to transparent */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white,transparent_50%,transparent_50%,white)]" />
            {/* <div className="absolute inset-0 z-2 bg-gradient-to-b from-white to-transparent" /> */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" /> */}
            {/* <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" /> */}
          </div>
          <div className="relative z-10  flex flex-col justify-end h-full pb-4 mx-4 md:mx-10 lg:mx-20 text-[#2F92B7]">
            <p className="flex items-center text-sm text-black md:text-lg">
              <MapPin size={16} className="mr-1 text-red-500" />
              {item.location}
            </p>
            <h2 className="text-2xl font-bold md:text-4xl">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
