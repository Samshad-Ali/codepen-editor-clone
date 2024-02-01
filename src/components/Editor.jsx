import React, { useContext } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { context } from "../context/ContextWrapper";

const Editor = ({ icon, title }) => {
    const {setIsToggle,isToggle} = useContext(context)
    const handleToggleBtn=()=>{
        setIsToggle(!isToggle)
    }
  return (
    <div className={`${isToggle?'w[[20%':'w-full'} h-full border bg-gray-800`}>
      <div className="flex items-center justify-between bg-black">
        <p className="flex gap-2 items-center text-gray-400 font-semibold bg-gray-800 p-4">
          <span className="rounded-md text-xl bg-yellow-300 grid place-items-center text-black h-7 w-7">
            {icon}
          </span>
          {title}
        </p>
        <button
        onClick={handleToggleBtn}
        className="text-2xl p-4 text-white">
          <CgArrowsExpandLeft />
        </button>
      </div>
      <iframe 
      title="title"
      />
    </div>
  );
};

export default Editor;
