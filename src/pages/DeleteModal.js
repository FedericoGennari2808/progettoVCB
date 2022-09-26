import './Delete.css'
import card from '../immagini/3cards.jpeg'
import {useState} from 'react'

export const DeleteModal = ({ open, onClose}) => {
    const [id, setId] = useState('');

    const handleChangeId = (event) => {
        setId(event.target.value)
    }

    fetch('http://localhost:8080/businesscards/deleteuser/' + id, {
    method: "DELETE",
    mode: 'cors',
    headers: {
        'Content-type': 'application/json'
    }
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

    if (!open) return null

    return (
        <div className='overlayDlt' >
            <div className='modalDltContainer'>
                <img src={card} alt="" />
                <div className='modalRightDlt'>
                    <p className='closeBtnDlt' onClick={onClose}>X</p>
                    <div className='contentDlt'>
                        <p> Do you want delete your card?</p>
                        <h1> If you are sure, press yes. </h1>
                        <div>
                        <label>
                            Post Name:
                            <textarea type="" name="name" value={setId} onChange={handleChangeId} />
                        </label>
                        </div>

                    </div>
                    <div className='btnContainerDlt'>

                        <button className='btnPrimaryDlt'>
                            <span className='bold'>YES</span>
                        </button>
                        <button className='btnOutlineDlt' onClick={onClose}>
                            <span className='bold'>NO</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal