 import React from "react";
 import { useParams, Link } from "react-router-dom";

 // Service data type
 interface Service {
   id: string;
   title: string;
   description: string;
   img: string;
   details: string;
   purpose: string;
 }

 // Parse section with focus on first section
 const parseFirstSection = (content: string) => {
   const lines = content.split("\n").filter((line) => line.trim() !== "");
   const mainTitle = lines[0];

   const firstSection = lines
     .filter((line) => line.match(/^\n?1\./)) // Target lines starting with 1.
     .map((line) => {
       const [, number, sectionTitle] = line.match(/(\d+)\.\s*(.+):/) || [];
       const description = lines
         .slice(lines.indexOf(line) + 1)
         .filter((descLine) => descLine.startsWith("   o"))
         .map((descLine) => descLine.replace("   o ", ""))
         .join(" ");

       return {
         number,
         title: sectionTitle,
         description,
       };
     })[0]; // Get only the first section

   return {
     mainTitle,
     section: firstSection,
   };
 };

 // Mock services data
 const services: Service[] = [
   {
     id: "1",
     title: "Plant Systems Design & Installations",
     description:
       "At NEXGEN Engineering Ltd, we specialize in delivering innovative and efficient plant systems design and installation services that cater to a wide range of industries.",
     img: "https://rodem.com/wp-content/uploads/2023/06/Skid-Design.jpg",
     details:
       "Our Plant Systems Design & Installation Services Include:\n1. Customized Plant System Design:\n   o Tailored designs meeting specific client project needs.\n2. Mechanical, Electrical, and Plumbing Systems:\n   o Integrating MEP systems for maximum efficiency.\n3. Project Management & Execution:\n   o Ensuring projects are completed on time and within budget.",
     purpose:
       "Why Choose NEXGEN Engineering Ltd for Your Plant Systems Needs?\n1. Expertise & Experience: Bringing extensive knowledge to every project.\n2. Tailored Solutions: Customized to meet specific operational goals.\n3. Quality Assurance: Delivering reliable and high-performance systems.\n\nLet NEXGEN Engineering Ltd be your trusted partner in plant systems design.",
   },
   {
     id: "2",
     title: "Industrial Machinery Installations",
     description:
       "We specialize in the installation of industrial machinery, providing end-to-end solutions that ensure efficiency, reliability, and optimal performance.",
     img: "",
     details:
       "Our Industrial Machinery Installation Services Include:\n1. Comprehensive Machinery Assessment:\n   o Detailed assessment of facility and machinery needs.\n2. Expert Installation & Setup:\n   o Professional installation adhering to international standards.\n3. Project Management:\n   o Coordinating all aspects of installation efficiently.",
     purpose:
       "Why Choose NEXGEN Engineering Ltd for Industrial Machinery Installations?\n1. Experienced Team: Precision and efficiency in machinery installation.\n2. Tailored Solutions: Customized to fit unique operational requirements.\n3. Quality & Reliability: Ensuring optimal and reliable machinery performance.\n\nPartner with NEXGEN Engineering Ltd for seamless industrial machinery integration.",
   },
 ];

 const ServiceDetail: React.FC = () => {
   // Extract service ID from URL
   const { serviceId } = useParams<{ serviceId: string }>();

   // Find the specific service
   const service = services.find((s) => s.id === serviceId);

   // Handle case when service is not found
   if (!service) {
     return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
         <div className="text-center">
           <h2 className="text-3xl font-bold text-gray-800 mb-4">
             Service Not Found
           </h2>
           <Link
             to="/venue"
             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
           >
             Return to Services
           </Link>
         </div>
       </div>
     );
   }

   // Parse details and purpose, focusing on first sections
   const parsedDetails = parseFirstSection(service.details);
   const parsedPurpose = parseFirstSection(service.purpose);

   return (
     <div className="container mx-auto px-4 py-12 max-w-4xl">
       {/* Service Header */}
       <div className="grid md:grid-cols-2 gap-8 mb-12">
         {/* Service Image */}
         <div>
           <img
             src={service.img}
             alt={service.title}
             className="w-full h-64 object-cover rounded-lg shadow-lg"
           />
         </div>

         {/* Service Introduction */}
         <div>
           <h1 className="text-4xl font-bold text-gray-900 mb-4">
             {service.title}
           </h1>
           <p className="text-gray-600 text-lg">{service.description}</p>
         </div>
       </div>

       {/* Details Section */}
       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
           {parsedDetails.mainTitle}
         </h2>

         {parsedDetails.section && (
           <div className="bg-gray-50 p-4 rounded-lg">
             <div className="flex items-center mb-2">
               <span className="text-blue-600 font-bold mr-3">
                 {parsedDetails.section.number}.
               </span>
               <h3 className="font-semibold text-gray-800">
                 {parsedDetails.section.title}
               </h3>
             </div>
             <p className="text-gray-600 pl-6">
               {parsedDetails.section.description}
             </p>
           </div>
         )}
       </div>

       {/* Purpose Section */}
       <div className="bg-white shadow-md rounded-lg p-6">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
           {parsedPurpose.mainTitle}
         </h2>

         {parsedPurpose.section && (
           <div className="bg-gray-50 p-4 rounded-lg">
             <div className="flex items-center mb-2">
               <span className="text-blue-600 font-bold mr-3">
                 {parsedPurpose.section.number}.
               </span>
               <h3 className="font-semibold text-gray-800">
                 {parsedPurpose.section.title}
               </h3>
             </div>
             <p className="text-gray-600 pl-6">
               {parsedPurpose.section.description}
             </p>
           </div>
         )}
       </div>

       {/* Navigation */}
       <div className="text-center mt-10">
         <Link
           to="/venue"
           className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
         >
           Back to Services
         </Link>
       </div>
     </div>
   );
 };

 export default ServiceDetail;