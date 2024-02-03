import React, { useContext } from 'react'
import useResultCustomHook from '../hooks/useResultCustomHook';
import { context } from '../context/ContextWrapper';

const Result = () => {
     const {src} = useResultCustomHook();
  return (
    <div className='h-[45vh] w-full'>
      <iframe
      className='w-full h-full'
      srcDoc={src}
      sandbox='allow-scripts'
      title='Code-Output'
      />
    </div>
  )
}

export default Result;