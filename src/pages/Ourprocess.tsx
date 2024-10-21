 import React from "react";

 const OurProcess: React.FC = () => {
   return (
     <div className="max-w-6xl mx-auto p-3">
       <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us</h2>

       <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-6 ">
         <div className="bg-gradient-to-t from-black h-72 mt-16 mb-4  to-customTeal-950 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-2xl font-semibold mb-4  "> Expertise</h3>
           <p className="text-md">
             Our team of highly skilled engineers brings a wealth of experience
             in Mechanical and MEP systems.
           </p>
         </div>
         <div className=" flex flex-col space-y-3">
           {/* Step 2: We Design */}
           <div className=" bg-gradient-to-r from-black to-gray-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
             <h3 className="text-2xl font-semibold mb-4 text-white">
               Reliability
             </h3>
             <p className="text-md">
               We ensure timely delivery and adherence to all project
               specifications, providing peace of mind for our clients.
             </p>
           </div>

           {/* Step 3: We Manage */}
           <div className="bg-gradient-to-r from-black to-gray-500 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
             <h3 className="text-2xl font-semibold mb-4 ">
               Customized Solutions:
             </h3>
             <p className="text-md">
               We offer tailored solutions that fit the unique needs of every
               client, ensuring the best possible outcomes.
             </p>
           </div>

           {/* Step 4: We Coordinate */}
         </div>
         <div className="bg-gradient-to-t mt-16 h-72 from-black mb-4 to-customTeal-950 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
           <h3 className="text-2xl font-semibold mb-4">Innovative Approach:</h3>
           <p className="text-md">
             We are committed to adopting the latest technologies and best
             practices to provide cutting-edge solutions
           </p>
         </div>
       </div>
       <div className="bg-gradient-to-r from-black to-gray-500 p-6 text-white rounded-lg shadow-lg hover:scale-105 transform transition-all duration-700 ease-in-out">
         <h3 className="text-2xl font-semibold mb-4 ">
           Commitment to Safety:
         </h3>
         <p className="text-md">
           Our operations meet the highest safety standards to ensure a safe
           working environment and protect our clients' assets.Commitment to
           Safety: Our operations meet the highest safety standards to ensure a
           safe working environment and protect our clients' assets.
         </p>
       </div>
     </div>
   );
 };

 export default OurProcess;
