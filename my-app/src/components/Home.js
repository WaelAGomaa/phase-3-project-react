import Login from "./Login";
function Home(){
    return (
        <>
        <div className="home">
            <Login />
        </div>
        <div id="bottomHome">
                <p>Don't have an account?</p>
            </div>
        </>
    )
}

export default Home;