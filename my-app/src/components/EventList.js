import Events from "./Events";

function EventList({events}) {
const renderEvents = events.map(event => <Events 
    key={event.id}
    id={event.id}
    name={event.name}
    location={event.location}
    date={event.date}
    description={event.description}
    guestAmounts={event.guestAmounts}
    ageMin={event.ageMin}
    ageMax={event.ageMax}
    liquor={event.liquor}
    dj={event.dj}
    cannabis={event.cannabis}
    img={event.img}
/>)

  return(
    <main>
    <ul className="cards">
        {renderEvents}
    </ul>
  </main>
  )
}


export default EventList;