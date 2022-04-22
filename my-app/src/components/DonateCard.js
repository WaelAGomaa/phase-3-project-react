import {useState} from 'react';

function DonateCard({name, story, amount, user}){
    const [donate, setDonate] = useState(true);
    let [num, setNum]= useState(0);

    function handleClick() {
        if(donate){
            setNum(num + 10)
            setDonate(false);
            console.log(num)
        }else {
            // setNum(num - 10);
            setDonate(true)
        }
    }
    let incNum =()=>{
        if(0 <10)
        {
        setNum(prevNum => prevNum + 10);
        }
      };
   
     let handleChange = (e)=>{
       setNum(e.target.value);
      }
    return (
    <ul className="Donate-card">
    <h1>{name}</h1>
    <p>
   {story}
    </p>
    <h4 type="text" value={num} onChange={handleChange}>{num}$ raised of {amount}$ </h4> 

    {user ? (<button className="donateBtn2" onClick={handleClick}>{donate ? "Donate $10" : "Donate again?"}</button>) : (<button className="donateBtn2">Login to donate</button>)}

    </ul>
    )
}




export default DonateCard; 