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
import Usedemo1 from "./Component/Usedemo1"
import Usedemo2 from "./Component/Usedemo2"
import Usedemo3 from "./Component/Usedemo3"
import Employee from "./Component/Employee"
import CardComponent from "./Component/CardComponent"
import FormHandling from "./Component/Form/FormHandling"
import Dropdown from "./Component/Form/Dropdown"



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
        <Route path="/usedemo1" element={<Usedemo1/>} />
        <Route path="/usedemo2" element={<Usedemo2/>} />
        <Route path="/usedemo3" element={<Usedemo3/>} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/form" element={<FormHandling/>} />
        <Route path="/country" element={<Dropdown/>} />
        {/* <Route path="/cardcomponent" element={<CardComponent title="cards" desc="this is card description"/>} /> */}
        <Route path="/*" element={<NetflixError/>} />
        
      </Routes>

    </>
  )
}

export default App
