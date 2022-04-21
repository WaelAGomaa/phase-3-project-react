function EventGoingTo({name, date, description, location, dj, green ,liquor}) {
    return <div>
    <li id="EventCard">
          <div>
              <h1>Reminder!</h1>
          <h1>{name}</h1> 
              <h3>📍 {location} , 📅: {date}</h3>
              <h3>{description}</h3>
              <p className="emoji">{liquor ? '🥂' : null }     {dj ? "📻" : null}     {green ? "🌿" : null}</p>
          </div>
        </li>
    </div>
}

export default EventGoingTo