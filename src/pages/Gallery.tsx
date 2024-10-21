 import React from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
 import { Navigation, Pagination } from "swiper/modules";
 import im1 from "../assets/Pictures/Design,manufacture&install robotics in agriculture.jpg";
 import im3 from "../assets/Pictures/Agricultural Heavy Machine (2).jpg";
 import im4 from "../assets/Pictures/Agricultural Heavy Machine.jpg";
 import im2 from "../assets/Pictures/Agricultural Heavy Machine.jpg";


 import "swiper/css";
 import "swiper/css/navigation";
 import "swiper/css/pagination";
 import "./Galleryslider.css"; // Import custom CSS for styling

 const imageList = [im1, im2, im3, im4]; // Correctly defining imageList

 const ImageSlider: React.FC = () => {
   return (
     <div className="slider-container">
       <Swiper
         modules={[Navigation, Pagination]}
         spaceBetween={0} // No space between slides
         slidesPerView={3} // Show 3 slides at a time
         centeredSlides={true} // Center the active slide
         loop={true} // Enable looping
         navigation
         pagination={{ clickable: true }}
         className="swiper-wrapper"
       >
         {imageList.map((image, index) => (
           <SwiperSlide key={index} className="custom-slide">
             <div className="slide-content">
               <img
                 src={image}
                 alt={`Slide ${index}`}
                 className="slide-image"
               />
             </div>
           </SwiperSlide>
         ))}
       </Swiper>
     </div>
   );
 };

 export default ImageSlider;
