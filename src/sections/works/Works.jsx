import React from 'react'
import './works.css'

const Works = () => {
  return (
    <section id="works">
    <div className="container">
        <div className="work_wrapper">
            <h4>digital experience</h4>
            <div className="works_test">
                <h3>The hundred of completed works still counting</h3>
                <a className="common_btn" href="#">view all</a>
        </div>  
        </div>
        <div className="work_wrapper_2">
            <div className="work_item">
               <div className="work_img_box">
                <img src="./images/work1.jpg" alt="Not Found"/>

               </div>
               <div className="work_info">
                <h3>mobile app</h3>
                <a href="#">read more</a>
               </div>
            </div>
               <div className="work_item">
                <div className="work_img_box">
                 <img src="./images/ecomace.jpg" alt="Not Found"/>

                </div>
                <div className="work_info">
                 <h3>eCommerce Solution</h3>
                 <a href="#">read more</a>
                </div>
               </div>
                <div className="work_item">
                    <div className="work_img_box">
                     <img src="./images/ecomace.jpg" alt="Not Found"/>

                    </div>
                    <div className="work_info">
                     <h3>eCommerce Solution</h3>
                     <a href="#">read more</a>
                    </div>
                </div>
                    <div className="work_item">
                        <div className="work_img_box">
                         <img src="./images/work1.jpg" alt="Not Found"/>
 
                        </div>
                        <div className="work_info">
                         <h3>mobile app</h3>
                         <a href="#">read more</a>
                        </div>
                    </div>

                </div>
                
            </div>
            
        
        
    
    <div className="work_shape">
        <img src="./images/work_shape.png" alt="Not Found"/>
    </div>

</section>
)
}

export default Works