import React from "react";
import LandingBanner from "./LandingBanner";
import ProductTab from "./ProductTab";

export default function Homepage () {
    return (
        <div className="Home">
            <LandingBanner />
            <ProductTab />
        </div>
    )
}