import React, { useContext } from "react";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { context } from "../context/ContextWrapper";
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import CodeMirror from 'react-codemirror2';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../styles/editor.css'
const Editor = ({ icon, title }) => {
    const {setIsToggle,isToggle} = useContext(context);
    const handleToggleBtn=()=>{
        setIsToggle(!isToggle)
    }
  return (
    <div className={`${isToggle?null:'flex-grow-0'} flex-grow box-border flex flex-col h-full bg-gray-800`}>
      <div className="h-[5vh] flex items-center justify-between bg-black">
        <p className="flex gap-2 items-center text-white font-semibold bg-gray-800 p-3">
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
      <ControlledEditor
      className='controlled-editor'
      options={{
        mode: 'xml',
        lineNumbers: true
      }}
      />
    </div>
  );
};

export default Editor;
