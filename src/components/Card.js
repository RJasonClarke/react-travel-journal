import React from "react";
import pin from "../pin.png"

export default function Card(props){
    return(
        <div className="card">
            <img className="card-img" src={props.item.imageUrl} alt={props.item.title}/>
            <div className="right-side">
                <img src={pin} alt="pin"></img>
                <span className="card-location"><strong>{props.item.location}</strong></span>
                <a className="card-link" href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1 className="card-title">{props.item.title}</h1>
                <p className="card-date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}

        // title: "Mount Fuji",
        // location: "Japan",
        // googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        // startDate: "12 Jan, 2021",
        // endDate: "24 Jan, 2021",
        // description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        // imageUrl: "https://source.unsplash.com/WLxQvbMyfas"