import React from 'react'
import Editor from './Editor'

const EditorWrapper = () => {
  return (
    <div className='h-[45vh] w-full flex bg-black'>
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