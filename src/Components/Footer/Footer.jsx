import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    const handleClick =()=>{
        window.scrollTo(0,0);
    }
    return (
        <div className="footer">
            <div className="cantainor">
                <div className="wrapper">
                    <div className="flex1">
                        <div className="logo">
                            <div className="logo-img">
                                <img src={footer} alt="" />
                            </div>
                            <span className='secondaryText my-name'>My Personal Work</span>
                        </div>
                        <span className='footer-p'>Embrace the future of innovation and tachnology with our cutting-edge tech business solution</span>

                    </div>
                    <div className="flex2">
                        <span className='primaryText footer-title'>Company</span>
                        <ul className='footer-link'>
                            <li> <a href="">Our Programs</a></li>
                            <li> <a href="">Our Planing</a></li>
                            <li><a href=''>Become a Member</a></li>
                        </ul>
                    </div>
                    <div className="flex3 ">
                        <span className='footer-title primaryText'>Quick Links</span>
                        <ul className='quik-link'>
                            <li> <Link to='/abouts' onClick={handleClick}>About us</Link></li>
                            <li> <Link to='/condactUs' onClick={handleClick}>Condact us</Link></li>
                            <li> <Link to='/supportUs' onClick={handleClick}>Support us</Link></li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer