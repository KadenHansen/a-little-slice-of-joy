import React, { useState, useEffect } from "react";
import LandingBanner from "./LandingBanner";
import ProductTab from "./ProductTab";

export default function Homepage () {
    const [data, setData] = useState<any[]>([])

    useEffect(() => {
        const callBackendAPI = async () => {
          const response = await fetch('http://localhost:8000/services')
          const body = await response.json()
          setData(body)
        }
        callBackendAPI()
      }, [])


    return (
        <div className="Home">
            <LandingBanner />
            {data.map((service) =>
                <ProductTab 
                    key={service._id}
                    image={service.image}
                    description={service.description}
                    title={service.title}
                />
            )}
        </div>
    )
}