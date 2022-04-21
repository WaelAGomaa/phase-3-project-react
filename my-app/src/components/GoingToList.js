import { useState, useEffect } from "react";
import EventGoingTo from "./EventGoingTo";
function GoingToList({user}) {
    const [goList, setGoList] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9292/Favorites",{
            method : "POST",
            headers : { "Content-Type": "application/json",
            Accepts: "application/json",},
            body: JSON.stringify({user}),
        })
        .then(r => r.json())
        .then(listOfItems => {
            console.log(listOfItems)
            setGoList(listOfItems)})}, []
    )

    return<div>
        {goList ? (goList.map(party =>  {
            return <EventGoingTo name ={party.name}
            date={party.date} description={party.description}
            />
        })) : null}
    </div>
}

export default GoingToList