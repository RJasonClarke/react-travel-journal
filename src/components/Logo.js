import React from "react";
import globe from "../globe.png"

export default function Logo() {
    return(
        <header className="journal-logo">
            <img className="logo-globe" src={globe} alt="globe"/>
            <span className="logo-text">my travel journal</span>
        </header>
    );
}