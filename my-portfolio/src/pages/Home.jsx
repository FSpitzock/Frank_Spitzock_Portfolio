import ProfilePic from '../assets/professionalHeadshot.jpg'
import '../../src/App.css'

function Home () {
    return(
      <><div>
        
        <img className="profilePic" src={ProfilePic} alt="Profile Picture"/>
        </div>
      
      <div> 
        <p>Welcome! I'm Frank Spitzock.
            <br></br>
            Full-Stack Developer & Problem Solver.
            <br></br><br></br>
            I'm passionate about creating efficient, user-friendly web applications 
            that solve real-world problems. <br></br>With expertise in JavaScript, React, 
            and modern web technologies, I bring ideas to life through code.
        </p>
        </div> 

        </>
    )
}

export default Home