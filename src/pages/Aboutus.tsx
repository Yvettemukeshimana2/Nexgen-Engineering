 import React from "react";
  import missionImg from "../assets/Pictures/Design&Installation of manufacturing facilities 1.jpg";
  import visionImg from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg"; // Replace with actual image paths
  import historyImg from "../assets/Pictures/Agricultural Heavy Machine.jpg"; // Replace with actual image paths
  import { motion } from "framer-motion";

 const AboutUs: React.FC = () => {
   return (
     <div className="    ">   
        <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className=" p-3 shadow-md  flex space-x-10"
       >
        <section className="mb-8">
 <div className="">
             <p className="text-lg bg-gradient-to-l text-white  from-black to-customTeal-950 p-3">
               <h3 className="text-3xl font-bold mb-2 text-black">
                 Our Mission
               </h3>
               To deliver innovative and sustainable mechanical and MEP
               engineering solutions that enhance the efficiency and performance
               of our clients' projects. We are committed to providing
               exceptional service while adhering to the highest standards of
               quality, safety, and integrity. Our collaborative approach
               empowers our team and partners to drive innovation in every
               project
             </p>
           </div>
         </section>

         {/* Our Vision Section */}
         <section className="mb-8 flex flex-row">
           <div className=" ">
             {/* <div>
               <img
                 src={visionImg}
                 alt="Our Vision"
                 className=" mb-3 object-cover rounded"
               />
             </div> */}
             <div>
               <p className="text-lg bg-gradient-to-l text-white  from-black to-customTeal-950 bg-opacity-10 p-3 ">
                 <h3 className="text-3xl  text-black font-bold mb-2">
                   Our Vision
                 </h3>
                 <p className="">
                   To be recognized as a leader in mechanical and MEP
                   engineering, known for our commitment to excellence,
                   innovation, and sustainability. We aim to set industry
                   benchmarks through cutting-edge technology and practices that
                   not only meet but exceed client expectations, positively
                   contributing to the communities we serve.
                 </p>
               </p>
             </div>
           </div>
         </section>
       </motion.div>
      <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         
       > 
       <h3 className="font-bold flex justify-center text-3xl pt-5">Our Core Value</h3>
       <div className=" pl-1 pr-1 flex space-x-4 text-black">
        
         <section className="">
           <div className="  items-center p-2">
             <img
               src={historyImg}
               alt="Our History"
               className=" mb-3 w-72 h-72 object-cover pt-3 rounded"
             />
             <p className="text-lg  bg-gradient-to-r p-3">
               <h3 className="text-3xl  text-customTeal-950 flex justify-center p-3 font-bold mb-2">
                 Innovation
               </h3>
               We continuously adopt and implement cutting-edge technologies and
               processes to offer the most efficient solutions.
             </p>
           </div>
         </section>
         <section className="">
           <div className="  items-center p-2">
             <img
               src={visionImg}
               alt="Our History"
               className=" mb-3 w-72 h-72 object-cover pt-3 rounded"
             />
             <p className="text-lg    pl-4">
               <h3 className="text-2xl font-bold text-customTeal-950 flex justify-center mb-2">
                 Integrity
               </h3>
               We operate with transparency and honesty, ensuring that every
               interaction and transaction is conducted with the utmost
               professionalism.
             </p>
           </div>
         </section>
         <section className="">
           <div className="  items-center p-2">
             <img
               src={missionImg}
               alt="Our History"
               className=" mb-3 w-72 h-72 object-cover pt-3 rounded"
             />
             <p className="text-lg  bg-gradient-to-r  p-4">
               <h3 className="text-2xl font-bold   text-customTeal-950 flex justify-center mb-2">
                 Quality
               </h3>
               Our work is defined by excellence. We are committed to delivering
               long-lasting, high-quality results in every project.
             </p>
           </div>
         </section>
         <section className="">
           <div className="  items-center p-2">
             <img
               src={visionImg}
               alt="Our History"
               className=" mb-3 w-72 h-72 object-cover pt-3 rounded"
             />
             <p className="text-lg  bg-gradient-to-r  p-4">
               <h3 className="text-2xl font-bold text-customTeal-950 flex justify-center mb-2">
                 Safety First
               </h3>
               Safety is central to everything we do. We adhere to strict safety
               regulations and industry standards to ensure the well-being of
               both our team and our clients.
             </p>
           </div>
         </section>
       </div>
       </motion.div>
     </div>
   );
 };

 export default AboutUs;
