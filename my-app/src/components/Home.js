
function Home(){
    return (
        <>
        <div className="home">
            <form>
            <p>Login to your account</p>
            <div>
                <label >UserName: </label>
                <input className="loginData" type="text" name="userId"></input>
            </div>
            <div>
                <label>Password: </label>
                <input className="loginData" type="password" name="pwd"></input>
            </div>
            <div>
                <input id="loginBtn" type="button" value="Login" alt="Login"></input>
            </div>
            </form>
            
        </div>
        <div id="bottomHome">
                <p>Don't have an account?</p>
            </div>
        </>
    )
}

export default Home;