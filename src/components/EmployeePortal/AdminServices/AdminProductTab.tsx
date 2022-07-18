import React from 'react'
import '../../../styles/css/AdminProductTab.css'

// Define service props object types
interface Service {
    title: string, 
    image: string, 
    description: string, 
    id: string
}

export default function AdminProductTab(props: Service) {

    // Access Delete Route for individual services
    async function deleteService(serviceID: string) {
        await fetch(`http://localhost:8000/services/${serviceID}`, {
            method: "DELETE"
        })
    }

    return (
        <div className='admin-product-tab'>
            <div className="service-image">
                <img src={props.image} alt="a variety of a dozen cookies stacked in a small white box"/>
            </div>
            <div className="info">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <button>
                Edit
            </button>
            <button onClick={()=> deleteService(props.id)}>
                Delete
            </button>
        </div>
    )
}
