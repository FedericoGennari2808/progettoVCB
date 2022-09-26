import React from 'react'
import './ComunityCards.css'


const ComunityCards = ({imgUrl, date, title}) => {
    return (
        <div className='container_ComunityCards'>
            <div className='container_ComunityCards-image'>
                <img src={imgUrl} alt='blog image'/>
            </div>
            <div className='container_ComunityCards-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                    <a href='/ComunityHome'>Enter NOW!</a>



                    {/* <a href={"../ComunityCards/LargeComunity.js"} > Read More</a> */}
                    {/* <Link to={"../ComunityCards/LargeComunity.js"}>Read More</Link> */}
                </div>
                
            </div>
        </div>
    )
}

export default ComunityCards