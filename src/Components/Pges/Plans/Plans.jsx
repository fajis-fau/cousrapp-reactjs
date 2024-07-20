import React from 'react'
import './Plans.css'
import { plansData } from '../../../assets/plansData';

const Plans = () => {
  return (
   <div className="containor">
    <div className="pricing-top">
        <h2>Primium Pricing Plan</h2>
        <p>Unlock elite tech services with our premium pricing plan and soar ahead of the competition</p>
    </div>
    <div className="pricing-wrapper">
        {plansData.map((plansItem,i)=>(
            <div className="pricing-item" key={i}>
<div className="pricing-card-top" style={{background: plansData.color}}>
    <h2>{plansItem.title}</h2>
    <h2>{plansItem.price} <span>{plansItem.duration}</span></h2>
</div>
<div className="services">
    <ul>
        {plansItem.features.map((feature,i)=> (
            <li className='feature' key={i}>{feature}</li>
        ))}
    </ul>
    <button className="register-btn btn " style={{justifyContent:'center'}}>Join</button>
</div>
            </div>
        ))}
    </div>
   </div>
  )
};

export default Plans