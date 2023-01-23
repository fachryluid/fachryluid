import './App.css'
import * as Uis from '@iconscout/react-unicons-solid';
import * as Uil from '@iconscout/react-unicons';

function App() {

  return (
    <div className="App">
      <header className="bg-main-400">
        <nav className="flex justify-between items-center text-white p-5">
          <a href="#" className="flex space-x-2 items-center font-poppins font-extrabold">
            <small className="text-alt-400 text-sm">&#60;</small>
            <span className="text-xl">fachiri</span>
            <small className="text-alt-400 text-sm">&#47;&#62;</small>
          </a>
          <div className="flex justify-center items-start space-x-2">
            <button className="w-[1.4rem]">
              <img src="src/assets/id.png" alt="Indonesian Flag" className="w-full p-[0.1rem]" />
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
            <img src="src/assets/fachry.png" alt="Muh Fachry JK Luid" className="w-[70%]" />
          </div>
          <div className="px-5 pt-10">
            <h1 className="text-xl text-main-400 font-bold mb-1">Muh. Fachry J.K. Luid</h1>
            <h2 className="text-4xl font-semibold mb-3">Junior Developer</h2>
            <p className="mb-3 font-semibold">Seorang <i>Freelancer</i> yang punya <i>passion</i> di bidang pengembangan perangkat lunak.</p>
            <button className="flex items-center space-x-2 bg-alt-400 px-5 py-2 font-bold text-lg rounded-lg border-[3px] border-black shadow-[0.1em_0.1em] hover:shadow-[0.15em_0.15em] hover:translate-x-[-0.05em] hover:translate-y-[-0.05em] active:shadow-[0.05em_0.05em] active:translate-x-[0.05em] active:translate-y-[0.05em]">
              <span>Hubungi Saya</span>
              <Uil.UilMessage />
            </button>
          </div>
        </section>
        <section className="p-5 min-h-screen">
          <h2 className="text-2xl text-main-400 font-bold mb-3">Tentang Saya</h2>
          <div className="space-y-3">
            <p>Halo, saya Fachry, saya sangat senang dalam merancang, mendesain dan membangun sebuah aplikasi.</p>
            <p>Perjalanan saya sebagai developer bermula ketika tahun kedua SMA. Pada saat itu saya mengikuti olimpiade Informatika dan mulai belajar tentang algoritma dan pemrograman menggunakan bahasa pascal. Perasaan senang dan puas saat menyelesaikan sebuah permasalahan dan berhasil mengimplementasikannya menjadi kesenangan tersendiri pada saat itu.</p>
            <p>Selama beberapa tahun ini, saya menemukan hasrat terhadap dunia pengembangan aplikasi terutama website, dan keindahan dalam membangun aplikasi dengan desain yang indah dan bermanfaat.</p>
            <p>Berikut adalah beberapa teknologi yang telah saya gunakan baru-baru ini:</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 border-2 border-[#efd81d] p-1 rounded-lg">
                <span className="w-5"><Uil.UilJavaScript color="#efd81d" /></span>
                <span>Javascript (ES6+)</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#06b6d4] p-1 rounded-lg">
                <span className="w-5"><img src="src/assets/tailwind-css.svg" alt="Tailwind CSS" /></span>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#61dafb] p-1 rounded-lg">
                <span className="w-5"><Uil.UilReact color="#61dafb" /></span>
                <span>React JS</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#539e43] p-1 rounded-lg">
                <span className="w-5"><img src="src/assets/node-js.svg" alt="Tailwind CSS" /></span>
                <span>Node JS</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#61dafb] p-1 rounded-lg">
                <span className="w-5"><Uil.UilReact color="#61dafb" /></span>
                <span>React Native</span>
              </div>
              <div className="flex items-center space-x-2 border-2 border-[#ff2d20] p-1 rounded-lg">
              <span className="w-5"><img src="src/assets/laravel.svg" alt="Tailwind CSS" /></span>
                <span>Laravel</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
