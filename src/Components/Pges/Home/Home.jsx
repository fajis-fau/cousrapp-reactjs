import React from 'react'
import './Home.css'
import meta from '../../../assets/img/meta.jpeg'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import Courses from '../Courses/Courses'
import Community from '../Community/Community'
import Plans from '../Plans/Plans'
import Abouts from '../../Abouts/Abouts'

const Home = () => {
    const handleClick = () => {
        window.open('', '_blank')
    }
    return (
        <div>
            <section>
                <div className="containor">
                    <div className="home-containor">
                        <div className="home-content">
                            <h2 className='section_title'>Learn Everthing For Free...</h2>
                            <p className='secondaryText'>Mater Trending Technologies With My Works <br />
                                Invest Your Time And Skills</p>
                            <div className="home-btn">
                                <button className='register-btn' onClick={handleClick}>Get Started</button>
                                <button className='register-btn' onClick={handleClick}>Watch Now</button>
                            </div>
                        </div>
                        <div className="home-img">
                            <div className="home-img-wrapper">
                                <div className="box-1">
                                    <div className="box-img">
                                        <img src={meta} alt="" />
                                    </div>
                                </div>
                                <div className="whatssp-containor">
                                    <h5>500 + students</h5>
                                    <AiOutlineWhatsApp />
                                </div>
                                <div className="suppot">
                                    <h5>Active Suppots</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Courses />
            <Community />
            <Plans />
            <Abouts/>
        </div>

    )
}

export default Home