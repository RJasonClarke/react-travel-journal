import React from "react";
import Globe from "../globe.png"

export default function Logo() {
    return(
        <header className="journal-logo">
            <img className="logo-globe" src={Globe} alt="globe"/>
            <span className="logo-text">my travel journal</span>
        </header>
    );
}