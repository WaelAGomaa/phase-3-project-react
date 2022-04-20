import Login from "./Login";
function Home({setUser}){
    return (
        <>
        <div className="home">
            <Login setUser={setUser}/>
        </div>
        <div id="bottomHome">
                <p>Don't have an account?</p>
            </div>
        </>
    )
}

export default Home;