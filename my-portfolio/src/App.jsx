import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Header from './components/Layout/Header'
import Footer  from './components/Layout/Footer' 
import Navigation from './components/Layout/Navigation'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navigation/> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
      

      <Footer/>
</BrowserRouter>

          
     
    
    </>
  )
}

export default App
