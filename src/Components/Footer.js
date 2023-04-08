import logo from "../assets/Logo.svg"
import Clock from "../assets/Clock.svg"
import Volume from "../assets/Volume.svg"
import {useState } from "react"



function Footer(props){
    const [date, setDate] = useState(new Date().toLocaleTimeString("en", { hour: 'numeric', hour12: true, minute: 'numeric' }));


    setInterval(()=>{setDate(new Date().toLocaleTimeString("en", { hour: 'numeric', hour12: true, minute: 'numeric' }))}, 1000)



    return(
        <div className="Footer_container">
            <div style={{"display":"flex"}}>
                <button onClick={props.handleError} style={{"fontWeight":"bold"}}><img style={{"marginRight":"2px"}} src={logo} alt="Start"/> Start</button>
                <div className="Dash"></div>
            </div>
            <div style={{"display":"flex"}}>
                <div className="Dash"></div>
                <div className="Footer_corner">
                    <img src={Clock} alt="Clock"/>
                    <img src={Volume} alt="Volume"/>
                    <p style={{"margin":"3px 5px 0px 0px"}}>{date}</p>
                </div>
            </div>  
        </div>
    )
}

export default Footer