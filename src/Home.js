import React from 'react';
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './context';
export default function Home() {
    const {openModal,openSidebar} = useGlobalContext()
    
    return (
       <main>
           <button className='btn-toggle' onClick={openSidebar}>
               <FaBars/>
           </button>
           <button className='btn' onClick={openModal}>
               Show Modal
           </button>
       </main>
    )
}
