 import React, { useState, useEffect, useRef } from "react";
 import { FaWhatsapp } from "react-icons/fa";
 import icon1 from "../assets/WhatsApp Image 2024-10-20 at 14.56.14.jpeg";
 import Avatar from "../assets/WhatsApp Image 2024-10-20 at 14.56.14.jpeg";
 import { motion } from "framer-motion";

 // Mock data for FAQs and related questions
// Mock data for FAQs and related questions in the specified industries
const relatedQuestions: Record<string, string[]> = {
  "What services do you offer in construction?": [
    "What are your construction site safety measures?",
    "Do you provide equipment for construction?",
    "What types of construction projects do you handle?",
  ],
  "What services do you offer in agriculture?": [
    "Do you offer irrigation solutions?",
    "What types of agricultural projects do you support?",
    "Can you help with livestock management?",
  ],
  "What services do you offer in power plants?": [
    "Do you handle power plant maintenance?",
    "What safety measures are in place for power plants?",
  ],
  "What services do you offer in manufacturing?": [
    "Do you assist with production line setup?",
    "What manufacturing equipment can you provide?",
    "Can you support quality control processes?",
  ],
  "What are your construction site safety measures?": [
    "How do you handle on-site emergencies?",
    "Are your workers certified for hazardous work?",
  ],
  "Do you provide equipment for construction?": [
    "What equipment do you supply?",
    "Do you have heavy machinery available?",
  ],
  "Do you offer irrigation solutions?": [
    "Can you assist with water management?",
    "Do you offer soil testing services?",
  ],
  "Do you handle power plant maintenance?": [
    "What maintenance services are available?",
    "Can you provide emergency repair services?",
  ],
  "Do you assist with production line setup?": [
    "What are the costs for setting up a line?",
    "Do you offer training for line operators?",
  ],
};

