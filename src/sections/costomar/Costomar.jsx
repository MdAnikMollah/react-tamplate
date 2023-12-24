import React from 'react'
import './costomar.css'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Costomar = () => {
  return (
    <section id="costomar">
            <div className="container">
                <div className="costomar_wrapper">
                    <div className="costomar_info">
                        <div className="company_heading">
                            <h3>Our customer say</h3>
                        </div>
                        <div className="costomar_main">
                            <div className="costomar_item">
                                <img src="./images/costomar item 1.jpg" alt="Not Found"/>
                            </div>
                            <div className="costomar_item">
                                <img src="./images/costomar item 2.jpg" alt="Not Found"/>
                            </div>
                            <div className="costomar_item">
                                <img src="./images/costomar item 3.jpg" alt="Not Found"/>
                            </div>
                            <div className="costomar_item">
                                <img src="./images/costomar item 4.jpg" alt="Not Found"/>
                            </div>
                        </div>
                        <div className="costomar_details">
                            <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                        </div>
                        <div className="costomar_name">
                            <h4>Jonathon</h4>
                            <div className="arrow_main">

                            
                                <div className="arrow_item">
                                    <FaAngleLeft />
                                </div>
                                <div className="arrow_item">
                                <FaAngleRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="costomar_img">
                        <img src="./images/cotomar_item 5 large.jpg" alt="Not Found"/>
                    </div>
                </div>
            </div>
         </section>
  )
}

export default Costomar