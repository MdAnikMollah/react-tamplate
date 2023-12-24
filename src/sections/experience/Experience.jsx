import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
            <div className="container">
                <div className="heading_group">
                    <h4 className="sub_heading">digital experience</h4>
                    <h3 className="heading">Connect people in digital life</h3>
                </div>
            </div>
            <div className="experience_wrapper">
                <div className="experience_img">
                    <div className="experience_img_box">
                        <img src="./images/experience_img.jpg" alt="Not Found"/>
                    </div>
                </div>
                <div className="experience_content">
                    <h3>More than just an ad agency, we harness the tools of traditional and digital.</h3>
                    <p className="paragraph">With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
                    <a className="common_btn" href="#">more about us</a>
                    <div className="experience_shape">
                        <img src="./images/Experience_icon.png" alt="Not Found"/>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Experience