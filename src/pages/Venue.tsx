 import React from "react";
//  import im1 from "../assets/Pictures/Agricultural Heavy Machine (2).jpg";
//  import im2 from "../assets/Pictures/Agricultural Heavy Machine.jpg";
 import im3 from "../assets/Pictures/Building-Information-Modeling.jpg";
 import { Link } from "react-router-dom";
 import Footer from "../Component/Footer";
 import WhatsAppChatButton from "../Component/Whatsapchart";

 const services = [
   {
     img: "https://rodem.com/wp-content/uploads/2023/06/Skid-Design.jpg",
     title: "Plant systems design & installations",
     description: " ",
     link: "/services/wedding-planning",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK_ZNNhuafGAdAPTIVTCp0uPJ3-AGluhH4w&s",
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
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtDsjwnJfT2i0_VbG46bhZsuBmki76bwL2A&s",
     title: "Engineering consultancy &Logistics",
     description: "",
     link: "/services/event-coordination",
   },

   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovmmaEpPGHnZe65vfYemGwTMwe4pHRUCpmw&s",
     title: "Plant Automation & control systems",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "data:image/jpeg;base64,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",
     title: "Heavy machines Maintenance & Reliability ",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShF_3LEreTGvdPZd9buOU_f4blZit4Wu_eKg&s",
     title: "Supply of engineering materials & Equipment",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3OM2zBLYvMDZcLD0OmKkX15838sozp2CtQ&s",
     title: "Plant maintenance & reliability",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-LyjhfUDmD34l79i2p8D9PHFjZLSevzmvw&s",
     title: "Emergency Response Planning& Safety Inspections",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
     title: "Construction Industry",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QjNZsZ7Df1WuPGpiR0zwv7jL7OBA0mVbaA&s",
     title: "Power plant Industry",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hefZ6F4ucniuzFdzR6stCV2G-JK-iz1GiQ&s",
     title: "Agriculture Industry",
     description: "",
     link: "/services/event-coordination",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0yqA5B-ghukZGraBmjdMCUtWExuseFTcRA&s",
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
                 className="rounded mb-3 object-cover"
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
