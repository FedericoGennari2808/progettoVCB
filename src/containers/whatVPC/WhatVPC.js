import React from 'react'
import Feature from '../../components/feature/Feature'
import './WhatVPC.css'

const WhatVPC = () => {
    return(
        <div className='gpt3__WhatVPC section__margin' id='WhatVBC'>
            <div className='gpt3__whatVPC-feature'>
                <Feature title="What is VBC" text="Talking to my friends, the problem of business cards came up, they're made of paper, they're uncomfortable, and we often forget them on the bedside table at home.
At that moment the idea of ​​the Virtual Business Card was born!"/>
            </div>
            <div className='gpt3__whatVPC-heading'>
                <h1 className='gradient__text'>Why V.B.C.?</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3__whatVPC-container'>
                <Feature title="Less Paper" text="Paper consumption is a current problem, saving on paper is good for our future." />
                <Feature title="Money" text="Save on printing your usual business cards, create a new one whenever you want!"/>
                <Feature title="Sharing" text="Register on our community and share your contact all over the world!"/>
            </div>
        </div>
    )
} 

export default WhatVPC 