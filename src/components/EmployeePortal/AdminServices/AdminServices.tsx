import React, { useState } from 'react'
import { Url } from 'url';
import AddServiceForm from './AddServiceForm';

export default function AdminServices() {
    return (
        <div className="admin-services">
            <AddServiceForm />
        </div>
    )
}
