
function Login() {

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
        .then(resp => console.log(resp))
    }

    return<>
    <form onSubmit={handleLogin}>
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
        <input id="loginBtn" type="submit"  alt="Login"></input>
    </div>
    </form>
    </>
}

export default Login