import React, { useContext } from 'react'
import Editor from './Editor'
import { context } from '../context/ContextWrapper';

const EditorWrapper = () => {
  const { html, sethtml, css, setcss, js, setjs } = useContext(context);
  return (
    <div className='h-[45vh] w-full flex gap-4 bg-gray-800'>
        <Editor
        icon='/'
        title='HTML'
        color='bg-red-500'
        value={html}
        setValue={sethtml}
        />
        <Editor
        icon='*'
        title='CSS'
        color='bg-cyan-500'
         value={css}
         setValue={setcss}
        />
        <Editor
        icon='()'
        title='JS'
        color='bg-yellow-500'
        value={js}
        setValue={setjs}
        />
    </div>
  )
}

export default EditorWrapper