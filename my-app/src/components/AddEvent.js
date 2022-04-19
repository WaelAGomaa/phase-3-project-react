

function AddEvent(){
// const [isEvent, setIsEvent] = useState(false);
// const [liked, setLiked] = useState(like);

// function handleLike() {
//     setLiked(!liked)
//     setNewLike(!newLike)
// }
    function handleSubmit(e){
        e.preventDefault();
        // setIsEvent(!isEvent);
        console.log("hi");
    }

    return (<form onSubmit={handleSubmit} id="EventForm">
        <div id="first3btn">
            <input type="text" placeholder="Event Name" />
            <input type="text" placeholder="Event Location" />
            <input type="text" placeholder="Event Description" />
        </div>
        <div id="second3btn">
            <input type="number" placeholder="Guest Amount" />
            <label> Age range</label>
            <input type="number" placeholder="18" min="18" max="99"/>
            <input type="number" placeholder="99" max="99" min="18"/>
            <input type="file"name="filename"/> 
        </div>
        <div id="checks">
                <label>📻</label>
                <input type="checkbox"></input>
                <label>🥂</label>
                <input type="checkbox"></input>
                <label>🌿</label>
                <input type="checkbox"></input>
                <label >Event Date</label>
                <input type="date" />
        </div>
            <div id="btnAdd">
                <input class="button-36" type="submit" value="Add Event" />
            </div>
        </form>
    )
}

export default AddEvent;