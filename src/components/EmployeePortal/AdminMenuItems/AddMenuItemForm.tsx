import React, {useState} from 'react'
import { Url } from 'url'

export default function AddMenuItemForm() {

    // define menu item as menuItem object with empty values
    const [menuItem, setMenuItem] = useState<{itemName: string, image: Url, imageDescription: string, category: string }> ({
        itemName: '',
        image: ('' as any) as Url,
        imageDescription: '',
        category: ''
    })

    // set new values for service object on form change
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setMenuItem((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    //handle submit with fetch request to add new document to services collection
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await fetch('http://localhost:8000/menu', {
          method: 'POST',
          body: JSON.stringify({
            itemName: menuItem.itemName,
            image: menuItem.image,
            imageDescription: menuItem.imageDescription,
            category: menuItem.category
          }),
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        })
        
      }

  return (
    <div className="menu">
        <div className="add-menu-item">
            <h3>Add Menu Item</h3>
            <form method='POST' onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="itemName">Item Name:</label>
                    <input 
                        type="text" 
                        id='itemName' 
                        name='itemName' 
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="image">Image:</label>
                    <input 
                        type="url" 
                        id='image' 
                        name='image' 
                        onChange={handleChange}
                    />
                </div>
                <div className="input-field">
                    <label htmlFor="imageDescription">Image Description:</label>
                    <input 
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
                    >
                        <option value="cookie">Cookie</option>
                        <option value="cupcake">Cupcake</option>
                        <option value="pastry">Pastry</option>
                    </select>
                </div>
                <div className="submit-btn">
                    <input 
                        type="submit" 
                        value="Add New Item to Menu"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}