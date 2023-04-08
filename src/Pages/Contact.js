import Phone_statue from "../assets/Phone-statue.png"

function Contact(){
    return(
        <div className="Contact_Container">
           <img alt="" src={Phone_statue}></img>
           <div className="contact_info">
                <h1>You can find me on <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jharrisons/">Linkedin</a></h1>
                <h1>or contact me via <a href="mailto:jshar15089@gmail.com" >Email</a></h1>
           </div>
        </div>
    )
}

export default Contact