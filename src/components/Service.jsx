import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import  '../index.css'
import Iced from '../assets/Iced.jpeg';
import Latte from '../assets/Latte.jpeg';
import Mocha from '../assets/Mocha.jpeg';
import Ricano from '../assets/Ricano.png';
import Americano from '../assets/Americano.jpeg'
import Breve from '../assets/Breve.png'
import Cappuccino from '../assets/Capucino.jpeg'
import Corado from '../assets/Corado.jpeg'

function Service() {
  const slides = [
    { id: 1, img: Iced, title: "Best Coffee Flavor", description: "Experience the rich taste of our coffee.", link: "#" },
    { id: 2, img: Latte, title: "Creamy Latte Art", description: "Indulge in the art of a perfect latte.", link: "#" },
    { id: 3, img: Mocha, title: "Mocha Delights", description: "Savor the blend of chocolate and coffee.", link: "#" },
    { id: 4, img: Ricano, title: "Special Ricano", description: "Unique flavors in every sip.", link: "#" },
    { id: 5, img: Americano, title: "Special Ricano", description: "Unique flavors in every sip.", link: "#" },
    { id: 6, img: Breve, title: "Special Ricano", description: "Unique flavors in every sip.", link: "#" },
    { id: 7, img: Cappuccino, title: "Special Ricano", description: "Unique flavors in every sip.", link: "#" },
    { id: 8, img: Corado, title: "Special Ricano", description: "Unique flavors in every sip.", link: "#" },

  ];

  return (
    <div   style={{fontFamily:'Poppins'}} className="w-full max-w-5xl mx-auto py-8  text-white">
   <h1
          style={{ fontFamily: "Poppins" }}
          className="text-center text-3xl font-bold text-[#3e2723] mb-2"
        >
          Who are we?
        </h1>
        <h2
          style={{ fontFamily: "Poppins" }}
          className="text-center  text-lg text-blue-600  mb-6"
        >
          About Us
        </h2>      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
            640:{slidesPerView:1,},
            768:{slidesPerView: 2},
            1024: { // Screen width 1024px and up
                slidesPerView: 3, // Show 3 slides at a time
              },
        }}
        className="rounded-lg shadow-lg mt-20 lg:m-0 sm:m-10 "
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="bg-[#804933] -lg overflow-hidden shadow-lg flex flex-col h-full">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-semibold">{slide.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{slide.description}</p>
                </div>
                <div className="mt-4">
                  <a href={slide.link} className="flex items-center text-sm text-[#d2a679] hover:text-[#bfa06b]">
                    Learn More
                    <span className="ml-2 text-xl">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Service;
