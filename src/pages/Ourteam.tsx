 import React, { useState } from "react";
 import salto from "../assets/Pictures/Design,manufacture&install robotics in agriculture.jpg";
 import t1 from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg";
 import t2 from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg";
 import t3 from "../assets/Pictures/Design&Installation of manufacturing facilities 2.jpg";
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
       {/* Team Section */}
       <section className="temoignage" id="temoignage">
         <div className="title text-center" id="white_title">
           <h2 className="text-customTeal-950 text-3xl font-bold p-4">Nexgen TEAM</h2>
           <p className="font-semibold text-2xl">Meet Our Team</p>
         </div>

         <div className="container-fluid" id="team">
           <div className="flex flex-wrap justify-center">
             {/* Team Member Card */}
             {teamMembers.map((member) => (
               <div key={member.name} className="w-full md:w-1/5 p-4">
                 <div className="our-team bg-white shadow-lg rounded-lg">
                   <div className="picture ">
                     <img
                       className="img-fluid rounded-t-lg"
                       src={member.image}
                       alt={member.name}
                     />
                   </div>
                   <div className="team-content p-4 bg-customTeal-950 text-center">
                     <h3 className="name">{member.name}</h3>
                     <h4 className="title">{member.title}</h4>
                   </div>
                   <ul className="social flex justify-center space-x-4 mb-4">
                     <li>
                       <a
                         href={member.email}
                         className="fa fa-envelope-o"
                         aria-hidden="true"
                       ></a>
                     </li>
                     <li>
                       <a
                         href={member.linkedin}
                         className="fa fa-linkedin"
                         aria-hidden="true"
                       ></a>
                     </li>
                     <li>
                       <a
                         href={member.phone}
                         className="fa fa-phone"
                         aria-hidden="true"
                       ></a>
                     </li>
                   </ul>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
     </>
   );
 };

 // Example team members data (replace with actual data)
 const teamMembers = [
   {
     name: "Solange GANZA UMULINGAWASE",
     title: "Busineess Mentor’s",
     image: t3,
     email: "#",
     linkedin: "#",
     phone: "#",
   },
   {
     name: "Elysée NSHIMIYIMANA",
     title: "CEO& Chief Operations Officer",
     image: t1,
     email: "#",
     linkedin: "#",
     phone: "#",
   },
   {
     name: "David IRAKIZA NDAYISABA",
     title: "Chief Technology/ Engineer Officer",
     image: t2,
     email: "#",
     linkedin: "#",
     phone: "#",
   },
 ];

 export default OurTeam;
