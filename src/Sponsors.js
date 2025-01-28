import React, { useEffect, useState } from "react";

const sponsorsData = [
  { id: 1, image: "https://34.54.58.73/images/BAPSch" },
  { id: 2, image: "https://34.54.58.73/images/Sponsor4" },
  { id: 3, image: "https://34.54.58.73/images/Sponsor2" },
  { id: 4, image: "https://34.54.58.73/images/Sponsor3" },
  { id: 5, image: "https://34.54.58.73/images/Sponsor5" },
];

export default function Sponsors() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, entry.target.dataset.id])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".sponsor-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Title Section */}
      <div className="relative flex justify-center items-center m-0 p-0">
        <img
          src="https://34.54.58.73/images/TitleImage"
          alt="Title"
          className="w-full h-auto object-cover"
        />
        <div className="absolute flex justify-center items-center top-0 left-0 right-0 bottom-0">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#023867] underline"
            style={{ textDecorationColor: "#e53e50" }}
          >
            SPONSORS
          </h2>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="mt-8 space-y-4 px-4">
        {sponsorsData.map((sponsor) => (
          <div
            key={sponsor.id}
            data-id={sponsor.id}
            className={`sponsor-card opacity-0 transform scale-90 translate-y-4 transition-opacity transition-transform duration-[1500ms] ease-in-out ${
              visibleCards.includes(String(sponsor.id)) ? "opacity-100 scale-100 translate-y-0" : ""
            }`}
          >
            <div className="bg-white shadow-lg rounded-lg p-6 h-48 flex justify-center items-center overflow-hidden">
              <img
                src={sponsor.image}
                alt={`Sponsor ${sponsor.id}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

