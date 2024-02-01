import React, { createContext, useState } from 'react'

export const context = createContext();
function ContextWrapper({children}) {
    const [isToggle,setIsToggle] = useState(false)
  return (
    <context.Provider
    value={{
        isToggle,setIsToggle
    }}
    >
        {children}
    </context.Provider>
  )
}

export default ContextWrapper