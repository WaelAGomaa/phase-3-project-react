import {useState} from 'react'

function Events({key, id, user, name, location, date, description, guestAmounts, ageMin, ageMax, liquor, dj, green, img, events, newGoing, setNewGoing}) {


    let [num, setNum]= useState(guestAmounts);
    let { eventGoing } = events;

    const [going, setGoing] = useState(false);

    function handleClick(e) {
      console.log(e)
      let clickinfo = {
        username: user,
        event_id: id
      }
        if(going){
            setNum(num + 1)
            setGoing(false);
            clickinfo.AddOrSubtractFromList = "add"
            fetch("http://localhost:9292/Users",{
              method : "PATCH",
              headers : { "Content-Type": "application/json",
              Accepts: "application/json",},
              body: JSON.stringify(clickinfo),
          })
            
        } else {
            setNum(num - 1);
            setGoing(true)
            clickinfo.AddOrSubtractFromList = "subtract"
            fetch("http://localhost:9292/Users",{
              method : "PATCH",
              headers : { "Content-Type": "application/json",
              Accepts: "application/json",},
              body: JSON.stringify(clickinfo),
          })
        }
    }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }
  function handleDelete(e){
  fetch(`http://localhost:9292/Events/${parseInt(e.target.id)}`,{
    method:'DELETE'})}

    return (
        <li id="EventCard">
          <div>
              <img className="imageCard" src={img} alt="alt"/>
              <h1>{name}</h1> 
              <h3>📍 {location} , 📅: {date}</h3>
              <h3>{description}</h3>
              <h3 type="text" value={num} onChange={handleChange}>Available: {num}</h3>
              <h4>Age range from: {ageMin} To: {ageMax}</h4>
              <h3 className="emoji">{liquor ? '🥂' : null }     {dj ? "📻" : null}     {green ? "🌿" : null}</h3>
              {user ? ( <><button className="going-btn" onClick={handleClick}>{going ? "Not Going" : "Going!"}</button> <button id={id} onClick={handleDelete} className="block-btn">Block 🚫</button></>) : (<button className="going-btn">log in to rsvp!</button>)}

          </div>
        </li>
    )
}


export default Events;