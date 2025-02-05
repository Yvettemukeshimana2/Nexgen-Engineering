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
     link: "/services/1",
   },
   {
  
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlK_ZNNhuafGAdAPTIVTCp0uPJ3-AGluhH4w&s",
     title: "Industrial machinery installations",
     description: "",
     link: "/services/2",
   },
   {
     img: im3,
     title: "MEP systems design and installations",
     description: "",
     link: "/services/3",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtDsjwnJfT2i0_VbG46bhZsuBmki76bwL2A&s",
     title: "Engineering consultancy &Logistics",
     description: "",
     link: "/services/4",
   },

   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQovmmaEpPGHnZe65vfYemGwTMwe4pHRUCpmw&s",
     title: "Plant Automation & control systems",
     description: "",
     link: "/services/5",
   },
   {
     img: "https://gruasyaparejos.com/wp-content/uploads/2019/08/heavy-equipment-maintenance-2.jpg ",
     title: "Heavy machines Maintenance & Reliability ",
     description: "",
     link: "/services/6",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShF_3LEreTGvdPZd9buOU_f4blZit4Wu_eKg&s",
     title: "Supply of engineering materials & Equipment",
     description: "",
     link: "/services/7",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3OM2zBLYvMDZcLD0OmKkX15838sozp2CtQ&s",
     title: "Plant maintenance & reliability",
     description: "",
     link: "/services/8",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-LyjhfUDmD34l79i2p8D9PHFjZLSevzmvw&s",
     title: "Emergency Response Planning& Safety Inspections",
     description: "",
     link: "/services/9",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Q-2osXQQJBUa6utAnGTUlQFREMeQnNx0Hw&s",
     title: "Construction Industry",
     description: "",
     link: "/services/10",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6QjNZsZ7Df1WuPGpiR0zwv7jL7OBA0mVbaA&s",
     title: "Power plant Industry",
     description: "",
     link: "/services/11",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0hefZ6F4ucniuzFdzR6stCV2G-JK-iz1GiQ&s",
     title: "Agriculture Industry",
     description: "",
     link: "/services/12",
   },
   {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV0yqA5B-ghukZGraBmjdMCUtWExuseFTcRA&s",
     title: "Manufacturing & Processing Industry",
     description: "",
     link: "/services/13",
   },
 ];

 const OurServices: React.FC = () => {
   return (
     <div>
       <div className="flex flex-col items-center mt-10 z-20">
         <h1 className="text-3xl font-bold text-customTeal-950 mb-6">
           Our Services
         </h1>
         <WhatsAppChatButton />
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
               <Link to={service.link}>
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
