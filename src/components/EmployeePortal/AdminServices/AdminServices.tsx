import React from 'react'
import AddServiceForm from './AddServiceForm';
import EditServicesInterface from './EditServicesInterface';

export default function AdminServices() {
    return (
        <div className="admin-services">
            <AddServiceForm />
            <EditServicesInterface />
        </div>
    )
}
