import React from "react";
import { FaCodepen } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaCloud } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" h-[10vh] w-full flex justify-between items-center bg-black text-white p-4">
      <div className="flex items-center gap-4">
        <FaCodepen className="text-4xl" />
        <h1 className="font-bold tracking-wide text-xl">Codepen Clone</h1>
      </div>
      <div className="flex gap-4">
        <button className="flex gap-2 p-4 rounded-md items-center text-xl bg-gray-700 hover:bg-gray-600">
          <FaCloud className="text-3xl" />
          Save
        </button>
        <button className="flex gap-2 p-4 rounded-md items-center text-xl bg-gray-700 hover:bg-gray-600">
          <IoIosSettings className="text-3xl" />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Header;
