import React, { useState } from "react";

function AddEvent({handleFrontEnd}){
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [guestAmounts, setGuestAmounts] = useState("")
    const [ageMin, setAgeMin] = useState("")
    const [ageMax, setAgeMax] = useState("")
    const [liquor, setLiquor] = useState(false)
    const [dj, setDJ] = useState(false)
    const [green, setGreen] = useState(false)
    
    function handleName(event) {
        setName(event.target.value)
        }
    function handleImage(event) {
        setImage(event.target.value)
        }
    function handleLocation(event) {
        setLocation(event.target.value)
        }
    function handleDate(event) {
        setDate(event.target.value)
        }
    function handleDescription(event) {
        setDescription(event.target.value)
        }
    function handleGuestAmounts(event) {
        setGuestAmounts(event.target.value)
        }
    function handleAgeMin(event) {
        setAgeMin(event.target.value)
        }
    function handleAgeMax(event) {
        setAgeMax(event.target.value)
        }
    function handleLiquor() {
        setLiquor(!liquor)
        }
    function handleDJ() {
        setDJ(!dj)
        }
    function handleGreen() {
        setGreen(!green)
        }

        function handleSubmit(e){
            e.preventDefault();
            const newEvent = {
                name: name,
                image: image,
                location: location,
                date: date,
                description: description,
                guestAmounts: guestAmounts,
                ageMin: ageMin,
                ageMax: ageMax,
                liquor: liquor,
                dj: dj,
                green: green
                };
            fetch("http://localhost:3001/events",{
            method : "POST",
            headers : { "Content-Type": "application/json",
            Accepts: "application/json",},
            body: JSON.stringify(newEvent),
            })
          .then((r) => r.json())
          .then((newEvent) => handleFrontEnd(newEvent))
        
            e.target.reset();

        }
        
   

    return (<form onSubmit={handleSubmit} id="EventForm">
        <div id="first3btn">
            <input onChange={handleName} type="text" placeholder="Event Name" />
            <input onChange={handleLocation} type="text" placeholder="Event Location" />
            <input onChange={handleDescription} type="text" placeholder="Event Description" />
        </div>
        <div id="second3btn">
            <input onChange={handleGuestAmounts} type="number" placeholder="Guest Amount" />
            <label> Age range</label>
            <input onChange={handleAgeMin} type="number" placeholder="18" min="18" max="99"/>
            <input onChange={handleAgeMax} type="number" placeholder="99" max="99" min="18"/>
            <input onChange={handleImage}type="file"name="filename"/> 
        </div>
        <div id="checks">
                <label>📻</label>
                <input onChange={handleLiquor} type="checkbox"></input>
                <label>🥂</label>
                <input onchange={handleDJ}type="checkbox"></input>
                <label>🌿</label>
                <input onChange={handleGreen}type="checkbox"></input>
                <label >Event Date</label>
                <input onChange={handleDate} type="date" />
        </div>
            <div id="btnAdd">
                <input class="button-36" type="submit" value="Add Event" />
            </div>
        </form>
    )
}

export default AddEvent;