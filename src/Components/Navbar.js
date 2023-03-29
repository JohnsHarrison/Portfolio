import user from "../assets/User.svg"

function Navbar(){
    return(
        <div className="Navbar_container">
            <div>
               {/* <img style={{"height":"100%"}} src={user}/> */}
                <p>C:/Portfolio/John Harrison</p> 
            </div>  
            <div>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        </div>
    )
}

export default Navbar