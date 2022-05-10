import React from "react";

export default function Logo() {
    return(
        <header className="journal-logo">
            <img className="logo-globe" src="src/globe.png" alt="globe"/>
            <span className="logo-text">my travel journal</span>
        </header>
    );
}