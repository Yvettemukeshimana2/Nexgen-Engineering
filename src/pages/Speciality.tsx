import React from "react";
import { motion } from "framer-motion";
import weddingImage from "../assets/Pictures/Agricultural Heavy Machine.jpg";
import partyImage from "../assets/Pictures/Design,manufacture&install robotics in agriculture.jpg";

// Data array with image paths
const specialtiesData = [
  {
    title: "Technical Expertise:",
    description:
      " The company possesses a strong foundation in mechanical and MEP engineering, backed by skilled professionals with extensive experience in the field. This expertise enables the delivery of high-quality solutions tailored to client needs",
    image: weddingImage,
  },
  {
    title: "Innovative Solutions:",
    description:
      "  Utilization of advanced technologies and innovative design approaches enhances project efficiency and effectiveness, providing a competitive edge in the market.",
    image: partyImage,
  },
  {
    title: "Established Relationships: ",
    description:
      "Strong connections with suppliers, contractors, and industry stakeholders facilitate smoother project execution and resource acquisition",
    image: partyImage,
  },
];

const Specialties: React.FC = () => {
  return (
  
    <motion.div initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }} className="max-w-6xl mx-auto  ">
      <h2 className="text-4xl font-bold text-center mt-10">Our Specialties</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {specialtiesData.map((specialty, index) => (
          <div key={index} className="  p-6 rounded-lg ">
            {/* Image Section */}
            <img
              src={specialty.image}
              alt={specialty.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />

            {/* Text Section */}
            <h3 className="text-2xl font-semibold mb-4 text-customTeal-950">
              {specialty.title}
            </h3>
            <p className="text-md text-gray-700">{specialty.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Specialties;
