import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'
import "../../styles/css/ProductArray.css"

export default function ProductArray() {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        const callBackendAPI = async () => {
          const response = await fetch('http://localhost:8000/gallery')
          const body = await response.json()
          setData(body)
        }
        callBackendAPI()
      }, [])

  return (
    <div className='product-array'>
        <div className="header">
            <h3>Cookies</h3>
        </div>
        <div className="cards-container">
        {data.map((item) => (
            <GalleryCard 
              key={item._id} 
              itemName={item.itemName} 
              image={item.image} 
              imageDescription={item.imageDescription} 
              category={item.category} 
            />
        ))}
        </div>
    </div>
  )
}