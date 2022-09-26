import './NewCard.css'
import React from 'react'
import { useState } from 'react'

const NewCard = ({ open, onClose }) => {


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const [phnnum, setPhnnum] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [image, setImage] = useState('');

    if (!open) return null

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeSurname = (event) => {
        setSurname(event.target.value)
    }
    const handleChangeDateofbirth = (event) => {
        setDateofbirth(event.target.value)
    }
    const handleChangeJobTitle = (event) => {
        setJobtitle(event.target.value)
    }
    const handleChangePhnnum = (event) => {
        setPhnnum(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const handleChangeWebsite = (event) => {
        setWebsite(event.target.value)
    }
    const handleChangeImage = (event) => {
        setImage(event.target.value)
    }
    const add = () => {

        fetch(`http://localhost:8080/businesscards/newuser`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    name: name,
                    surname: surname,
                    dateofbirth: dateofbirth,
                    jobtitle: jobtitle,
                    phnnum: Number(phnnum),
                    email: email,
                    website: website,
                    image: image,
                }
            ),
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className='overlayNA'>
            <div className='modalNAContainer'>
                <div className='modalRightNA'>
                    <p className='closeBtnNA' onClick={onClose}>X</p>
                    <div className='contentNA'>
                        <h1>Create your card!</h1>
                        <p> Insert here your information to create data for your Virtual Business Card. </p>

                    </div>
                    <div className='inputTextNA'>

                        <label>
                            Name:
                            <input type="text" name="name" value={name} onChange={handleChangeName} />
                        </label>
                        <label>
                            Surname:
                            <input type="text" name="surname" value={surname} onChange={handleChangeSurname} />
                        </label>
                        <label>
                            Age:
                            <input type="text" name="dateofbirth" value={dateofbirth} onChange={handleChangeDateofbirth} />
                        </label>
                        <label>
                            Profession:
                            <input type="text" name="jobtitle" value={jobtitle} onChange={handleChangeJobTitle} />
                        </label>
                        <label>
                            Phone Number:
                            <input type="text" name="phnnum" value={phnnum} onChange={handleChangePhnnum} />
                        </label>
                        <label>
                            Email:
                            <input type="text" name="email" value={email} onChange={handleChangeEmail} />
                        </label>
                        <label>
                            Website:
                            <input type="text" name="website" value={website} onChange={handleChangeWebsite} />
                        </label>
                        <label>
                            Image:
                            <input type="text" name="image" value={image} onChange={handleChangeImage} />

                        </label>
                        {/* <button onClick={add} type="button">Add</button> */}
                    </div>
                    <div className='btnContainerNA'>
                        <button className='btnPrimaryNA' onClick={add} >
                            <span className='boldNA'>SAVE</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>
    )
}
export default NewCard
