import React from 'react'
import './counter.css'

const Counter = () => {
  return (
    <section id="counter">
            <div className="container">
                <div className="counter_wrapper">

               
                    <div className="counter_main">
                        <div className="counter_item">
                            <h3>19<span>+</span></h3>
                            <p className="paragraph">total top service</p>
                        </div>
                        <div className="counter_item">
                            <h3>27<span>+</span></h3>
                            <p className="paragraph">total top service</p>
                        </div>
                        <div className="counter_item">
                            <h3>98<span>%</span></h3>
                            <p className="paragraph">total top service</p>
                        </div>
                        <div className="counter_item">
                            <h3>1458<span></span></h3>
                            <p className="paragraph">Usual users</p>
                        </div>
                    </div>
                    <div className="counter_content">
                        <h3>The hundred of completed works still counting</h3>
                        <p className="paragraph">With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>
                        <a className="common_btn" href="#">more about us</a>
                    </div>    
            
                </div>
            </div>
            <div className="counter_shape">
                <img src="./images/counter_shape.png" alt="Not Found"/>
            </div>
            <div className="round_2">

            </div>
            </section>
  )
}

export default Counter