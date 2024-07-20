import React from 'react'
import './Abouts.css'
import miya from '../../../src/assets/img/miya.jpg'

const Abouts = () => {
    return (
        <div className="containor">
            <div className="abouts-containor">
                <div className="team-member">
                    <h2>Our Team</h2>
                    <div className="members-card">
                        <img src={miya} alt="" className='member-img' />
                        <h3 className='member-name'>Miya Helin</h3>
                        <p className='member-rol'>Co-Founder</p>
                    </div>
                </div>
                <div className="abouts-dec">
                    <h1 className='aboutus-heading'>About Us</h1>
                    <p>
                        With a passion for empowring learners of ages, our mission
                        it to make education accessible, engaging and personalized
                        through our cutting-edge education technology platform
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Abouts