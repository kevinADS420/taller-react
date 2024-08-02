import { Route, Routes } from "react-router"
import { Home } from "./Pages/Home/Home"
import { Ourcompany } from './Layouts/Ourcompany/Ourcompany'
import { Header } from './Layouts/Header/Headerr'
import { Footer } from "./Layouts/Footer/Footer"
import { Ourvalues } from './Layouts/Our values/Ourvalues'
import { NotFound } from "./Layouts/NotFound/NotFound"




function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/Ourcompany" element={<Ourcompany/>}/>
        <Route path="/Ourvalues" element={<Ourvalues/>}></Route>
        <Route path="/NotFound" element={<NotFound/>}> </Route>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
