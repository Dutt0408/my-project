import React, { useEffect, useState } from "react";


const sponsorsData = [
  { id: 1, image: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7" },
  { id: 2, image: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7" },
  { id: 3, image: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7" },
  { id: 4, image: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7" },
  { id: 5, image: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7" },
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
          src="https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FTitleImage?alt=media&token=107e3160-04b3-4056-b69c-199c1fe31408"
          alt="Title" className="w-full h-auto object-cover" />
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
            <div className="bg-white shadow-lg rounded-lg p-6 h-48 flex justify-center items-center">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7"
                alt={`Sponsor ${sponsor.id}`} className="w-full h-auto object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
