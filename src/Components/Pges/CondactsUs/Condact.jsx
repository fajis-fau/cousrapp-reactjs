import React from 'react'
import './Condact.css'

const Condact = () => {
  return (
  <div className="containor">
    <div className="condactus-containor">
        <h1>Contact Us</h1>
        <p>
            We,d love to hear from you, please fill out the 
            form below or reach out
            to us using the contact detials provides.
        </p>
        <form className='contact-form'>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"  id='name' name='name' required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id='email'  name='email' required/>
            </div>
            <div className="form-group">
                <label htmlFor="massage">Massage</label>
                <textarea type="massage" id='massage'  name='massage' rows='5' required/>
            </div>
            <button type='submit' className='submit-btn'>Submit</button>


        </form>
    </div>
  </div>
  )
}

export default Condact