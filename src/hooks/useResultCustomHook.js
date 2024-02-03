import React, { useContext, useEffect, useState } from 'react'
import { context } from '../context/ContextWrapper';

const useResultCustomHook = () => {
    const [src,setSrc] = useState('');
    const { html,css, js } = useContext(context);
    const srcCode = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `
    useEffect(()=>{
       const timer = setTimeout(() => {
            setSrc(srcCode)
        }, 1000);
        return()=>{
            clearTimeout(timer)
        }
    },[html,css,js])
    return{
        src
    }
}

export default useResultCustomHook