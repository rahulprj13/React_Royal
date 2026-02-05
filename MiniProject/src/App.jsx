import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import NetflixHome from "./Component/NetflixHome"
import NetflixAbout from "./Component/NetflixAbout"
import NetflixContect from "./Component/NetflixContect"
import NetflixMovie from "./Component/NetflixMovie"
import NetflixError from "./Component/NetflixError"
import Watch from "./Component/Watch"
import Netflix from "./Component/Netflix"
import Iplteam from "./Component/Iplteam"


function App() {

  return (
    <>
    
     <Navbar/>
      
      <Routes>
        
        <Route path="/" element={<Netflix/>} />
        <Route path="/netflixhome" element={<NetflixHome/>} />
        <Route path="/netflixabout" element={<NetflixAbout/>} />
        <Route path="/netflixcontact" element={<NetflixContect/>} />
        <Route path="/netflixmovie" element={<NetflixMovie/>} />
        <Route path="/watch/:name" element={<Watch/>} />
        <Route path="/iplteam" element={<Iplteam/>} />
        <Route path="/*" element={<NetflixError/>} />
        
      </Routes>

    </>
  )
}

export default App
