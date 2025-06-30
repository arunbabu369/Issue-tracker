'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaBug } from "react-icons/fa";

const NavBar = () => {
    const currentPath=usePathname()

    const links=[
        {label:'dashboard', href:'/'},
        {label:'issues' ,href:'/issues'}
    ]

  return (
    <nav className="flex items-center space-x-6 p-6 bg-gray-100 border-b">
      <Link className='' href="/"><FaBug/></Link>
      <h1 className="!text-red-500 text-2xl">Issue-Tracker</h1>

      <ul className="flex items-center space-x-8 text-black">
        {links.map(link => ( 
                    <Link
                        key={link.href}
                        className={`${
                            link.href === currentPath? 'text-zinc-900': 'text-zinc-500'
                        } hover:text-zinc-800 transition-colors`} 
                        href={link.href}
                    >
                        {link.label}
                    </Link>
                ))}
                </ul>
    </nav>
  );
};

export default NavBar;
