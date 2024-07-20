import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import dg from '../../../assets/img/dg.png'
import sd from '../../../assets/img/sd.png'
import hacking from '../../../assets/img/hacking.png'

const Courses = () => {
    const courseData = [{
        title: 'Ai Development',
        decs: 'Master Ai Development',
        image: ai,
    },
    {
        title: 'Digital Marketing',
        decs: 'Master Ai Digital Marketing',
        image: dg,
    },
    {
        title: 'Softwere Developer',
        decs: 'Master Softwewre Development',
        image: sd,
    },
    {
        title: 'Hethical Haking',
        decs: 'Master Haking',
        image: hacking,
    }
    ]
    return (
        <div className="containor containor-c">
            <div className="course-top">
                <h2 className='section_title'>Our Free Courses</h2>
                <p>THE TOP TRENDING FREE COURSES WITH FREE CERTIFICATE</p>
                <div className="COURSE-WRAPPER">
                    {
                        courseData.map((course, i) => (
                            <div className="course-item" key={i}>
                                <span className="corse-icon">
                                    <img src={course.image} alt="" />
                                </span>
                                <div className="course-content">
                                    <h4>{course.title}</h4>
                                    <p>{course.decs}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Courses