import React from "react";
import LandingBanner from "./LandingBanner";
import ProductTab from "./ProductTab";

export default function Homepage (): JSX.Element {
    return (
        <div className="Home">
            <LandingBanner />
            <ProductTab />
        </div>
    )
}