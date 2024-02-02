import React from 'react'
import Editor from './Editor'

const EditorWrapper = () => {
  const hanldeChange=()=>{
    
  }
  return (
    <div className='h-[45vh] w-full flex gap-4 bg-black'>
        <Editor
        icon='/'
        title='HTML'
        />
        <Editor
        icon='*'
        title='CSS'
        />
        <Editor
        icon='()'
        title='JS'
        />
    </div>
  )
}

export default EditorWrapper