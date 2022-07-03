import React from 'react'
import '../../styles/css/LandingBanner.css'

const image = require('../../styles/images/sera-iZgQKxuMRHc-unsplash.jpg')

export default function LandingBanner() {
  return (
    <div className='landing-banner'>
        <img src={image} alt='A delicious array of desserts displayed on glass store-front shelves'/>
        <div className='greeting'>
            <h1>A Little Slice of Joy</h1>
            <p>
                The perfect solution to all your dessert needs! 
                Whether you need sweets for a massive venue, a small business meeting, or anything in between, A Little Slice of Joy is your solution.
                Tarts, cakes, pastries and more, you will find the option you love. 
                With vegan and gluten free options for almost every dessert, dietary restrictions can't get in the way of your delicious treats!
            </p>
        </div>
    </div>
  )
}
