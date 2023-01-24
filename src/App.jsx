import React, { useRef } from 'react';
import './App.css'
import * as Uis from '@iconscout/react-unicons-solid';
import * as Uil from '@iconscout/react-unicons';

function App() {
  const scollToRef = useRef();

  return (
    <>
      <header className="bg-main-400 sticky top-0 p-5">
        <nav className="max-w-3xl mx-auto flex justify-between items-center text-white">
          <a href="#" className="flex space-x-2 items-center font-poppins font-extrabold">
            <small className="text-alt-400 text-sm">&#60;</small>
            <span className="text-xl">fachiri</span>
            <small className="text-alt-400 text-sm">&#47;&#62;</small>
          </a>
          <div className="flex justify-center items-center space-x-2">
            <button className="font-extrabold border w-6 h-6 rounded">
              ID
            </button>
            <button className="flex justify-center items-center">
              <Uis.UisApps className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>
      <main className="text-slate-800">
        <section className="min-h-[calc(100vh_-_68px)]">
          <div className="bg-main-400 pt-10">
            <div className="flex justify-center md:justify-end max-w-3xl mx-auto">
              <div className="hidden md:block">
                <h1 className="text-xl font-bold mb-1 text-alt-400">Muh. Fachry J.K. Luid</h1>
                <h2 className="text-4xl font-semibold mb-1 text-white">Junior Developer</h2>
                <p className="mb-3 text-justify text-lg text-white">Seorang freelancer yang punya passion di bidang pengembangan perangkat lunak.</p>
                <button onClick={() => scollToRef.current.scrollIntoView({behavior:"smooth"})} className="flex items-center space-x-2 bg-alt-400 px-5 py-2 font-bold text-lg rounded-lg border-[3px] border-black shadow-[0.1em_0.1em] hover:shadow-[0.15em_0.15em] hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] active:shadow-[0.05em_0.05em] active:translate-x-[0.05em] active:translate-y-[0.05em]">
                  <span>Hubungi Saya</span>
                  <Uil.UilEnvelope />
                </button>
              </div>
              <img src="fachry.png" alt="Muh Fachry JK Luid" className="w-[70%] max-w-sm md:float-right" />
            </div>
          </div>
          <div className="px-5 pt-10 md:hidden">
            <h1 className="text-xl text-main-400 font-bold mb-1">Muh. Fachry J.K. Luid</h1>
            <h2 className="text-4xl font-semibold mb-1">Junior Developer</h2>
            <p className="mb-3 text-justify text-lg">Seorang freelancer yang punya passion di bidang pengembangan perangkat lunak.</p>
            <button onClick={() => scollToRef.current.scrollIntoView({behavior:"smooth"})} className="flex items-center space-x-2 bg-alt-400 px-5 py-2 font-bold text-lg rounded-lg border-[3px] border-black shadow-[0.1em_0.1em] hover:shadow-[0.15em_0.15em] hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] active:shadow-[0.05em_0.05em] active:translate-x-[0.05em] active:translate-y-[0.05em]">
              <span>Hubungi Saya</span>
              <Uil.UilEnvelope />
            </button>
          </div>
        </section>
        <section className="p-5 min-h-screen mb-10">
          <div className="max-w-3xl mx-auto">
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
          </div>
        </section>
        <div className="bg-main-400/25 h-3"></div>
        <div className="bg-main-400/50 h-5"></div>
        <div className="bg-main-400/75 h-8"></div>
        <section className="px-5 py-10 min-h-screen bg-main-400">
          <div className="max-w-3xl mx-auto flex flex-col items-center space-y-5">
            <h2 className="text-2xl font-bold uppercase text-white">Projek Terbaru</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
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
          </div>
        </section>
        <div className="bg-main-400/75 h-3"></div>
        <div className="bg-main-400/50 h-5"></div>
        <div className="bg-main-400/25 h-8 mb-10"></div>
        <section ref={scollToRef} className="p-5 pt-[95px] min-h-screen mb-10">
          <div className="max-w-3xl mx-auto flex flex-col space-y-5">
            <h2 className="text-2xl text-main-400 font-bold uppercase text-center">Hubungi Saya</h2>
            <div className="mx-auto">
              <p className="text-center max-w-xl">Inbox saya selalu terbuka. Jika kamu punya pertanyaan atau hanya ingin menyapa, saya akan mencoba yang terbaik untuk menghubungimu kembali!</p>
            </div>
            <div className="flex flex-col space-y-5 text-slate-500 text-base">
              <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
                <div className="relative md:basis-1/2">
                  <input type="text" id="name" className="text-slate-800 block border-2 border-slate-500 px-4 py-3 w-full bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-main-400 peer" placeholder=" " />
                  <label htmlFor="name" className="absolute font-semibold peer-focus:text-base duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-main-400 peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 left-3 flex space-x-2 items-center">
                    <Uil.UilUser size="18" />
                    <span>Nama Lengkap</span>
                  </label>
                </div>
                <div className="relative md:basis-1/2">
                  <input type="email" id="email" className="text-slate-800 block border-2 border-slate-500 px-4 py-3 w-full bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-main-400 peer" placeholder=" " />
                  <label htmlFor="email" className="absolute font-semibold peer-focus:text-base duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-main-400 peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 left-3 flex space-x-2 items-center">
                    <Uil.UilAt size="18" />
                    <span>Email</span>
                  </label>
                </div>
              </div>
              <div className="relative">
                <input type="text" id="subject" className="text-slate-800 block border-2 border-slate-500 px-4 py-3 w-full bg-transparent rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-main-400 peer" placeholder=" " />
                <label htmlFor="subject" className="absolute font-semibold peer-focus:text-base duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-main-400 peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 left-3 flex space-x-2 items-center">
                  <Uil.UilSubject size="18" />
                  <span>Subjek</span>
                </label>
              </div>
              <div className="relative">
                <textarea type="text" id="message" rows="4" className="text-slate-800 block border-2 border-slate-500 w-full bg-transparent rounded-lg appearance-none p-4 focus:outline-none focus:ring-0 focus:border-main-400 peer resize-none" placeholder=" " ></textarea>
                <label htmlFor="message" className="absolute font-semibold peer-focus:text-base duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-main-400 peer-placeholder-shown:scale-90 peer-placeholder-shown:-translate-y-12 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 left-3 flex space-x-2 items-center">
                  <Uil.UilEnvelopeAdd size="18" />
                  <span>Pesan</span>
                </label>
              </div>
              <div className="flex justify-center">
                <button className="flex items-center space-x-2 bg-alt-400 px-5 py-2 font-bold rounded-lg border-[3px] text-black border-black shadow-[0.1em_0.1em] hover:shadow-[0.15em_0.15em] hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] active:shadow-[0.05em_0.05em] active:translate-x-[0.05em] active:translate-y-[0.05em]">
                  <span>Kirim Pesan</span>
                  <Uil.UilMessage />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
