
import Movie_Buffalo from "../assets/desktop 1.png"
import Desktop_Drummer from "../assets/desktop 2.png"
import MusicBook from "../assets/desktop 3.png"
import SpotifyMock from "../assets/desktop 4.png"
import Postman from "../assets/postman-icon.svg"

function Projects(){
    return(
        <div className="Project_Page_Container">
            <h1 style={{"fontSize":"5rem", "color":"black"}}>PROJECTS</h1>
            <div className="Projects_Container">
                <div className="Project">
                   <div style={{"width":"50%"}}>
                    <div className="Project_Info">
                        <h1 style={{"fontSize":"3rem"}}>Movie Buffalo</h1>
                        <p style={{"marginTop":"50px"}}>Movie based group project made in a week during my enrolment in Per Scholas utilizing several API calls to get current movies in theaters, movie trailers, streaming services, etc. </p>
                        <h2 style={{"textAlign":"center"}}>Skills Used</h2>
                        <div className="Skill_Icons">
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        </div>             
                    </div>
                    <a target="_blank" rel="noreferrer" style={{"textDecoration":"none"}} href="https://moviebuffalo.netlify.app/"> <button style={{"margin":"10px auto 0px"}}>View Project</button></a>  
                   </div>
                   <img alt="" className="Project_Image" src={Movie_Buffalo}></img>
                </div>

                <div className="Project">
                   <div style={{"width":"50%"}}>
                    <div className="Project_Info">
                        <h1 style={{"fontSize":"3rem"}}>Desktop Drummer</h1>
                        <p style={{"marginTop":"50px"}}>Interactive drum app where you can use your keyboard or mouse to make drum sounds. Also features a grid of notes to allow the user to create a drum loop. </p>
                        <h2 style={{"textAlign":"center"}}>Skills Used</h2>
                        <div className="Skill_Icons">
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        </div>             
                    </div>
                       <a target="_blank" rel="noreferrer" style={{"textDecoration":"none"}} href="https://desktop-drummer.netlify.app/"> <button style={{"margin":"10px auto 0px"}}>View Project</button></a>
                   </div>
                   <img alt="" className="Project_Image" src={Desktop_Drummer}></img>
                </div>

                <div className="Project">
                   <div style={{"width":"50%"}}>
                    <div className="Project_Info">
                        <h1 style={{"fontSize":"3rem"}}>MusicBook</h1>
                        <p style={{"marginTop":"50px"}}>Full stack project using MongoDB and Mongoose to create a database of musical artists, albums, and songs. Also gives users the ability to create a profile so they can cantribute and make edits to the database.</p>
                        <h2 style={{"textAlign":"center"}}>Skills Used</h2>
                        <div className="Skill_Icons">
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                           <img alt="" src={Postman}></img>
                        </div>             
                    </div>
                       <a target="_blank" rel="noreferrer" style={{"textDecoration":"none"}} href="https://musicbook.netlify.app/"> <button style={{"margin":"10px auto 0px"}}>View Project</button></a>
                   </div>
                   <img alt="" className="Project_Image" src={MusicBook}></img>
                </div>

                <div className="Project">
                   <div style={{"width":"50%"}}>
                    <div className="Project_Info">
                        <h1 style={{"fontSize":"3rem"}}>Spotify Mock</h1>
                        <p style={{"marginTop":"50px"}}>Practice mock up of Spotify's artist page featuring a playable song and a randomly generated "friends" list using APIs to make the page feel more alive.</p>
                        <h2 style={{"textAlign":"center"}}>Skills Used</h2>
                        <div className="Skill_Icons">
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /> 
                           <img alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
                        </div>             
                    </div>
                       <a target="_blank" rel="noreferrer" style={{"textDecoration":"none"}} href="https://jshspotifymock.netlify.app/"> <button style={{"margin":"10px auto 0px"}}>View Project</button></a>
                   </div>
                   <img alt="" className="Project_Image" src={SpotifyMock}></img>
                </div>

            </div>
        </div>
    )
}

export default Projects