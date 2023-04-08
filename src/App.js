import './App.css';
import Footer from './Components/Footer';
import Icons from './Components/Icons';
import Close from "./assets/Close.svg"
import Fullscreen from "./assets/Fullscreen.svg"
import Minimize from "./assets/Minimize.svg"
import Arrow from"./assets/Dropdown_Arrow.svg"
import IE_Page_Logo from "./assets/IE_Page_Logo.svg"
import World_Logo from "./assets/World_Logo.svg"
import { useRef,useState } from 'react';
import { Routes,Route, } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact'
import Error_Sound from './assets/Error_Sound.mp3'


function App() {
const [pageActive, setPageActive] = useState(false)
const [minimized, setMinimized] = useState(false)
const [fullScreen, setFullScreen] = useState(false)
const [currentLocation,setCurrentLocation] =useState(window.location.href) 
let timesClicked = 0
const audio = new Audio(Error_Sound);
audio.volume = .3

const Page = useRef()
const toolBar = useRef()
const pageFooter = useRef()



function handleError(){
  
  audio.play()
  if(timesClicked===0){
    setTimeout(()=>alert("I didn't code that!"),100)
  }else if(timesClicked===1){
    setTimeout(()=>alert("I didn't code that either!"),100)
  }else if(timesClicked===2){
    setTimeout(()=>alert("Nope didn't code that either!"),100)
  }else{
    setTimeout(()=>alert("All of these are just for show!"),100)
  }
  timesClicked++
   
}

function handleClose(){
  setPageActive(false)
  setMinimized(false)
  setFullScreen(false)
}

function handleMinimize(){
  if(!minimized){
    Page.current.style.height="40px"
    toolBar.current.style.display = "none"
    pageFooter.current.style.display = "none"
    setMinimized(true)
  }else{
    Page.current.style.height="85vh"
    toolBar.current.style.display="block"
    pageFooter.current.style.display = "flex"
    
    setMinimized(false)
  }

  if(fullScreen && minimized){
    Page.current.style.height=(window.innerHeight - 30) +"px"
    setMinimized(false)
  }

}

function handleFullscreen(){

  if(!fullScreen && window.innerWidth <= 1024){
    Page.current.style.height=(window.innerHeight - 30) +"px"
    Page.current.style.width="100vw"
    Page.current.style.top="0"
    setFullScreen(true)
  }else if(fullScreen && window.innerWidth <= 1024){
    Page.current.style.height="85vh"
    Page.current.style.width="90vw"
    Page.current.style.top="5%"
    Page.current.style.right="0"
    setFullScreen(false)
  }

  if(toolBar.current.style.display === "none" && pageFooter.current.style.display === "none"){
    toolBar.current.style.display="block"
    pageFooter.current.style.display = "flex"
  }

  if(!fullScreen && window.innerWidth > 1024){
    Page.current.style.height=(window.innerHeight - 30) +"px"
    Page.current.style.width="100vw"
    Page.current.style.top="0"
    Page.current.style.left="0"
    setFullScreen(true)
  }else if(fullScreen && window.innerWidth > 1024){
    Page.current.style.height="85vh"
    Page.current.style.width="90vw"
    Page.current.style.top="5%"
    Page.current.style.left="5%"
    setFullScreen(false)
  }
}

  return (
    <div className="App">
      <Icons setPageActive={setPageActive} setCurrentLocation ={setCurrentLocation}/>
      {
        pageActive ? <div ref={Page} className='Page_container'>
           <div className="Page_Header">
              <div className='Page_Title'>
                <div style={{"width":"75%"}}>
                    <p style={{"overflow":"hidden","textOverflow":"ellipsis","whiteSpace":"nowrap"}}>{currentLocation} - Microsoft Internet Explorer</p> 
                </div> 
                <div style={{"display":"flex"}}>
                  <button onClick={handleMinimize} ><img src={Minimize} alt="Minimize"/></button> 
                  <button onClick={handleFullscreen}><img src={Fullscreen} alt="Fullscreen"/></button> 
                  <button onClick={handleClose} style={{"marginLeft":"2px"}}><img src={Close} alt="Close"/></button> 
                </div>
              </div>
              <div ref={toolBar} className="Toolbar_Container">
                <div className='Dash_Horizonal'></div>
                <div style={{"height":"26px"}} className='Toolbar_Section'>
                  <div style={{"marginRight":"10px"}} className='Handle'></div>   
                  <div className='Toolbar_text'>
                    <p onClick={handleError}><span style={{"textDecoration":"underline"}}>F</span>ile</p>
                    <p onClick={handleError}><span style={{"textDecoration":"underline"}}>E</span>dit</p>
                    <p onClick={handleError}><span style={{"textDecoration":"underline"}}>V</span>iew</p>
                    <p onClick={handleError}><span style={{"textDecoration":"underline"}}>G</span>o</p>
                    <p onClick={handleError}>F<span style={{"textDecoration":"underline"}}>a</span>vorites</p>
                    <p onClick={handleError}><span style={{"textDecoration":"underline"}}>T</span>ools</p>
                    <p onClick={handleError}><span style={{"textDecoration":"underline"}}>H</span>elp</p>
                  </div>
                </div>
                <div className='Dash_Horizonal'></div>
                <div style={{"height":"52px"}} className='Toolbar_Section'>
                  <div style={{"marginRight":"10px"}} className='Handle'></div>
                  <div style={{"marginRight":"8px"}} className='Section_Icon' onClick={handleError}>
                    <div className='Section_Icon_Image'></div>
                    <p>Back</p>
                  </div>
                  <img alt='' style={{"marginRight":"8px"}} src={Arrow}></img>
                  <div style={{"marginRight":"8px"}} className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-20px"}} className='Section_Icon_Image' ></div>
                    <p>Forward</p>
                  </div>
                  <img alt='' style={{"marginRight":"8px"}} src={Arrow}></img>
                  <div className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-40px"}} className='Section_Icon_Image'></div>
                    <p>Stop</p>
                  </div>
                  <div className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-60px"}} className='Section_Icon_Image'></div>
                    <p>Refresh</p>
                  </div>
                  <div className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-80px"}} className='Section_Icon_Image'></div>
                    <p>Home</p>
                  </div>
                  <div style={{"height":"50%"}} className='Dash'></div>
                  <div className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-100px"}} className='Section_Icon_Image'></div>
                    <p>Search</p>
                  </div>
                  <div className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-120px"}} className='Section_Icon_Image'></div>
                    <p>Favorites</p>
                  </div>
                  <div className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-240px"}} className='Section_Icon_Image'></div>
                    <p>History</p>
                  </div>
                  <div style={{"height":"50%"}} className='Dash'></div>
                  <div className='Section_Icon' onClick={handleError}>
                    <div style={{"backgroundPosition":"-140px"}} className='Section_Icon_Image'></div>
                    <p>Print</p>
                  </div>
                </div>
                <div className='Dash_Horizonal'></div>
                <div style={{"height":"26px"}} className='Toolbar_Section'>
                  <div style={{"marginRight":"5px"}} className='Handle'></div>
                  <p style={{"marginRight":"5px"}}>Address</p>
                  <div className='Address_Bar'> 
                    <img alt='' src={IE_Page_Logo}></img>
                    <p>{currentLocation}</p>
                  </div>
                </div>
              </div>
            </div>
               <div className='Page_Content'>
                 <Routes>
                  <Route path="/about" element={<About />}/>
                  <Route path='/projects' element={<Projects/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                </Routes>
              </div>
              <div ref={pageFooter} className='Page_Footer'>
                <div style={{"width":"56%"}} className='Page_Footer_Section'>
                  <img alt='' src={IE_Page_Logo}></img>
                  <p>Done</p>
                </div>
                <div style={{"width":"2%"}} className='Page_Footer_Section'/>
                <div style={{"width":"2%"}} className='Page_Footer_Section'/>
                <div style={{"width":"40%"}} className='Page_Footer_Section'>
                  <img alt='' src={World_Logo}></img>
                  <p>Internet</p>
                </div>
              </div>
        </div>: null
      }
      <Footer handleError={handleError}/>
    </div>
  );
}

export default App;
