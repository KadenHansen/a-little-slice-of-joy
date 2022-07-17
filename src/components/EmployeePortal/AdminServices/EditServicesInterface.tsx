import React, {useState, useEffect} from 'react'
import AdminProductTab from './AdminProductTab'

export default function EditServicesInterface() {
    // Define empty array for all services from db
    const [services, setServices] = useState<any[]>([])

    // Retrieve data from backend and push all services collection objects to services array  
    useEffect(() => {
        const callBackendAPI = async () => {
          const response = await fetch('http://localhost:8000/services')
          const body = await response.json()
          setServices(body)
        }
        callBackendAPI()
      }, [])

  return (
        <div className="edit-services-interface">
            {services.map((service) =>
                <AdminProductTab 
                    key={service._id}
                    image={service.image}
                    description={service.description}
                    title={service.title}
                    id={service._id}
                />
            )}
        </div>
    )
}
