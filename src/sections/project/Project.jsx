import React from 'react'
import './project.css'

const Project = () => {
  return (
    <section id="project">
            <div className="container">
                <div className="project_wrapper">
                    <div>
                        <h5>Lets talk</h5>
                        <h3>Got a project?</h3>
                    </div>
                    <a className="common_btn" href="#">contact us</a>
                </div>
                <article>
                    <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                </article>
                <div className="project_shape">
                    <img src="./images/project_shape.png" alt="Not Found"/>
                </div>
            </div>

         </section>
  )
}

export default Project