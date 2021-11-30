import React from 'react'
import { FaTimes } from 'react-icons/fa'
import logo from './logo.svg'
import {links,socials} from './data'
import { useGlobalContext } from './context'

export default function Sidebar() {
    const {closeSidebar,isSidebarOpen} = useGlobalContext()
    return (
        <aside className={isSidebarOpen?'sidebar show-sidebar' : 'sidebar'}>
           <section className='sidebar-header'>
               <img src={logo} alt='logo'></img>
               <button className='icon' onClick={closeSidebar}><FaTimes /></button>
           </section>
           <section className='links-container'>
               <ul className='links'>
                    {links.map(link=>{
                        const{id,url,text,icon} = link
                        return(
                            <li key={id} className='link'>
                                <a href={url}>
                                    {icon}
                                    {text}
                                    </a>
                            </li>
                        )
                    })}
                </ul>
           </section>
          
               <ul className='socials'>
                   {socials.map(social=>{
                       const{id,url,icon} = social
                       return(
                           <li key={id} className='social'>
                               <a href={url}>{icon}</a>
                           </li>
                       )
                   })}
               </ul>
           
        </aside>
    )
}
