import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

export default function Modal() {
    const {isModalOpen,closeModal} = useGlobalContext()
    return (
        <div className={isModalOpen?'modal show-modal':'modal'}>
            <div className='modal-container'>
                <h3>Modal content</h3>
                <button className='close-modal' onClick={closeModal}>
                    <FaTimes/>
                </button>
            </div>
        </div>
    )
}
