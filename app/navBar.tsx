import React from 'react';
import Link from 'next/link';
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center space-x-6 p-6 bg-gray-100 border-b">
      <Link className='' href="/"><FaBug/></Link>
      <h1 className="!text-red-500 text-2xl">Issue-Tracker</h1>

      <ul className="flex items-center space-x-8 text-black">
        <li ><Link className='text-zinc-500 hover:text-black transition-colors' href="/dashboard">Dashboard</Link></li>
        <li><Link className='text-zinc-500 hover:text-black transition-colors' href="/issues">Issues</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
