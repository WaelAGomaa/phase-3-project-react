import Login from "./Login";
import GoingToList from "./GoingToList";
import {useState} from 'react';

function Home({toggleShow, isShow, setUser, user}){
    const[newUser, setNewUser] = useState([]);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")


    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    function handleEmail(e){
        setEmail(e.target.value)
    }


   function reload() {
    window.location.reload(false);
  }
  function handleFrontEnd(newUserObject) {
    const addNewUserObject = [...newUser, newUserObject]
    setNewUser(addNewUserObject);
  }

  function handleSubmit(e){
    e.preventDefault();
    const newUser = {
        username: username,
        email: email,
        password: password}

        fetch('http://localhost:9292/Users',{method : "POST",
        headers : { "Content-Type": "application/json",
        Accepts: "application/json",},
        body: JSON.stringify(newUser),
        })
    .then((r) => handleFrontEnd(newUser))


    e.target.reset();
    }

    return (
        <>
    <h1 id="title">EventListener</h1>

        {isShow ? null :(<>
                        {!user ? <Login setUser={setUser}/>: 
                        <>
                        <GoingToList user={user} />
                        <button className="loginBtn"onClick={reload}>Log Out</button> 
                        </>
                        }
                        </>
                    )}
                 {user ? null : (<div id="bottomHome">
                    <button className="loginBtn"  onClick={toggleShow}>Don't have an account?</button>  
                    </div>)}
                {isShow ? 
                (<div className="home">
            <form onSubmit={handleSubmit}>
            <p id="newBtn">Create a new account</p>
            <div>
            <label >Create UserName: </label>
            <input className="loginData" type="text" name="userId" onChange={handleUsername}></input>
            </div>
            <div>
                <label>Create Password: </label>
                <input className="loginData" type="password" name="pwd" onChange={handlePassword}></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className="loginData" type="password" name="pwd"></input>
            </div>
            <div>
                <label>Add Email: </label>
                <input className="loginData" type="email" placeholder="Example@something.com" onChange={handleEmail}></input>
            </div>
            <div>
                <label>Add Phone: </label>
                <input className="loginData" type="tel" placeholder="+1 (111) 222 - 3344"></input>
            </div>
            <div>
                <input className="loginBtn" type="submit" value="Create Account" alt="Create Account"></input>
            </div>
            </form>
        </div>) : null}
        </>
    )
}

export default Home;