const faq: Record<string, string> = {
  "What services do you offer in construction?":
    "We offer project management, site safety inspections, and heavy equipment rental for construction projects.",
  "What services do you offer in agriculture?":
    "Our services include crop management, soil analysis, and modern irrigation solutions.",
  "What services do you offer in power plants?":
    "We provide plant setup, equipment maintenance, and safety assessments for power plants.",
  "What services do you offer in manufacturing?":
    "We support production line setup, quality assurance, and provide various machinery.",
  "What are your construction site safety measures?":
    "Our safety measures include regular site inspections, worker certifications, and emergency protocols.",
  "Do you provide equipment for construction?":
    "Yes, we offer heavy machinery and tools for construction projects, including cranes and excavators.",
  "Do you offer irrigation solutions?":
    "Yes, we provide drip and sprinkler irrigation systems designed for optimal water usage.",
  "Do you handle power plant maintenance?":
    "We handle routine maintenance, emergency repairs, and system efficiency assessments for power plants.",
  "Do you assist with production line setup?":
    "Yes, we offer end-to-end setup, including equipment installation and operator training for production lines.",
  "What types of construction projects do you handle?":
    "We handle residential, commercial, and industrial construction projects.",
  "Can you help with livestock management?":
    "Yes, we provide expertise in animal care, feed optimization, and livestock health monitoring.",
  "What manufacturing equipment can you provide?":
    "We provide machinery for packaging, assembly, and quality control in manufacturing plants.",
  "What are your working hours?":
    "We operate 24/7 to support all industry requirements and emergencies.",
  "What is your cancellation policy?":
    "You can cancel services up to 48 hours before the scheduled time.",
  "How do you handle on-site emergencies?":
    "We have trained emergency responders and first-aid equipment on every construction site.",
};

 const WhatsAppChatButton: React.FC = () => {
   const [chatActive, setChatActive] = useState(false);
   const [conversation, setConversation] = useState<
     { question: string; answer: string }[]
   >([]);
   const [remainingQuestions, setRemainingQuestions] = useState(
     Object.keys(faq).slice(0, 5)
   );

   const chatContentRef = useRef<HTMLDivElement>(null);

   const handleSelectQuestion = (question: string) => {
     const answer = faq[question];
     setConversation((prevConversation) => [
       ...prevConversation,
       { question, answer },
     ]);

     const updatedRemainingQuestions = remainingQuestions.filter(
       (q) => q !== question && !relatedQuestions[question]?.includes(q)
     );
     setRemainingQuestions(updatedRemainingQuestions);
   };

   const handleSelectAnotherQuestion = () => {
     // Reset the conversation state
     setConversation([]);
     setRemainingQuestions(Object.keys(faq).slice(0, 5));
   };

   const handleCloseChat = () => {
     setChatActive(false);
     setConversation([]);
     setRemainingQuestions(Object.keys(faq).slice(0, 5));
   };

   useEffect(() => {
     if (chatContentRef.current) {
       chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
     }
   }, [conversation]);

   return (
     <div className="fixed">
       <div className="">
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .bounce {
            animation: bounce 1.5s infinite;
          }
        `}
      </style>
      <button
         onClick={() => setChatActive(!chatActive)}
         className="fixed bounce bottom-16 right-4 bg-customGreen-700 text-white p-4 rounded-full z-50 shadow-lg hover:bg-customTeal-950 transition-colors duration-300"
         style={{ zIndex: 9999 }}
       >
         <FaWhatsapp className="w-6 h-6 " />
       </button>
    </div>
       
       {/* Chat Window */}
       {chatActive && (
         <div
           className="fixed bottom-2 right-4 w-96 p-4 bg-white bg-opacity-95 border border-gray-300 rounded-lg max-h-[70vh] overflow-y-96 shadow-md z-50"
           ref={chatContentRef}
           style={{ zIndex: 9999 }}
         >
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex flex-col"
           >
             {/* Chat Header */}
             <div className="flex items-center justify-between mb-4 bg-gray-100 p-2 rounded-lg">
               <div className="flex items-center space-x-2">
                 <img
                   src={icon1} // Replace with actual image
                   alt="Profile"
                   className="w-10 h-10 rounded-full"
                 />
                 <div>
                   <p className="font-semibold">Jayne N.</p>
                   <p className="text-xs text-customTeal-950">Online</p>
                 </div>
               </div>
               <button
                 onClick={handleCloseChat}
                 className="text-gray-700 font-bold hover:text-red-800 transition-colors duration-300"
               >
                 &#x2715;
               </button>
             </div>

             {/* Chat Messages */}
             <div className="text-sm text-gray-700 mb-4">
               <div className="flex flex-col space-y-2">
                 {/* Assistant Initial Messages */}
                 <div className="self-start text-lg text-black rounded-lg">
                   <div className="not-italic text-sm pt-6 pb-2">
                     <motion.div
                       initial={{ opacity: 0, y: 50 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8 }}
                       className="flex flex-col"
                     >
                       <div className="flex items-start space-x-2">
                         <img
                           src={icon1} // Replace with actual image
                           alt="Profile"
                           className="w-8 h-8 rounded-full"
                         />
                         <div className="bg-gray-100 p-2 rounded-lg">
                           <p>Need any help? Click here!</p>
                         </div>
                       </div>
                       <div className="flex items-start space-x-2 mt-2">
                         <img
                           src={icon1} // Replace with actual image
                           alt="Profile"
                           className="w-8 h-8 rounded-full"
                         />
                         <div className="bg-gray-100 p-2 rounded-lg">
                           <p>How can I help you?</p>
                         </div>
                       </div>
                     </motion.div>
                   </div>
                 </div>

                 {/* Conversation Flow */}
                 {conversation.map((entry, index) => (
                   <div key={index}>
                     {/* User Question */}
                     <div className="flex justify-end space-x-2">
                       <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex flex-col"
                       >
                         <p className="bg-gray-300 text-gray-600 text-sm p-2 rounded-md">
                           {entry.question}
                         </p>
                         <p className="text-xs text-gray-400 text-right mt-1">
                           11:27 PM
                         </p>
                       </motion.div>
                     </div>

                     {/* Assistant Answer */}
                     <div className="flex space-x-2">
                       <img
                         src={Avatar}
                         alt="Profile"
                         className="w-8 h-8 rounded-full"
                       />
                       <motion.div
                         initial={{ opacity: 0, y: 50 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex flex-col"
                       >
                         <p className="bg-customTeal-950 shadow-sm rounded-md text-white text-sm p-2">
                           {entry.answer}
                         </p>
                         <p className="text-xs text-gray-400 mt-1">11:27 PM</p>
                       </motion.div>
                     </div>

                     {/* Related Sub-Questions */}
                     {relatedQuestions[entry.question]?.length > 0 && (
                       <div className="flex flex-col mt-2 space-y-1">
                         <p className="text-sm font-semibold">
                           Related Questions:
                         </p>
                         {relatedQuestions[entry.question]?.map((q, idx) => (
                           <button
                             key={idx}
                             onClick={() => handleSelectQuestion(q)}
                             className="text-customTeal-950 text-left hover:underline"
                           >
                             {q}
                           </button>
                         ))}
                       </div>
                     )}
                   </div>
                 ))}

                 {/* Ask Another Question Button */}
                 {conversation.length > 0 &&
                   !relatedQuestions[
                     conversation[conversation.length - 1].question
                   ]?.length && (
                     <button
                       onClick={handleSelectAnotherQuestion}
                       className="text-customTeal-950 text-sm mt-4 hover:underline transition-colors duration-300"
                     >
                       Ask another question
                     </button>
                   )}

                 {/* Initial Questions */}
                 {!conversation.length && remainingQuestions.length > 0 && (
                   <ul className="list-none space-y-2 text-black">
                     {remainingQuestions.map((q, index) => (
                       <li key={index}>
                         <button
                           onClick={() => handleSelectQuestion(q)}
                           className="text-customTeal-950 hover:underline"
                         >
                           {q}
                         </button>
                       </li>
                     ))}
                   </ul>
                 )}
               </div>
             </div>

             {/* Input Section */}
             <div className="self-start text-black rounded-lg mt-4">
               <p className="mt-4 text-gray-600 text-xs">
                 Alternatively, send us a message directly on WhatsApp.
               </p>
               <button className="mt-2 flex items-center bg-black text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors duration-300">
                 <a
                   href="https://wa.me/+250787042094"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex flex-row justify-center items-center"
                 >
                   <FaWhatsapp className="mr-2" />
                   <p>contact us on WhatsApp</p>
                 </a>
               </button>
             </div>
           </motion.div>
         </div>
       )}
     </div>
   );
 };

 export default WhatsAppChatButton;