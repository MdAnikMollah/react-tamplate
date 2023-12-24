import React from 'react'
import './service.css'

const Service = () => {
  return (
    <section id="service">
            <div className="container">
                <div className="service_wrapper">
                    <div className="service_items">
                        <picture>
                            <img src="./images/service1.png" alt="Not Found"/>
                        </picture>
                        <h3>Grow your business</h3>
                        <p className="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                    <div className="service_items">
                        <picture>
                            <img src="./images/service2.png" alt="Not Found"/>
                        </picture>
                        <h3>Digital marketing</h3>
                        <p className="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                    <div className="service_items">
                        <picture>
                            <img src="./images/service3.png" alt="Not Found"/>
                        </picture>
                        <h3>Search engine optimization</h3>
                        <p className="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Service