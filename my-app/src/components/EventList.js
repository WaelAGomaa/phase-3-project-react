import Events from "./Events";

function EventList({events, user, toggle, setToggle}) {

  const renderEvents = events.map(event => <><Events 
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
    green={event.green}
    img={event.img}
    events={events}
    user={user}
    setToggle={setToggle}
    toggle={toggle}
/>
</>)

  return(
    <main>
    <ul className="cards">
        {renderEvents}
    </ul>
  </main>
  )
}


export default EventList;