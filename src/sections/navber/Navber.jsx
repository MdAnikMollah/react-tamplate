import React from 'react'
import './navber.css'

const Navber = () => {
  return (
    <nav>
    <div className="container">
        <div className="nav_wrapper">
            <div className="logo">
                <a href="#">
                <img src="./images/Logo.png" alt="not found"/>
                
                </a>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#">Home <i class="fa-solid fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#">About <i class="fa-solid fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#">Service <i class="fa-solid fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#">Protfolio <i class="fa-solid fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#">Price <i class="fa-solid fa-angle-down"></i></a>
                    </li>
                    <li>
                        <a href="#">Blog<i class="fa-solid fa-angle-down"></i></a>
                    </li>
                </ul>
            </div>
            <div className="nav_btn"></div>
            <a className="common_btn" href="#">contact us</a>
        </div>
    </div>


</nav>
  )
}

export default Navber