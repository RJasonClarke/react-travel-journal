import React from "react";

export default function Card(props){

    console.log(props)

    return(
        <div className="card">
            <img className="card-img" src={props.item.imageUrl}/>
            <h4 className="card-location">{props.item.location}</h4>
            <a className="card-link" href={props.item.googleMapsUrl}></a>
            <h1 className="card-title">{props.item.title}</h1>
            <p className="card-start-date">{props.item.startDate}</p>
            <p className="card-end-date">{props.item.endDate}</p>
            <p className="card-description">{props.item.description}</p>
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