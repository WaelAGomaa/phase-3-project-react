import {useState} from 'react'

function Events({key, id, name, location, date, description, guestAmounts, ageMin, ageMax, liquor, dj, green, img}) {
    const [going, setGoing] = useState(false);

    function handleGoing() {
        setGoing(!going)}
    return (
        <li id="EventCard">
                <div>
                    <img className="imageCard" src={img} alt="alt"/>
                    <h1>{name}</h1> 
                    <h3>📍 {location}</h3>
                    <h3>Date: {date}</h3>
                    <h3>{description}</h3>
                    <h3>Available: {guestAmounts}</h3>
                    <h4>Age range from: {ageMin} To: {ageMax}</h4>
                    <h3>{liquor}</h3>
                    <h4>{dj}</h4>
                    <h4>{green}</h4>
                    {going ? <button className="going-btn" onClick={handleGoing}>Going!</button>
                        : <button className="going-btn" onClick={handleGoing}>Nah</button>}

                </div>
        </li>
    )
}


export default Events;