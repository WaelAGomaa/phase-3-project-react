import {useState} from 'react';

function Donate(){
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
        <>
        <div className="Donate">
        <h1>Donate</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec euismod, nisl eget consectetur consectetur,
            nisi nisl aliquam eros, eget tincidunt nisl nisl eget
            consectetur consectetur.
        </p>
        </div>
        <ul className="Donate-card">
        <h1>cassie</h1>
        <p>
        No! Yes! fսck it! I am in love with Nate Jacobs and he is in love with me! And don't you fսck¡ng give me that look, Maddy, because I didn't fսck your boyfriend!

        You two were broken up for three weeks and three days before we even had sеx, so I didn't betray you!

        Plus, you guys are terrible for each other and you know I'm right and you guys can all judge me if you want, but I do not care! I have never, ever been happier!


        </p>
        <h4 type="text" value={num} onChange={handleChange}>{num}$ raised of 1,000,000$ </h4> 

        <button className="donateBtn" onClick={handleClick}>{donate ? "Donate $10" : "Thanks!"}</button>

        </ul>
        </>
    );
}



export default Donate;