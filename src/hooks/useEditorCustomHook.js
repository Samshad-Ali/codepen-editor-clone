import React, { useState } from "react";

const useEditorCustomHook = () => {
  const [isToggle, setIsToggle] = useState(true);
  const handleToggleBtn=()=>{
      setIsToggle(pre=>!pre)
  }
  return {
    isToggle,
    setIsToggle,
    handleToggleBtn
  };
};

export default useEditorCustomHook;

