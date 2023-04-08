import Hands_Left from "../assets/Hands_Left.png"
import Hands_Right from "../assets/Hands_Right.png"
import Postman from "../assets/postman-icon.svg"

function About(){
    return(
        <div className="About_container">
            <div style={{"display":"flex","alignItems":"center","justifyContent":"center"}}>
                <img alt="" style={{"width":"50%"}} src={Hands_Left}/>
                <h1 className="About_Header_Text">Hello</h1>
                <img alt="" style={{"width":"50%"}} src={Hands_Right}/>
            </div>
            <div className="About_Text">
                <p>
                    My Names John Harrison. I'm an apiring Web Developer from the Pittsburgh Area with a passion for making fun and interactive web designs. I started my programming journey in the spring of 2022 after desiring to persue a more fulfilling career. Previously I worked as a lathe operator programming CNC lathes and during that time I learned how satisfying it was to see a project that seemed difficult at first slowly take shape into a finished project. With my new skills, I aim to replicate that same satisfaction while also being able to express myself.
                </p>   

                <h1 style={{"margin":"20px 0px 0px 0px", "textDecoration":"underline"}}>Skills</h1>
                <div className="About_Skill_Container">
                        <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                        <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                        <img alt="" src={Postman}></img>
                        <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
                        <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </div>
                
            </div>
        </div>
    )
}

export default About