import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Header from './components/Layout/Header'
import Footer  from './components/Layout/Footer' 
import Navigation from './components/Layout/Navigation'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
     
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Contact" element={<Contact/>}/>
        {/* 🧭 404 Catch-All Route */}
          <Route path="*" element={<NotFound />} />
    </Routes>
      
      

      <Footer/>
</BrowserRouter>

          
     
    
    </>
  )
}

export default App
