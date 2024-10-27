 import React from "react";
 import { motion } from "framer-motion";
 import missionImg from "../assets/Pictures/Design&Installation of manufacturing facilities 1.jpg";
 import visionImg from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg";
 import historyImg from "../assets/Pictures/Agricultural Heavy Machine.jpg";

 // Define interfaces for our types
 interface CoreValue {
   title: string;
   image: string;
   description: string;
 }

 interface ValueCardProps {
   title: string;
   image: string;
   description: string;
 }

 // Core values data array
 const coreValues: CoreValue[] = [
   {
     title: "Innovation",
     image: historyImg,
     description:
       "We continuously adopt and implement cutting-edge technologies and processes to offer the most efficient solutions.",
   },
   {
     title: "Integrity",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3OM2zBLYvMDZcLD0OmKkX15838sozp2CtQ&s",
     description:
       "We operate with transparency and honesty, ensuring that every interaction and transaction is conducted with the utmost professionalism.",
   },
   {
     title: "Quality",
     image: missionImg,
     description:
       "Our work is defined by excellence. We are committed to delivering long-lasting, high-quality results in every project.",
   },
   {
     title: "Safety First",
     image:
       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSFb-sHVzJlhWWn3u-bQXYprtOOej-VUosvQ&s",
     description:
       "Safety is central to everything we do. We adhere to strict safety regulations and industry standards to ensure the well-being of both our team and our clients.",
   },
 ];

 // Reusable card component with proper typing
 const ValueCard: React.FC<ValueCardProps> = ({
   title,
   image,
   description,
 }) => (
   <div className="bg-white rounded-lg shadow-md overflow-hidden">
     <img src={image} alt={title} className=" object-cover" />
     <div className="p-4">
       <h3 className="text-xl md:text-2xl font-bold text-customTeal-950 text-center mb-3">
         {title}
       </h3>
       <p className="text-sm md:text-base text-gray-700">{description}</p>
     </div>
   </div>
 );

 const AboutUs: React.FC = () => {
   const fadeInUp = {
     initial: { opacity: 0, y: 50 },
     whileInView: { opacity: 1, y: 0 },
     transition: { duration: 0.8 },
   };

   const content = {
     mission:
       "To deliver innovative and sustainable mechanical and MEP engineering solutions that enhance the efficiency and performance of our clients' projects. We are committed to providing exceptional service while adhering to the highest standards of quality, safety, and integrity.",
     vision:
       "To be recognized as a leader in mechanical and MEP engineering, known for our commitment to excellence, innovation, and sustainability. We aim to set industry benchmarks through cutting-edge technology and practices that not only meet but exceed client expectations.",
   };

   return (
     <div className="container mx-auto px-4">
       <motion.div
         {...fadeInUp}
         className="flex  md:flex-row p-5 gap-6 mb-8"
       >
         {/* Mission & Vision */}
         {(["Mission", "Vision"] as const).map((type) => (
           <section key={type} className="w-full md:w-1/2">
             <div className="bg-gradient-to-l  from-black to-customTeal-950 p-6 rounded-lg h-full">
               {/* <img
                 src={type === "Mission" ? missionImg : visionImg}
                 alt={`Our ${type}`}
                 className="w-full h-48 object-cover mb-4 rounded"
               /> */}
               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                 Our {type}
               </h3>
               <p className="text-base md:text-lg text-white">
                 {type === "Mission" ? content.mission : content.vision}
               </p>
             </div>
           </section>
         ))}
       </motion.div>

       {/* Core Values */}
       <motion.div {...fadeInUp} className="mt-8">
         <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
           Our Core Values
         </h3>

         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
           {coreValues.map((value, index) => (
             <ValueCard
               key={index}
               title={value.title}
               image={value.image}
               description={value.description}
             />
           ))}
         </div>
       </motion.div>
     </div>
   );
 };

 export default AboutUs;