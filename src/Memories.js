import React from "react";

const Memories = () => {
  return (
    <div
      style={{
        fontFamily: "'Hepta Slab', sans-serif",
        fontWeight: "500",
        background: "#efecdb",
        color: "#5D4037",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: "rotate(-90deg) translate3d(0, -100vh, 0)",
          transformOrigin: "right top",
          overflowY: "auto",
          height: "100vw",
          width: "100vh",
          perspective: "1px",
          transformStyle: "preserve-3d",
        }}
      >
        {[
          {
            src: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FHomeMobileView?alt=media&token=fbf1e8c0-c29d-4c7c-b0a9-65d05b385c53",
            link: "https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/",
          },
          {
            src: "https://firebasestorage.googleapis.com/v0/b/subscription-82909.appspot.com/o/images%2FBAPSch?alt=media&token=303c296c-996f-49ca-b1c1-a4ebe0c5f2c7",
            link: "https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/",
          },
          {
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74321/windowshopclock.jpg",
            link: "https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/",
          },
          // Add more images as needed
        ].map((image, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "40vh",
              transformOrigin: "50% 50%",
              transform: "rotate(90deg)",
              transition: "1s",
              padding: "10px",
            }}
          >
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "#efecdb",
                boxShadow: "0 10px 50px rgba(95, 47, 17, 0.5)",
                padding: "10px",
              }}
            >
              <img
                src={image.src}
                alt=""
                style={{
                  maxWidth: "45vh",
                  maxHeight: "50vh",
                  transition: "0.5s",
                  filter: "saturate(40%) sepia(30%) hue-rotate(5deg)",
                }}
              />
            </a>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
        }}
      >
        <h1 style={{ fontWeight: "300", fontSize: "1rem" }}>
          Memories of Pramukh Cup 2025
        </h1>
      </div>
    </div>
  );
};

export default Memories;
