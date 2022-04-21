function EventGoingTo({name, date, description, id}) {
    return <div>
    <li id="EventCard">
          <div>
              {name}
              {date}
              {description}
          </div>
        </li>
    </div>
}

export default EventGoingTo