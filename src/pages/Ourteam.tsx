 import React, { useState } from "react";
 import salto from "../assets/Pictures/Design,manufacture&install robotics in agriculture.jpg";
import TeamPage from "./Ourteamofficial";
 import AboutUs from "./Aboutus";

 const OurTeam: React.FC = () => {
   const [isExpanded, setIsExpanded] = useState(false);

   const toggleReadMore = () => {
     setIsExpanded(!isExpanded);
   };

   return (
     <>
       {/* Banner Section */}
       <section className="banniere background-image" id="banniere">
         <div className="contenu text-center">
           <h2 className="  text-customTeal-950 text-3xl font-semibold">
             Welcome to Nexgen Engineering
           </h2>
           <p className=" text-2xl font-bold">Technical Expertise</p>
         </div>
       </section>

       {/* CEO Section */}
       <section>
         <div className="container-fluid">
           <div className="flex flex-col lg:flex-row">
             <div
               className="w-full  lg:w-4/12 bg-transparent"
               style={{ padding: "-80px" }}
             >
               <img className="img-fluid h-96 " src={salto} alt="" />
             </div>
             <div className="w-full lg:w-8/12 pl-10">
            <h4 className="font-bold text-customTeal-950 text-2xl">About us  </h4>

               <p className="text">
                 NEXGEN is a Kigali-based engineering company specializing in
                 mechanical and MEP engineering solutions. Our team of highly
                 skilled engineers and technicians provide tailored solutions
                 that meet the diverse needs of industries across the world.
                 From installation and maintenance to full-scale project design,
                 our mission is to deliver world-class engineering services to
                 our clients.
                 <span className={`dots ${isExpanded ? "hidden" : "inline"}`}>
                   ...
                 </span>
                 <span
                   className={`moreText ${isExpanded ? "inline" : "hidden"}`}
                 >
                  <h4 className="font-bold text-customTeal-950 text-2xl"> Our Vision</h4> To be recognized as a leader in mechanical and MEP
                   engineering, known for our commitment to excellence,
                   innovation, and sustainability. We aim to set industry
                   benchmarks through cutting-edge technology and practices that
                   not only meet but exceed client expectations, positively
                   contributing to the communities we serve. 
                   <h4 className="font-bold text-customTeal-950 text-2xl">Our Mission</h4> To
                   deliver innovative and sustainable mechanical and MEP
                   engineering solutions that enhance the efficiency and
                   performance of our clients' projects. We are committed to
                   providing exceptional service while adhering to the highest
                   standards of quality, safety, and integrity. Our
                   collaborative approach empowers our team and partners to
                   drive innovation in every project
                 </span>
               </p>
               <div className="border-2 border-customTeal-950 hover:text-white hover:bg-yellow-700 rounded  w-32 mt-10 p-2">
                 <button className="font-bold" onClick={toggleReadMore}>
                   {isExpanded ? "Read Less" : "Read More..."}
                 </button>
               </div>
             </div>
           </div>
         </div>
       </section>
   <AboutUs/>
    <TeamPage/>
        
     </>
   );
 };

 // Example team members data (replace with actual data)
 
 export default OurTeam;
