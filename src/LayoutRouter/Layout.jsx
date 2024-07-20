import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../Components/Pges/Home/Home'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Plans from '../Components/Pges/Plans/Plans'
import Courses from '../Components/Pges/Courses/Courses'
import Abouts from '../Components/Abouts/Abouts'
import Condact from '../Components/Pges/CondactsUs/Condact'
import SupportUs from '../Components/SupportUs/SupportUs'

const Layout = () => {
  return (
    <div>
<Router>
<Header/>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/cousrapp-reactjs' element={<Home/>}/>

<Route path='/plans' element={<Plans/>}/>
<Route path='/coures' element={<Courses/>}/>
<Route path='/abouts' element={<Abouts/>}/>
<Route path='/condactUs' element={<Condact/>}/>
<Route path='/supportUs' element={<SupportUs/>}/>



    </Routes>
<Footer/>
</Router>



    </div>
  )
}

export default Layout