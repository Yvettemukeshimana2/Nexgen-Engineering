 import { useEffect, useState } from "react";
 import Logo from "../assets/WhatsApp Image 2024-10-20 at 14.56.14.jpeg";
 const NavBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 0);
     };

     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

   return (
     <header
       className={`fixed top-0 left-0 z-50 bg-white text-black w-full h-24 flex items-center transition-all duration-300 ${
         isScrolled
           ? "bg-black sm:bg-opacity-75 sm:backdrop-blur-4xl"
           : "bg-transparent"
       }`}
     >
       <div className="flex bg-gradient-to-b rounded-t-sm items-center">
         <img
           src={Logo}
           alt="Logo"
           width="100px"
           className="flex justify-start p-0.5  ml-32"
         />
         <nav className="flex ml-96 gap-10 md:bg-transparent  text-black bg-black bg-opacity-90 w-full h-full items-center justify-center">
           <a href="/" className="hover:text-customTeal-950 ">
             Home
           </a>
           <a href="/aboutus1" className="hover:text-customTeal-950 ">
             About Us
           </a>
           <a href="/contactus" className="hover:text-customTeal-950">
             Contact
           </a>
           <a href="/venue" className=" hover:text-customTeal-950">
             Services
           </a>
         </nav>
       </div>
    </header>
   );
 };

 export default NavBar;
