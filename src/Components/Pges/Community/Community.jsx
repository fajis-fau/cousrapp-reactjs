import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'

const Community = () => {
    const handleCliker =()=>{
        window.open('','_blank')
    }
  return (
    <div className="containor">
        <div className="start-wrapper">
            <div className="star-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
<h2 className='section_title'>Join Our Free Community</h2>
<p>Unlock the power of knowledge and innovaton by joining our vibrant and free whatspp my community</p>
<button className="register-btn" onClick={handleCliker}>Join</button>
            </div>
        </div>
    </div>
  )
}

export default Community