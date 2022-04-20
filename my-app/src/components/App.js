import {useEffect, useState} from 'react';
import { Switch, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import AddEvent from "./AddEvent";
import EventList from "./EventList";


import Home from "./Home";

function App() {
  const [events, setEvent] = useState([]);
  const [newGoing, setNewGoing] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(()=> {
  fetch('http://localhost:9292/Events')
  .then(resp => resp.json())
  .then(data => setEvent(data))
}, []);
function handleFrontEnd(newEventObject) {
  const addNewEventObject = [...events, newEventObject]
    setEvent(addNewEventObject);
}
  return (
    <div className="App">
      <NavBar />
      {/* <Route path="/"><Home /></Route> */}
      <Switch>
      <Route path="/Home"><Home setUser={setUser}/></Route>
        <Route path="/AddEvent"><AddEvent handleFrontEnd={handleFrontEnd}/></Route>
        <Route path="/Events"><EventList events={events}
        newGoing={newGoing}
        setNewGoing={setNewGoing}
          /></Route>
        {/* <Route path="/Events" ><Events events={events}/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
