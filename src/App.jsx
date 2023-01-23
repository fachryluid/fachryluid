import React, { useRef } from 'react';
import './App.css'
import * as Uis from '@iconscout/react-unicons-solid';
import * as Uil from '@iconscout/react-unicons';

function App() {
  const scollToRef = useRef();

  return (
    <>
      <header className="bg-main-400">
        <nav className="flex justify-between items-center text-white p-5">
          <a href="#" className="flex space-x-2 items-center font-poppins font-extrabold">
            <small className="text-alt-400 text-sm">&#60;</small>
            <span className="text-xl">fachiri</span>
            <small className="text-alt-400 text-sm">&#47;&#62;</small>
          </a>
          <div className="flex justify-center items-start space-x-2">
            <button className="w-[1.4rem]">
              <img src="id.png" alt="Indonesian Flag" className="w-full p-[0.1rem]" />
            </button>
            <button className="flex justify-center items-center">
              <Uis.UisApps />
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section className="min-h-[90vh]">
          <div className="flex justify-center bg-main-400 pt-10">
            <img src="fachry.png" alt="Muh Fachry JK Luid" className="w-[70%]" />
          </div>
          <div className="px-5 pt-10">
            <h1 className="text-xl text-main-400 font-bold mb-1">Muh. Fachry J.K. Luid</h1>
            <h2 className="text-4xl font-semibold mb-3">Junior Developer</h2>
            <p className="mb-3 font-semibold text-justify">Seorang <i>Freelancer</i> yang punya <i>passion</i> di bidang pengembangan perangkat lunak.</p>
            <button onClick={() => scollToRef.current.scrollIntoView({behavior:"smooth"})} className="flex items-center space-x-2 bg-alt-400 px-5 py-2 font-bold text-lg rounded-lg border-[3px] border-black shadow-[0.1em_0.1em] hover:shadow-[0.15em_0.15em] hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] active:shadow-[0.05em_0.05em] active:translate-x-[0.05em] active:translate-y-[0.05em]">
              <span>Hubungi Saya</span>
              <Uil.UilMessage />
            </button>
          </div>
        </section>
        <section className="p-5 min-h-screen mb-10">
          <h2 className="text-2xl text-main-400 font-bold mb-5 uppercase text-center">Tentang Saya</h2>
          <div className="space-y-3 text-justify">
            <p>Halo, saya Fachry, saya sangat senang dalam merancang, mendesain dan membangun sebuah aplikasi.</p>
            <p>Perjalanan saya sebagai developer bermula ketika tahun kedua SMA. Pada saat itu saya mengikuti olimpiade Informatika dan mulai belajar tentang algoritma dan pemrograman menggunakan bahasa pascal. Perasaan senang dan puas saat menyelesaikan sebuah permasalahan dan berhasil meng-implementasikannya menjadi kesenangan tersendiri pada saat itu.</p>
            <p>Selama beberapa tahun ini, saya menemukan hasrat terhadap dunia pengembangan aplikasi terutama website, dan keindahan dalam membangun aplikasi dengan desain yang indah dan bermanfaat.</p>
            <p>Berikut adalah beberapa teknologi yang telah saya gunakan baru-baru ini:</p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 border-2 border-[#efd81d] py-1 px-2 rounded-lg">
                <span className="w-5"><Uil.UilJavaScript color="#efd81d" /></span>
                <span className="text-sm font-semibold">Javascript (ES6+)</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#06b6d4] py-1 px-2 rounded-lg">
                <span className="w-5"><img src="tailwind-css.svg" alt="Tailwind CSS" /></span>
                <span className="text-sm font-semibold">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#61dafb] py-1 px-2 rounded-lg">
                <span className="w-5"><Uil.UilReact color="#61dafb" /></span>
                <span className="text-sm font-semibold">React JS</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#539e43] py-1 px-2 rounded-lg">
                <span className="w-5"><img src="node-js.svg" alt="Tailwind CSS" /></span>
                <span className="text-sm font-semibold">Node JS</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#61dafb] py-1 px-2 rounded-lg">
                <span className="w-5"><Uil.UilReact color="#61dafb" /></span>
                <span className="text-sm font-semibold">React Native</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#ff2d20] py-1 px-2 rounded-lg">
              <span className="w-5"><img src="laravel.svg" alt="Tailwind CSS" /></span>
                <span className="text-sm font-semibold">Laravel</span>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-main-400/25 h-3"></div>
        <div className="bg-main-400/50 h-5"></div>
        <div className="bg-main-400/75 h-8"></div>
        <section className="flex flex-col items-center px-5 py-10 min-h-screen bg-main-400 space-y-5">
          <h2 className="text-2xl font-bold uppercase text-white">Projek Terbaru</h2>
          <div className="grid grid-cols-2 gap-5">
            <a href="https://ssnb.sch.id/">
              <div className="project-tile h-full">
                <img src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_1280.jpg" alt="Project Overview" />
                <div className="p-3">
                  <h3 className="font-bold mb-1">Sekolah Sukma Nusa Bangsa</h3>
                  <p className="text-sm">Website resmi sekolah sukma nusa bangsa.</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="project-tile h-full">
                <img src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_1280.jpg" alt="Project Overview" />
                <div className="p-3">
                  <h3 className="font-bold mb-1">Anigame - Bot Discord</h3>
                  <p className="text-sm">Dibuat menggunakan Node JS, Rest API publik dan Discord JS</p>
                </div>
              </div>
            </a>
            <a href="https://fachiri.github.io/si-kopi-prokopim">
              <div className="project-tile h-full">
                <img src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_1280.jpg" alt="Project Overview" />
                <div className="p-3">
                  <h3 className="font-bold mb-1">Government Website Design</h3>
                  <p className="text-sm">Sistem Komunikasi Pimpinan di Bagian Prokopim.</p>
                </div>
              </div>
            </a>
            <a href="https://fachiri.github.io/design.news-haycab">
              <div className="project-tile h-full">
                <img src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_1280.jpg" alt="Project Overview" />
                <div className="p-3">
                  <h3 className="font-bold mb-1">News Website Design</h3>
                  <p className="text-sm">Design for news website.</p>
                </div>
              </div>
            </a>
            <a href="https://fachiri.github.io/anime-guessing-game">
              <div className="project-tile h-full">
                <img src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_1280.jpg" alt="Project Overview" />
                <div className="p-3">
                  <h3 className="font-bold mb-1">Anime Guessing Game</h3>
                  <p className="text-sm">Simple anime guessing game using public rest api.</p>
                </div>
              </div>
            </a>
            <a href="#">
              <div className="project-tile h-full">
                <img src="https://cdn.pixabay.com/photo/2015/07/28/20/55/tools-864983_1280.jpg" alt="Project Overview" />
                <div className="p-3">
                  <h3 className="font-bold mb-1">Guild Association Webpage</h3>
                  <p className="text-sm">Full native website for managing Rain Guild members.</p>
                </div>
              </div>
            </a>
          </div>
          <button className="flex items-center space-x-2 bg-alt-400 px-5 py-2 font-bold rounded-lg border-[3px] border-black shadow-[0.1em_0.1em] hover:shadow-[0.15em_0.15em] hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] active:shadow-[0.05em_0.05em] active:translate-x-[0.05em] active:translate-y-[0.05em]">
            Lainnya
          </button>
        </section>
        <div className="bg-main-400/75 h-3"></div>
        <div className="bg-main-400/50 h-5"></div>
        <div className="bg-main-400/25 h-8 mb-10"></div>
        <section ref={scollToRef} className="p-5 min-h-screen mb-10">
          <h2 className="text-2xl text-main-400 font-bold mb-5 uppercase text-center">Hubungi Saya</h2>
        </section>
      </main>
    </>
  )
}

export default App
