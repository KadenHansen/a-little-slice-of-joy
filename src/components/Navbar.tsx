import React from "react";
import { Link } from "react-router-dom";
import '../styles/css/Navbar.css'

const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
  e.preventDefault()
  const navbar = document.querySelector(".navbar") as HTMLElement
  navbar.querySelector(".active")!.classList.remove("active");
  (e.target as HTMLElement).closest(".icon-set")!.classList.add("active")
}

const logo = require('../styles/images/sliceOfJoyLogoWords.png')

export default function Navbar(): JSX.Element {
    return (
        <nav className="navbar">
          <ul>
            <li className="icon-set active" onClick={handleClick}>
              <Link to="/" >
                <i className='bx bxs-home-heart icon'></i>
                <p>Home</p>
              </Link>
            </li>
            <li className="icon-set" onClick={handleClick}>
              <Link to="/gallery">
                <i className='bx bxs-cookie icon' ></i>
                <p>Gallery</p>
              </Link>
            </li>
            <li>
              <img src={logo}/>
            </li>
            <li className="icon-set" onClick={handleClick}>
              <Link to="/contact">
                <i className='bx bxs-heart icon' ></i>
                <p>Contact</p>
              </Link>
            </li>
            <li className="icon-set" onClick={handleClick}>
              <Link to="/cart">
                <i className='bx bxs-cart icon' ></i>
                <p>Cart</p>
              </Link>
            </li>            
          </ul>
        </nav>
    )
}