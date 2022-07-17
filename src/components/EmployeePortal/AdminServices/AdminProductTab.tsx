import React from 'react'
import { useParams } from 'react-router-dom'
import { ObjectId } from 'mongodb'
import '../../../styles/css/AdminProductTab.css'

// Define service props object types
interface Service {
    title: string, 
    image: string, 
    description: string, 
    id: string
}

export default function AdminProductTab(props: Service) {

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
            <button>
                Delete
            </button>
        </div>
    )
}
