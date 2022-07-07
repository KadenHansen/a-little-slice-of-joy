import React from "react"
import { Link } from "react-router-dom"
import '../styles/css/Footer.css'

export default function Footer (): JSX.Element {
    return (
        <div className="footer">
            <Link to="/admin" className="portal">employee portal</Link>
        </div>
    )
}