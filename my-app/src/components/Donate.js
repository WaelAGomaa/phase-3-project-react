import DonateCard from './DonateCard';
import {useState} from 'react';
function Donate({toggleShow, isShow, handleFrontEndDonation, setDonate, donate}){
    const [name, setName] = useState("")
    const [story, setStory] = useState("")
    const [amount, setAmount] = useState(0)

    function handleName(event) {
        setName(event.target.value)
        }
    function handleStory(event) {
        setStory(event.target.value)
        }
    function handleAmount(event) {
        setAmount(event.target.value)
        }

    function handleSubmit(e){
        e.preventDefault();
        const newDonation = {
            amount: amount,
            name: name,
            story: story,
        }
        fetch("http://localhost:9292/Donate",{
            method : "POST",
            headers : { "Content-Type": "application/json",
            Accepts: "application/json",},
            body: JSON.stringify(newDonation),
            })
          .then((r) => handleFrontEndDonation(newDonation))


    e.target.reset();

    }
    const renderDonates = donate.map(i => <><DonateCard 
        name={i.name}
        story={i.story}
        amount={i.amount}/></>)

    return (
        <>
        <div className="Donate">
        <h1>Donate</h1>

        <h3>We could not have done this without the help and support of the community</h3>
        <p> And becasue the community keeps on giving, Feel free to support or ask for support</p>
        <p> From other members of the community. Read other people's stories and share your own.</p>
        
        </div>
       {donate? renderDonates : null}
       {/* <DonateCard name={name} amount={amount} story={story}/> */}
       <button className="donateBtn"  onClick={toggleShow}>Create +</button> 
       {isShow ? 
                (
                    <form className="DonateForm" onSubmit={handleSubmit}>
                    <div>
                        <label>Your Username:</label>
                        <input onChange={handleName} type="text" placeholder="Enter your name"></input>
                        <label>Wish to raise:</label>
                        <input onChange={handleAmount} type="number" placeholder="Enter your donation amount"></input>
                    </div>
    
                        <label>Your Story:</label>
                        <input onChange={handleStory} id="storyBox" type="text" placeholder="Enter your donation description"></input>
    
                <input type="submit" value="Add Story" className="donateBtn" />
           </form>
                        ): null}
        </>
    );
}



export default Donate;