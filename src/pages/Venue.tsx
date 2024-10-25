 import React from "react";
 import im1 from "../assets/Pictures/Agricultural Heavy Machine (2).jpg";
 import im2 from "../assets/Pictures/Agricultural Heavy Machine.jpg";
 import im3 from "../assets/Pictures/Building-Information-Modeling.jpg";
 import { Link } from "react-router-dom";
 import Footer from "../Component/Footer";
 import WhatsAppChatButton from "../Component/Whatsapchart";

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
   {
     img: im3,
     title: "Engineering consultancy &Logistics",
     description: "",
     link: "/services/event-coordination",
   },

   {
     img: im3,
     title: "Plant Automation & control systems",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Heavy machines Maintenance & Reliability ",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Supply of engineering materials & Equipment",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Plant maintenance & reliability",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Emergency Response Planning& Safety Inspections",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Construction Industry",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Power plant Industry",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Agriculture Industry",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: im3,
     title: "Manufacturing & Processing Industry",
     description: "",
     link: "/services/event-coordination",
   },
 ];

 const OurServices: React.FC = () => {
   return (
     <div>
       <div className="flex flex-col items-center mt-10 z-20">
         <h1 className="text-3xl font-bold text-customTeal-950 mb-6">
           Our Services
         </h1>
<WhatsAppChatButton/>
         <div className="grid md:grid-cols-3 grid-cols-2 pb-14 gap-2 mb-5 justify-center">
           {services.map((service, index) => (
             <div
               key={index}
               className=" w-full rounded-lg shadow-lg p-9 text-black flex flex-col items-center"
             >
               <img
                 src={service.img}
                 alt={service.title}
                 className="rounded mb-3 w-full h-32 object-cover"
               />
               <h2 className="font-semibold text-xl mb-2">{service.title}</h2>
               <p className="text-center mb-3">{service.description}</p>
               <Link to="/">
                 <button className="mt-2  text-customTeal-950 border-2 border-customTeal-950 hover:text-white hover:bg-customTeal-950 py-2 px-4 rounded">
                   See More
                 </button>
               </Link>
             </div>
           ))}
         </div>
       </div>
       <Footer companyName="Nexgen-Eng" year={2024} />
     </div>
   );
 };

 export default OurServices;
