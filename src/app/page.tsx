'use client';
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Home() {
  return (
    <div>
      {/* White background section */}
      <div className="grid items-center justify-items-center h-[750px] bg-white">
        <main className="grid grid-cols-6 grid-rows-4 gap-4 w-full max-w-7xl p-4 pt-8 h-[700px] bg-neutral-800 rounded-3xl">

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg holographic-card">
            <h1 className="text-4xl text-white font-bold">Jose Nunez</h1>
          </div>

          <div className="col-span-2 row-span-1 bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg holographic-card">
            <p className="text-lg text-white">Software Engineer</p>
          </div>

          <div className="col-span-2 row-span-5 bg-neutral-900 h-full rounded-3xl flex items-center justify-center text-white text-lg">
            <p className="text-lg text-white">Full Stack Developer</p>
          </div>

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">
            <p className="text-lg text-white">Web Developer</p>
          </div>

          <div className="col-span-2 row-span-3 bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg box-card">
            <p className="text-lg text-white">Mobile Developer</p>
          </div>

          <div className="col-span-2 row-span-2 bg-neutral-900 rounded-3xl flex flex-col items-center justify-center text-white text-lg">
            <p className="text-lg text-white mb-4">Lets Connect!</p>
            <ul className="flex">
              <li>
                <a href="#" className="social-icon"><i className="fab fa-facebook-f icon" /></a>
              </li>
              <li>
                <a href="#" className="social-icon"><i className="fab fa-twitter icon" /></a>
              </li>
              <li>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in icon" /></a>
              </li>
              <li>
                <a href="#" className="social-icon"><i className="fab fa-instagram icon" /></a>
              </li>
            </ul>
          </div>
        </main>
      </div>
      

  <div className="px-4 sm:px-8">
    <h1 className="text-4xl font-bold flex items-center justify-center p-4 mt-8 mb-4">Skills</h1>
    <div className="w-[700px] mx-auto bg-black rounded-3xl p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="my-8"
      >
            <SwiperSlide>
              <div className="h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h2 className="text-xl font-bold">Android Dev</h2>
                <p className="text-sm text-gray-300 mt-2">Kotlin</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h3 className="text-xl font-bold">Project 2: Date Night Planner</h3>
                <p className="text-sm text-gray-300 mt-2">AI-powered Django app that suggests date night ideas based on filters.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h3 className="text-xl font-bold">Project 3: NASA CO₂ Tracker</h3>
                <p className="text-sm text-gray-300 mt-2">Map app using NASA data to visualize CO₂ growth and greenhouse gas trends.</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="mx-4 h-[200px] bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center text-white">
                <h3 className="text-xl font-bold">Project 2: Date Night Planner</h3>
                <p className="text-sm text-gray-300 mt-2">
                  AI-powered Django app that suggests date night ideas based on filters.
                </p>
              </div>
            </SwiperSlide>
            </Swiper>
    </div>      
      {/* Black background section */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-7xl mx-auto p-4 mt-4 h-[400px] bg-neutral-800 rounded-3xl">
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 1</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 2</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 3</div>
        <div className="bg-neutral-900 rounded-3xl flex items-center justify-center text-white text-lg">Proj 4</div>
      </div>
    </div>
    </div>
  );
}




