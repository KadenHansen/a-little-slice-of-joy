import React from 'react'
import '../../styles/css/ProductTab.css'

interface Service {
  title: string, 
  image: string, 
  description: string, 
}

export default function ProductTab(props: Service): JSX.Element {
  return (
    <div className='product-tab'>
      <div className="service-image">
        <img src={props.image} alt="a variety of a dozen cookies stacked in a small white box"/>
      </div>
      <div className="info">
          <h2>{props.title}</h2>
          <p>
              {props.description}
          </p>
      </div>
    </div>
  )
}
