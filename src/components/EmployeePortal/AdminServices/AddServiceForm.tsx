import React, {useState} from 'react'
import { Url } from 'url'

export default function AddServiceForm() {

    // define service as service object with empty values
    const [service, setService] = useState<{title: string, image: Url, description: string }> ({
        title: '',
        image: ('' as any) as Url,
        description: ''
    })

    // set new values for service object on form change
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setService((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    //handle submit with fetch request
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await fetch('http://localhost:8000/services', {
          method: 'POST',
          body: JSON.stringify({
            title: service.title,
            image: service.image,
            description: service.description
          }),
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
        })
        
      }

  return (
    <div className="services">
        <h2 className='header'>Services</h2>
        <div className="add-service">
            <h3>Add Service</h3>
            <form action='/' method='POST' onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="title">Service:</label>
                    <input type="text" id='title' name='title' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="image">Image:</label>
                    <input type="url" id='image' name='image' onChange={handleChange}/>
                </div>
                <div className="input-field">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id='description' name='description' onChange={handleChange}/>
                </div>
                <div className="submit-btn">
                    <input type="submit" value="Add New Service"></input>
                </div>
            </form>
        </div>
    </div>
  )
}
