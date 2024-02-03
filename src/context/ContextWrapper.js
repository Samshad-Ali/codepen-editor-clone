import React, { createContext, useState } from 'react'

export const context = createContext();
function ContextWrapper({children}) {
    const [html,sethtml] = useState('');
    const [css,setcss] = useState('');
    const [js,setjs] = useState('');

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