 import React from "react";
//  import bg from "../assets/Pictures/Design&installation of power plant.jpg";
 import { useForm, Controller } from "react-hook-form";
import TeamPage from "./Ourteamofficial";
 interface ContactFormData {
   email: string;
   name: string;
   contact: string;
   message: string;
 }

 const ContactUsPage: React.FC = () => {
   const {
     control,
     handleSubmit,
     formState: { errors },
     reset,
   } = useForm<ContactFormData>({
     defaultValues: {
       email: "",
       name: "",
       contact: "",
       message: "",
     },
   });

   const onSubmit = (data: ContactFormData) => {
     console.log(data);
     reset();
   };

   return (
     <div className="min-h-screen flex flex-col   p-32">
       <div className="container  w-full bg-white rounded-lg shadow-lg p-6">
         <div className="sm:flex grid grid-cols-1 md:flex-row">
           <div
             className="flex-1 bg-cover bg-center rounded-lg text-white"
             style={{
              //  backgroundImage: `url(${bg})`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               height: "50vh",
             }}
           >
             <div className="bg-customGreen inset-0 bg-gradient-to-b pb-10 from-customTeal-950 to-black bg-opacity-80 rounded-t-full flex flex-col p-2 text-center pt-20 mt-20">
               <h2 className="text-2xl font-semibold text-white">Contact Us</h2>
               <h1 className="text-3xl mt-4 text-white">Corporate Office</h1>
               <div className="mt-6">
                 <p> Kigali, Nyarugenge, KN 140 ST</p>
                 <p>Email: : nexgene24@gmail.com</p>
                 <p>Phone:+250789319155/+250787042094</p>
               </div>
             </div>
           </div>

           <div className="flex-1 pt-24 sm:p-6">
             <h3 className="text-xl font-semibold text-gray-800 mb-6">
               Send a Message
             </h3>
             <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex flex-col gap-4">
                 <div className="flex gap-4">
                   <Controller
                     name="name"
                     control={control}
                     rules={{ required: "Name is required" }}
                     render={({ field }) => (
                       <div className="flex-1">
                         <label className="block text-gray-700">Name</label>
                         <input
                           {...field}
                           type="text"
                           placeholder="Name"
                           className="w-full px-3 py-2 border rounded-lg"
                         />
                         {errors.name && (
                           <span className="text-red-500 text-sm">
                             {errors.name.message}
                           </span>
                         )}
                       </div>
                     )}
                   />

                   <Controller
                     name="email"
                     control={control}
                     rules={{
                       required: "Email is required",
                       pattern: {
                         value: /\S+@\S+\.\S+/,
                         message: "Email address is invalid",
                       },
                     }}
                     render={({ field }) => (
                       <div className="flex-1">
                         <label className="block text-gray-700">Email</label>
                         <input
                           {...field}
                           type="email"
                           placeholder="Email"
                           className="w-full px-3 py-2 border rounded-lg"
                         />
                         {errors.email && (
                           <span className="text-red-500 text-sm">
                             {errors.email.message}
                           </span>
                         )}
                       </div>
                     )}
                   />
                 </div>

                 <Controller
                   name="contact"
                   control={control}
                   rules={{
                     required: "Contact number is required",
                     pattern: {
                       value: /^\d{10}$/,
                       message: "Contact number must be 10 digits",
                     },
                   }}
                   render={({ field }) => (
                     <div>
                       <label className="block text-gray-700">
                         Contact Number
                       </label>
                       <input
                         {...field}
                         type="text"
                         placeholder="Contact Number"
                         className="w-full px-3 py-2 border rounded-lg"
                       />
                       {errors.contact && (
                         <span className="text-red-500 text-sm">
                           {errors.contact.message}
                         </span>
                       )}
                     </div>
                   )}
                 />

                 <Controller
                   name="message"
                   control={control}
                   rules={{ required: "Message is required" }}
                   render={({ field }) => (
                     <div>
                       <label className="block text-gray-700">Message</label>
                       <textarea
                         {...field}
                         placeholder="Your message..."
                         className="w-full px-3 py-2 border rounded-lg h-24 resize-none"
                       />
                       {errors.message && (
                         <span className="text-red-500 text-sm">
                           {errors.message.message}
                         </span>
                       )}
                     </div>
                   )}
                 />

                 <button
                   type="submit"
                   className=" p-2 w-32 ml-20 bg-customTeal-950  text-white rounded-lg"
                 >
                   Send Message
                 </button>
               </div>
             </form>
           </div>
         </div>
       </div>
       <TeamPage />
     </div>
   );
 };

 export default ContactUsPage;