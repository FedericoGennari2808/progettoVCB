import React from 'react'
import './Features.css'
import {Feature} from '../../components'

const featuresData = [
    {
        title: 'Go to Get Started and start your exerience ',
        text: 'On Get Started enter your personal and professional data, your data will be registered in a database full of other professionals like you!',
    },
    {
        title: 'Visit our Comunity',
        text: 'In the community you will find the contacts of millions of professionals ready to collaborate with you!',
    },
    {
        title: 'Delete or Modify your V.B.C.',
        text: 'In the "Delete" and "Modify" section, you can whenever you want to delete or modify your contact.',
    },
  
]

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gpt2__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default Features