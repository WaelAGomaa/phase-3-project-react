import Login from "./Login";
import GoingToList from "./GoingToList";

function Home({toggleShow, isShow, setUser, user}){


    return (
        <>
        {isShow ? 
                null :(
                    <>
                        {!user ? <Login setUser={setUser}/>: <GoingToList />}
                    </>
                 )}
                 {user ? null : (<div id="bottomHome">
                    <button className="loginBtn"  onClick={toggleShow}>Don't have an account?</button>  
                    </div>)}
                {isShow ? 
                (<div className="home">
            <form>
            <p id="newBtn">Create a new account</p>
            <div>
            <label >Create UserName: </label>
            <input className="loginData" type="text" name="userId"></input>
            </div>
            <div>
                <label>Create Password: </label>
                <input className="loginData" type="password" name="pwd"></input>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className="loginData" type="password" name="pwd"></input>
            </div>
            <div>
                <label>Add Email: </label>
                <input className="loginData" type="email" placeholder="Example@something.com" ></input>
            </div>
            <div>
                <label>Add Phone: </label>
                <input className="loginData" type="tel" placeholder="+1 (111) 222 - 3344"></input>
            </div>
            <div>
                <input className="loginBtn" type="button" value="Create Account" alt="Create Account"></input>
            </div>
            </form>
        </div>) : null}
        </>
    )
}

export default Home;