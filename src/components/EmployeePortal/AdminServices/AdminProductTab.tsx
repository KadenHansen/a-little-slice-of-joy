import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/css/AdminProductTab.css'

// Define service props object types
interface Service {
    title: string, 
    image: string, 
    description: string, 
    id: string
}

export default function AdminProductTab(props: Service) {
    const [service, setService] = useState({
        title: '',
        image: '',
        description: '',
    })

    useEffect(() => {
        const callBackendAPI = async () => {
          const response = await fetch(`http://localhost:8000/services/${props.id}`)
          const body = await response.json()
          setService(body)
        }
        callBackendAPI()
    }, [])

    // Access Put Route for individual services
    async function EditService(serviceID: string) {
        console.log(service)
        await fetch(`http://localhost:8000/services/${serviceID}/edit`, {
            method: "PUT",
            body: JSON.stringify({
                title: service.title,
                image: service.image,
                description: service.description
            }),
            headers: {
                'content-type':'application/json'
            }
        })
    }

    // Access Delete Route for individual services
    async function deleteService(serviceID: string) {
        await fetch(`http://localhost:8000/services/${serviceID}/delete`, {
            method: "DELETE"
        })
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setService((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
        <div className='admin-product-tab'>
            <div className="service-image">
                <img src={props.image} alt="a variety of a dozen cookies stacked in a small white box"/>
            </div>
            <div className="info">
            <form action='/' method='PUT'>
            <div className="input-field">
                    <input 
                        defaultValue={props.title} 
                        type="text" 
                        id='title' 
                        name='title' 
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <input 
                    defaultValue={props.description} 
                    type="text" 
                    id='description' 
                    name='description' 
                    onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <input 
                    defaultValue={props.image} 
                    type="url" 
                    id='image' 
                    name='image' 
                    onChange={handleChange}/>
                </div>
            </form>
            </div>
            <button onClick={()=> EditService(props.id)}>
                Update
            </button>
            <button onClick={()=> deleteService(props.id)}>
                Delete
            </button>
        </div>
    )
}
