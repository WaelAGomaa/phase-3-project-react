// import React, { useState } from "react";
import {Link } from 'react-router-dom';
function NavBar(){
    
    return (
        <div className="icon-bar">
        <Link to="/Home"><button className="Rainbow">Home</button> </Link>
        <Link to="/Events"><button>Events</button> </Link>
        <Link to="/About"><button>About</button> </Link>
        <Link to="/Donate"><button>Donate</button></Link>
        <Link to="/AddEvent"><button>Add Event</button> </Link>
        </div>
    )
}



export default NavBar;