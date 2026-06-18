import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const categories = [
  "All",
  "music",
  "games",
  "live",
  "javascript",
  "film",
  "computer files",
  "CS",
  "files",
  "Apps",
  "sad",
  "React",
   "HTML",
   "CSS",
   "JAVA",
   "PYTHON",
   "PHP",
   "CASE",
   "AA",
   "Aloww",
   "New to you"

];

export default function HomeNavbar() {
  const [activeCategory,setActiveCategory]=useState("All")
  const navigate=useNavigate()
  function handleClikc(categorie){
    setActiveCategory(categorie)
    if(categorie==="All") return;
    navigate(`results?search_query=${categorie}`)
  }
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={10}
      modules={[Navigation]}
        navigation={{
          enabled: true,
        }}

      className="mx-2 mt-4"

    >
      {categories.map((categorie) => (
        <SwiperSlide
          key={categorie}
          className="w-auto!"
        >
          
          <button
            onClick={() =>handleClikc(categorie) }
            className={`py-1 px-3 rounded-md  cursor-pointer capitalize font-medium select-none  ${
              activeCategory === categorie
              ? "dark:bg-white dark:text-black bg-dark-card text-dark-text"
              : "dark:bg-dark-card dark:text-white bg-bg-secondary text-text-secondary"
            }`}
            >
            {categorie}
          </button>
            
        </SwiperSlide>
      ))}
    </Swiper>
  );
}