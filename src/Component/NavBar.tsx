 import { useEffect, useState } from "react";
 import MenuItem from "../reusable/MenuItem.tsx";
 import { FiHome, FiMenu, FiX, FiPhone,FiRadio, FiBookmark } from "react-icons/fi";
 import Button from "../reusable/Button.tsx";
 import Logo from "../assets/WhatsApp Image 2024-10-20 at 14.56.14.jpeg";
 

 const NavBar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 0);
     };

     window.addEventListener("scroll", handleScroll);
     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

   const toggleMenu = () => {
     setIsMenuOpen(!isMenuOpen);
   };

   const handleMenuItemClick = () => {
     if (isMobile()) {
       toggleMenu();
     }
   };

   const isMobile = () => window.innerWidth <= 640;

   return (
     <>
       {isMenuOpen && (
         <div className="inset-0 bg-black bg-opacity-50 z-40"></div>
       )}
       <header
         className={`fixed top-0 left-0 z-50 bg-white text-black w-full h-24 flex  items-center transition-all duration-300 ${
           isScrolled
             ? "bg-black sm:bg-opacity-75 sm:backdrop-blur-2xl"
             : "bg-transparent"
         }`}
       >
         <div className="">
           
           <div className="flex   bg-gradient-to-b  rounded-t-sm items-center  ">
             <img
               src={Logo}
               alt="Logo"
               width="100px"
               className="flex justify-start p-0.5 mr-64 "
             />
             <button className="md:hidden text-black z-50" onClick={toggleMenu}>
               {!isMenuOpen && <FiMenu size={24} />}
             </button>
             <nav
               className={`fixed md:static flex  right-0 md:flex md:gap-8 md:bg-transparent bg-black bg-opacity-90 md:w-auto w-4/5 h-full md:h-auto flex-col md:flex-row items-center transition-transform transform ${
                 isMenuOpen ? "translate-x-0" : "translate-x-full"
               } md:translate-x-0 z-50 pl-40`}
             >
               <button
                 className="md:hidden text-black absolute top-4 right-4 z-50"
                 onClick={toggleMenu}
               >
                 <FiX size={24} />
               </button>
               <div className="flex flex-col sm:flex-row gap-6 w-full mt-8 md:mt-0">
                 <MenuItem
                   title="Home"
                   address="/"
                   Icon={FiHome}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="About Us"
                   address="/aboutus1"
                   Icon={FiBookmark}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="Contact"
                   address="/contact"
                   Icon={FiPhone}
                   onClick={handleMenuItemClick}
                 />
                 <MenuItem
                   title="Services"
                   address="/venue"
                   Icon={FiRadio}
                   onClick={handleMenuItemClick}
                 />
           
               </div>
               <div className="md:hidden mt-4 w-full">
                 <Button label="Contact Us" onClick={toggleMenu} />
               </div>
             </nav>
           </div>
         </div>
       </header>
     </>
   );
 };

 export default NavBar;
