import React, { useState, useEffect } from 'react'
import { Url } from 'url'
import '../../../styles/css/AdminMenuCard.css'

interface MenuItem {
    itemName: string, 
    image: string, 
    imageDescription: string, 
    category: string
    id: string
}

export default function AdminMenuEdit(props: MenuItem) {
    
    // define menu item as menuItem object with empty values
    const [menuItem, setMenuItem] = useState<{itemName: string, image: Url, imageDescription: string, category: string }> ({
        itemName: '',
        image: ('' as any) as Url,
        imageDescription: '',
        category: ''
    })

    // retrieve current document and set details to menuItem variable
    useEffect(() => {
        const callBackendAPI = async () => {
            const response = await fetch(`http://localhost:8000/menu/${props.id}`)
            const body = await response.json()
            setMenuItem(body)
        }
        callBackendAPI()
    }, [])

    
    // Access Put Route for individual menu items
    async function EditService(menuID: string) {
        await fetch(`http://localhost:8000/menu/${menuID}/edit`, {
            method: "PUT",
            body: JSON.stringify({
                itemName: menuItem.itemName,
                image: menuItem.image,
                imageDescription: menuItem.imageDescription,
                category: menuItem.category
            }),
            headers: {
                'content-type':'application/json'
            }
        })
    }
    
    // Access Delete Route for individual services
    async function deleteService(menuID: string) {
        await fetch(`http://localhost:8000/menu/${menuID}/delete`, {
            method: "DELETE"
        })
    }
    
    // update menuItem variable to match user input
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setMenuItem((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    return (
    <div className="admin-menu-card">
        <img src={props.image} alt={props.imageDescription} />
        <form className="description">
            <div className="input-field">
                <label htmlFor="image">Name:</label>
                <input 
                    defaultValue={props.itemName} 
                    type="string" 
                    id='itemName' 
                    name='itemName' 
                    onChange={handleChange}
                />
            </div>
            <div className="input-field">
                <label htmlFor="image">Image:</label>
                <input 
                    defaultValue={props.image} 
                    type="string" 
                    id='image' 
                    name='image' 
                    onChange={handleChange}
                />
            </div>
            <div className="input-field">
                <label htmlFor="imageDescription">Image Description:</label>
                <input 
                    defaultValue={props.imageDescription} 
                    type="string" 
                    id='imageDescription' 
                    name='imageDescription' 
                    onChange={handleChange}
                />
            </div>
            <div className="input-field">
                    <label htmlFor="category">Category:</label>
                    <select 
                        id='category' 
                        name='category' 
                        onChange={handleChange}
                        defaultValue={props.category}
                    >
                        <option value="cookie">Cookie</option>
                        <option value="cupcake">Cupcake</option>
                        <option value="pastry">Pastry</option>
                    </select>
                </div>
        </form>
        <button onClick={()=> EditService(props.id)}>
            Update
        </button>
        <button onClick={()=> deleteService(props.id)}>
            Delete
        </button>
    </div>
  )
}
