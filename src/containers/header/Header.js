import React from 'react'
import './Header.css'
import ai from '../../assets/Header Illustration.png'

import logo  from '/Users/gennarifederico/Desktop/ProgettoEsame/layout-app/src/assets/logoVBC2.png'


const Header = () => {


    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Create your Virtual Business Card with VBC app! </h1>
                <p>Less paper, more money in your pocket! <br></br> Choose your design, enter your personal and professional information and share your business card all over the world! </p>       
            </div>
            <div className='gpt3__header-image'>
                <img src={logo} alt='logo' />
            </div>
        </div>

    )
}

export default Header 