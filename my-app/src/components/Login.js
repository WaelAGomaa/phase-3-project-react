
function Login({setUser}) {

    function handleLogin(e){
        e.preventDefault();
        let login = {
            username: e.target[0].value,
            password: e.target[1].value
        }
        fetch("http://localhost:9292/Users",{
            method : "POST",
            headers : { "Content-Type": "application/json",
            Accepts: "application/json",},
            body: JSON.stringify(login),
        })
        .then(resp => resp.json())
        .then(response => {console.log(response)
            if(response.message === 'success!') {
                setUser(login.username)
            } else {
                window.alert("bad login!");
            }
        })
    }

    return<>
    <form onSubmit={handleLogin} className="home">
    <p>Login to your account</p>
    <div>
        <label >UserName: </label>
        <input className="loginData" type="text" name="userId" required="required"></input>
    </div>
    <div>
        <label>Password: </label>
        <input className="loginData" type="password" name="pwd" required="required"></input>
    </div>
    <div>
        <input className="loginBtn" type="submit"  alt="Login" value="Login"></input>
    </div>
    </form>
    </>
}

export default Login