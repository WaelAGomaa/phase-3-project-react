import {useState} from 'react'

function Events({key, id, name, location, date, description, guestAmounts, ageMin, ageMax, liquor, dj, green, img, events, newGoing, setNewGoing}) {


    let [num, setNum]= useState(guestAmounts);
    let { eventGoing } = events;

    const [going, setGoing] = useState(false);

    function handleClick() {
        if(going){
            setNum(num + 1)
            setGoing(false);
        } else {
            setNum(num - 1);
            setGoing(true)
        }
        // fetch(`http://localhost:3002/Events/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accepts: "application/json"
        //     },
        //     body: JSON.stringify({ eventGoing: !going })
        // })
        // .then(resp => resp.json())
        // .then(data => {
        //     setNewGoing(!newGoing);
        //     setGoing(!going)
        // console.log({guestAmounts})
        // })
    }

  let incNum =()=>{
    if(guestAmounts<10)
    {
    setNum(prevNum => prevNum + 1);
    }
  };
  let decNum = () => {
     if(guestAmounts>0)
     {
      setNum(prevNum => prevNum - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

    return (
        <li id="EventCard">
          <div>
              <img className="imageCard" src={img  || "https://upload.wikimedia.org/wikipedia/commons/b/b8/Classic_Rainbow_Flag.png"} alt="alt"/>
              <h1>{name}</h1> 
              <h3>📍 {location} , 📅: {date}</h3>
              <h3>{description}</h3>
              <h3 type="text" value={num} onChange={handleChange}>Available: {num}</h3>
              <h4>Age range from: {ageMin} To: {ageMax}</h4>
              <h3 id="emoji">{liquor ? '🥂' : null }     {dj ? "📻" : null}     {green ? "🌿" : null}</h3>
              <button className="going-btn" onClick={handleClick}>{going ? "Nah" : "Going!"}</button>
          </div>
        </li>
    )
}


export default Events;