import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50  grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      <div className="relative flex h-8 items-center cursor-pointer my-auto ">
        <Image
          src="https://i.ibb.co/cNvSydB/Airbnb-Logo-B-lo-svg.webp"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full  py-2 md:shadow-lg ">
        <input
          type="text"
          placeholder="Start your search"
          className=" flex-grow pl-2 bg-transparent outline-none text-xs text-black placeholder-black w-10 "
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-[#FF385C] text-white rounded-full p-2 cursor-pointer md:mx-2  " />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center border-2 rounded-full p-2 space-x-2">
          <MenuIcon className="h-6 cursor-pointer " />
          <UserCircleIcon className="h-6 cursor-pointer " />
        </div>
      </div>
    </header>
  );
}

export default Header;
