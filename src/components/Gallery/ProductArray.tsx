import React from 'react'
import "../../styles/css/ProductArray.css"

const image1 = require("../../styles/images/shakti-rajpurohit-qczubsyHofQ-unsplash.jpg")

export default function ProductArray() {
  return (
    <div className='product-array'>
        <div className="header">
            <h3>Cookies</h3>
        </div>
        <div className="cards-container">
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>Chocolate Chip</b></h4> 
                </div>
            </div>
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>Sugar</b></h4> 
                </div>
            </div>
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>Monster</b></h4> 
                </div>
            </div>
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>White Chocolate Oatmeal Macadamia Nut</b></h4> 
                </div>
            </div>
        </div>
        <div className="header">
            <h3>Pastries</h3>
        </div>
        <div className="cards-container">
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>Chocolate Chip</b></h4> 
                </div>
            </div>
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>Sugar</b></h4> 
                </div>
            </div>
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>Monster</b></h4> 
                </div>
            </div>
            <div className="card">
                <img src={image1} alt="delicious cake" />
                <div className="description">
                    <h4><b>White Chocolate Oatmeal Macadamia Nut</b></h4> 
                </div>
            </div>
        </div>
    </div>
  )
}
