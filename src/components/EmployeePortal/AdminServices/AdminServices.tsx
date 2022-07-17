import React, { useState } from 'react'
import { Url } from 'url';
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
