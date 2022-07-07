import React, { useState } from 'react'
import { Url } from 'url';

export default function AdminServices() {

  return (
    <div className="services">
        <h2 className='header'>Services</h2>
        <div className="add-service">
            <h3>Add Service</h3>
            <form action='/' method='POST'>
                <div className="input-field">
                    <label htmlFor="title">Service:</label>
                    <input type="text" id='title' name='title' />
                </div>
                <div className="input-field">
                    <label htmlFor="image">Image:</label>
                    <input type="url" id='image' name='image' />
                </div>
                <div className="input-field">
                    <label htmlFor="description">Description:</label>
                    <input type="text" id='description' name='description' />
                </div>
                <div className="submit-btn">
                    <input type="submit" value="Submit"></input>
                </div>
            </form>
        </div>
    </div>
  )
}
