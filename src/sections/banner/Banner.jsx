import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
        <div className="banner_content">
            <h1>We are a full range design agency</h1>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
            <div className="banner_btn">
                <a className="common_btn" href="#">contact us</a>
                <a className="common_btn" href="#">showcase</a>


            </div>
            <div className="shape_4">
                <img src="./images/banner_shape2 edit.png" alt="Not Found"/>
            </div>
            </div>
           
        </div>
       
      <div className="round_1">

      </div>
     
        <div className="shape_1">
        <img src="./images/banner_shape 1.png" alt="Not Found"/>
        </div>
        <div className="shape_2">
            <img src="./images/banner_shape4.png" alt="Not Found"/>
        </div>
        <div className="shape_3">
            <img src="./images/banner_shape3.png" alt="Not Found"/>
        </div>
        <div className="shape_5">
            <img src="./images/banner_shape5.png" alt="Not Found"/>
        </div>
        <div className="shape_7">
            <img src="./images/banner_shape_7.png" alt="Not Found"/>
            </div>
        
      </section>
  )
}

export default Banner