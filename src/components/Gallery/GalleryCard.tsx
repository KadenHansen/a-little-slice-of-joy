import React from 'react'
import '../../styles/css/GalleryCard.css'

interface MenuItem {
    itemName: string, 
    image: string, 
    imageDescription: string, 
    category: string
}

export default function GalleryCard(props: MenuItem) {
  return (
    <div className="gallery-card">
        <img src={props.image} alt={props.imageDescription} />
        <div className="description">
            <h4><b>{props.itemName}</b></h4> 
        </div>
    </div>
  )
}
