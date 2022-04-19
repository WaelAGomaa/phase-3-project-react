import {useState} from 'react'

function Events({key, id, name, location, date, description, guestAmounts, ageMin, ageMax, liquor, dj, cannabis, img}) {
    const [going, setGoing] = useState(false);

    function handleGoing() {
        setGoing(!going)}
    return (
        <li id="EventCard">
                <div>
                    <img className="imageCard" src={img || "https://sadanduseless.b-cdn.net/wp-content/uploads/2020/03/funny-salad21.jpg"} alt="alt"/>
                    <h2>{name}</h2> 
                    <h3>{location}</h3>
                    <h3>Date: {date}</h3>
                    <h3>{description}</h3>
                    <h3>{guestAmounts}</h3>
                    <h4>Age range from:{ageMin} To:{ageMax}</h4>

                    <h3>{liquor ? '🥂' : null }</h3>
                    <h4>{dj ? "📻" : null}</h4>
                    <h4>{cannabis ? "🌿" : null}</h4>
                    {going ? <button id='like-button-red' onClick={handleGoing}>Going!</button>
                        : <button id='like-button-white' onClick={handleGoing}>Nah</button>}

                </div>
        </li>
    )
}


export default Events;