import {useEffect, useState} from 'react';
import { Switch, Route} from 'react-router-dom';
import NavBar from "./NavBar";
import AddEvent from "./AddEvent";
import EventList from "./EventList";
// import Events from "./Events"; 
import Home from "./Home";

function App() {
  const [events, setEvent] = useState([]);

  useEffect(()=> {
  fetch('http://localhost:3001/events')
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
      <Route path="/Home"><Home /></Route>
        <Route path="/AddEvent"><AddEvent handleFrontEnd={handleFrontEnd}/></Route>
        <Route path="/Events"><EventList events={events}/></Route>
        {/* <Route path="/Events" ><Events events={events}/></Route> */}
      </Switch>
    </div>
  );
}

export default App;
