import './ModifyModal.css'
import card from '../immagini/3cards.jpeg'

const ModifyModal = ({ open, onClose }) => {
    if (!open) return null

    return (
        <div className='overlayMdf'>
            <div className='modalMdfContainer'>
                <img src={card} alt="" />
                <div className='modalRightMdf'>
                    <p className='closeBtnMdf' onClick={onClose}>X</p>
                    <div className='contentMdf'>
                        <p> Do you want modify your card?</p>
                        <h1> update your information. </h1>

                    </div>
                    <div className='inputText'>
                    <form>
                        <label>
                         Name:
                            <input type="text" name="Name" />
                        </label>
                        <label>
                        Surname:
                            <input type="text" name="Surname" />
                        </label>
                    </form>
                    
                    <form>
                    <label>
                    Date Of Birth:
                            <input type="text" name="Dateofbirth" />
                        </label>
                        <label>
                    Job Title:
                            <input type="text" name="JobTitle" />
                        </label>
                         
                    </form>
                    <form>
                    <label>
                    Phone Number:
                            <input type="text" name="PhoneNumber" />
                        </label>
                        
                         
                    </form>
                    <form>
                    <label>
                    Web Site:
                            <input type="text" name="WebSite" />
                        </label>
                    </form>
                    </div>
                    <div className='btnContainerMdf'>
                        <button className='btnPrimaryMdf'>
                            <span className='bold'>SAVE</span>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModifyModal
