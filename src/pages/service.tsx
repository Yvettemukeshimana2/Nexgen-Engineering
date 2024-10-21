import React from "react";
import im1 from "../assets/Pictures/Agricultural Heavy Machine (2).jpg";
import im2 from "../assets/Pictures/Agricultural Heavy Machine.jpg";
import im3 from "../assets/Pictures/Building-Information-Modeling.jpg";
import { Link } from "react-router-dom";

const services = [
  {
    img: im1,
    title: "Plant systems design & installations",
    description: " ",
    link: "/services/wedding-planning",
  },
  {
    img: im2,
    title: "Industrial machinery installations",
    description: "",
    link: "/services/corporate-events",
  },
  {
    img: im3,
    title: "MEP systems design and installations",
    description: "",
    link: "/services/event-coordination",
  },
];

const OurServices: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 z-20">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="flex pb-14 gap-10 mb-5 bg-black justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black w-full rounded-lg shadow-lg p-9 text-white flex flex-col items-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="rounded mb-3 w-full h-32 object-cover"
            />
            <h2 className="font-semibold text-xl mb-2">{service.title}</h2>
            <p className="text-center mb-3">{service.description}</p>
             <Link to="/">
              <button className="mt-2 bg-black text-white border-2 border-customTeal-950 hover:text-white hover:bg-customTeal-950 py-2 px-4 rounded">
                See More
              </button>
            </Link>
          </div>
        ))}
      </div>

      < Link to="/venue"  className="-mt-20">
        <button className="   border-2 bg-black text-customTeal-950 py-2 border-customTeal-950 hover:text-white hover:bg-customTeal-950  px-4 rounded">
          View All Services
        </button>
      </Link>
    </div>
  );
};

export default OurServices;
