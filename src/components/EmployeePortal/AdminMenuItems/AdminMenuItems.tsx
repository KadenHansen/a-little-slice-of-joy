import React from 'react'
import AddMenuItemForm from './AddMenuItemForm'
import EditMenuInterface from './EditMenuInterface'


export default function AdminMenuItems() {
    return (
        <div className="admin-menu-items">
            <h2 className='header'>Menu</h2>
            <AddMenuItemForm />
            <EditMenuInterface />
        </div>
    )
}
