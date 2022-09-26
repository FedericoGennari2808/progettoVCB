
import React from 'react'
import './Comunity.css'
import ComunityCards from './ComunityCards/ComunityCards'
import {card7} from '/Users/gennarifederico/Desktop/ProgettoEsame/layout-app/src/pages/ComunityCards/importsIMG.js'


const Comunity = () => {
    return (
        <div className='container__Com section__padding' id=''>
            <div className='container__Com-heading'>
                <h1 className='title'>This is our Comunity, enjoy!</h1>
            </div>
            <div className='container__Com-container'>
                
                {/* <div className='container__Com-container_groupB'> */}
                    <ComunityCards imgUrl={card7} date='sep 26, 2022' title='In this section you can find millions of PROFESSIONALS from all over the world.' />
                    {/* <ComunityCards imgUrl={card3} date='sep 26, 2022' title='In this section you can find millions of ARTIST from all over the world.' /> */}
                {/* </div> */}
            </div>
        </div>
    )
}

export default Comunity