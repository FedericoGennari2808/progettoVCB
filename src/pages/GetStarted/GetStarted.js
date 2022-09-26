import { useState } from "react";
// import Editor from "./Editor"
import NewCard from "./NewCard"
import './GetStarted.css'
import imageBackground from '/Users/gennarifederico/Desktop/ProgettoEsame/layout-app/src/assets/My project-2.jpg'



const GetStarted = () => {
  const [openModalNA, setOpenModalNA] = useState(false);


  return (
    <div className="containerGetStarted">
    <img src={imageBackground} alt=""/>
      <div className="containerModalNA">
        <button className='modalBtnNA' onClick={() => setOpenModalNA(true)}>New Card</button>
        <NewCard open={openModalNA} onClose={() => setOpenModalNA(false)} />
      </div>
      {/* <div className="containerEdt">
        <Editor />
      </div> */}
    </div>
  )
}
export default GetStarted