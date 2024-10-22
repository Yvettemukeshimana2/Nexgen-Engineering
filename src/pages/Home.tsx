 // src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import im1 from "../assets/Pictures/Design&Installation of manufacturing facilities 1.jpg";
import im2 from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg";
import im3 from "../assets/Pictures/Design&installation of power plant.jpg";
import OurServices from "./service";
import AboutUs from "./Aboutus";
import OurProcess from "./Ourprocess";
import Specialties from "./Speciality";
const images = [
  {
    src: im1,
    description:
      "The engineering sector is highly competitive, with numerous firms vying for the same contracts, which can drive down prices and profit margins",
  },
  {
    src: im2,
    description:
      " We work closely with our clients to understand their unique needs and deliver solutions that exceed expectations.",
  },
  {
    src: im3,
    description:
      "The engineering sector is highly competitive, with numerous firms vying for the same contracts, which can drive down prices and profit margins.",
  },
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col">
      {/* Image Slider Section */}
      <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images[currentIndex].src}
            alt="Slide"
            className="object-cover w-full h-full duration-500 ease-in-out"
          />

         
          <div
            className="absolute inset-0 bg-black"
            style={{
              opacity: 0.7, // Adjust opacity as needed
            }}
          ></div>
        </div>
        <div className="pl-10 pt-32 z-10">
          <h1 className="text-2xl text-white font-black p-32">
            {images[currentIndex].description}
          </h1>
        </div>
      </div>
          <AboutUs />
     
      <OurServices />
     
      <Specialties/>
      <OurProcess />
    </div>
  );
};

export default Home;
