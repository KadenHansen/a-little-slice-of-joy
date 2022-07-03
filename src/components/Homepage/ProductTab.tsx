import React from 'react'
import '../../styles/css/ProductTab.css'

const img = require('../../styles/images/joshua-sukoff--4FxVVpIMyw-unsplash.jpg')

export default function ProductTab(): JSX.Element {
  return (
    <div className='product-tab'>
        <img src={img} alt="a variety of a dozen cookies stacked in a small white box"/>
        <div className="info">
            <h2>Boxes of Cookies</h2>
            <p>
                Order from our wide variety of cookie flavors that'll put a smile on anyone's face! 
                Bring them to your next party or business meeting. With over 40 flavor options and your chance to request any others, you know you'll have something for everyone at the table!
            </p>
        </div>
    </div>
  )
}
