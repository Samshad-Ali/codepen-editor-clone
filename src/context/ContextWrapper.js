import React, { createContext, useState } from 'react'
import { useEffect } from 'react';

export const context = createContext();
function ContextWrapper({children}) {
    const [html,sethtml] = useState(localStorage.getItem('html') || '');
    const [css,setcss] = useState(localStorage.getItem('css') || '');
    const [js,setjs] = useState(localStorage.getItem('js') || '');
    useEffect(()=>{
      localStorage.setItem('html',html);
      localStorage.setItem('css',css);
      JSON.stringify(localStorage.setItem('js',js));
    },[css,html,js])
  return (
    <context.Provider
    value={{
        html,sethtml,
        css,setcss,
        js,setjs
    }}
    >
        {children}
    </context.Provider>
  )
}

export default ContextWrapper