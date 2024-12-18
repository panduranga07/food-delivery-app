import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter as Router, Routes,  Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/PlaceOrder/Placeorder'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {/* <div className='app'>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeorder/>}/>
        </Routes>
      </Router>
    </div>
    <Footer/> */}
       <Router>
       {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>: <></>}
      <div className="app">
       
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
       
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App