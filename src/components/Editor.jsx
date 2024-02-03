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
import useEditorCustomHook from "../hooks/useEditorCustomHook";
const Editor = ({ icon, title,color,value,setValue}) => {
   const {handleToggleBtn,isToggle} = useEditorCustomHook();
  return (
    <div className={`${isToggle?null:'flex-grow-0'} flex-grow box-border flex flex-col h-full bg-gray-800`}>
      <div className="h-[5vh] flex items-center justify-between bg-black">
        <p className="flex gap-2 items-center text-white font-semibold bg-gray-800 p-1">
          <span className={` ${color} rounded-md grid place-items-center text-black h-6 w-6`}>
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
      value={value}
      onBeforeChange={(editor,data,value)=>{setValue(value)}}
      options={{
        mode: 'xml',
        lineNumbers: true,
        lineWrapping: true,
        lineBreakAnywhere: true, 
      }}
      />
    </div>
  );
};

export default Editor;
