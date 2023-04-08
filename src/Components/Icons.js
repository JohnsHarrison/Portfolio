import User from "../assets/User.svg"
import Projects from "../assets/Projects.svg"
import Contact from "../assets/Contact.svg"
import Resume from "../assets/Resume.svg"
import Resume_Document from "../assets/JSH_Resume.odt"
import { useNavigate } from "react-router-dom"

function Icons(props){
    const navigate = useNavigate()

   function handleClick(page){
        props.setPageActive(true) 
        navigate(`/${page}`)
        props.setCurrentLocation(window.location.href)
    }

    return(
        <div className="Icons_container">
            <div className="Icon" onClick={()=>handleClick("about")}>
                <img alt="" src={User}></img>
                <div className="Icon_text">
                    <p>About Me</p>
                </div>
            </div>

            <div className="Icon" onClick={()=>handleClick("projects")}>
                <img alt="" src={Projects}></img>
                <div className="Icon_text">
                    <p>My Projects</p>
                </div>
            </div>

            <div className="Icon" onClick={()=>handleClick("contact")}>
                <img alt="" src={Contact}></img>
                <div className="Icon_text">
                    <p>Contact Me</p>
                </div>
            </div>

            <div className="Icon">
                <a target="_blank" rel="noreferrer"  href={Resume_Document}><img alt="" src={Resume}></img></a>
                <div className="Icon_text">
                    <p>Résumé</p>
                </div>
            </div>
            
        </div>
    )
}

export default Icons