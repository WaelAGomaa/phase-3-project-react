import {useEffect, useState} from 'react';
import { Switch, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import AddEvent from "./AddEvent";
import EventList from "./EventList";
import Donate from "./Donate";
import About from './About';
import Home from "./Home";
import DonateCard from "./DonateCard";

function App() {
  const [events, setEvent] = useState([]);
  const [donate, setDonate] = useState([]);
  const [newGoing, setNewGoing] = useState(false);
  const [user, setUser] = useState(null)
  const [isShow , setShow] = useState(false);

  
  function toggleShow() {
    setShow(!isShow)
  }
  useEffect(()=> {
  fetch('http://localhost:9292/Events')
  .then(resp => resp.json())
  .then(data => setEvent(data))
}, []);
function handleFrontEnd(newEventObject) {
  const addNewEventObject = [...events, newEventObject]
    setEvent(addNewEventObject);
}
function handleFrontEndDonation(newDonationObject) {
  const addNewDonationObject = [...donate, newDonationObject]
    setDonate(addNewDonationObject);
}
  return (
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/Home"><Home user={user} setUser={setUser} toggleShow={toggleShow} isShow={isShow}/></Route>
      <Route path="/About"><About /></Route>
      <Route path="/Donate"><Donate toggleShow={toggleShow} isShow={isShow} handleFrontEndDonation={handleFrontEndDonation} setDonate={setDonate} donate={donate}/></Route>
        <Route path="/AddEvent"><AddEvent handleFrontEnd={handleFrontEnd}/></Route>
        <Route path="/Events"><EventList events={events}
        newGoing={newGoing}
        setNewGoing={setNewGoing} user={user}
        /></Route>
      </Switch>
    </div>
  );
}

export default App;
