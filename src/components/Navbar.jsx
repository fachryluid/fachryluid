import * as Uis from '@iconscout/react-unicons-solid';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-main-400 sticky top-0 p-5">
      <nav className="max-w-3xl mx-auto flex justify-between items-center text-white">
        <Link to="/" className="flex space-x-2 items-center font-poppins font-extrabold">
          <small className="text-alt-400 text-sm">&#60;</small>
          <span className="text-xl">FachryLuid</span>
          <small className="text-alt-400 text-sm">&#47;&#62;</small>
        </Link>
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
  )
}