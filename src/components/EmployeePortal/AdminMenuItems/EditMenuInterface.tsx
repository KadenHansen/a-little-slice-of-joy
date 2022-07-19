import React, { useState, useEffect } from "react"
import AdminMenuEdit from "./AdminMenuEdit"

export default function EditMenuInterface() {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        const callBackendAPI = async () => {
          const response = await fetch('http://localhost:8000/menu')
          const body = await response.json()
          setData(body)
        }
        callBackendAPI()
      }, [])

  return (
    <div className='edit-menu-interface'>
        <div className="header">
            <h3>Edit Menu Items</h3>
        </div>
        <div className="cards-container">
        {data.map((item) => (
            <AdminMenuEdit 
              key={item._id} 
              itemName={item.itemName} 
              image={item.image} 
              imageDescription={item.imageDescription} 
              category={item.category}
              id={item._id}
            />
        ))}
        </div>
    </div>
  )
}