
import './App.css'
import Header from './components/Layout/Header'
import Footer  from './components/Layout/Footer' 
import Navigation from './components/Layout/Navigation'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <Navigation/>
    <Header/>
      <Home/>   
      
      <p>Display SOMETHING!</p>
      <Footer/>
    </>
  )
}

export default App
