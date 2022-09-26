
import React, { useState } from 'react';
import './Modify.css'
import ModifyModal from './ModifyModal';
import DeleteModal from './DeleteModal';
import cestino from '../immagini/cestino.png'
import pen from '../immagini/pen.png'

export default function Modify() {
    const [openModalDlt, setOpenModalDlt] = useState(false);
    const [openModalMdf, setOpenModalMdf] = useState(false);

    return (
        <>
            
                <div>
                    <button className='modalBtnDlt' onClick={() => setOpenModalDlt(true)}>Delete Card</button>
                    <img className='garbage' src={cestino} alt=''/>
                    <DeleteModal open={openModalDlt} onClose={() => setOpenModalDlt(false)} />                   
                </div>
                <div>
                    <button className='modalBtnMdf' onClick={() => setOpenModalMdf(true)}>Modify Card</button>
                    <img className='pen' src={pen} alt=''/>
                    <ModifyModal open={openModalMdf} onClose={() => setOpenModalMdf(false)} />
                </div>

        </>

    )
}