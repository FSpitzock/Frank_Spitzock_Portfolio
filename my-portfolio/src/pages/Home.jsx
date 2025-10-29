import ProfilePic from '../assets/professionalHeadshot.jpg'
import '../../src/App.css'

function Home () {
    return(
      <><div>
        
        <img className="profilePic" src={ProfilePic} alt="Profile Picture"/>
        </div>
      
      <div className = "homeDesc">
        <p>Welcome! I'm Frank Spitzock.
            <br></br>
            Full-Stack Developer & Problem Solver.
            <br></br><br></br>
            I'm passionate about creating efficient, user-friendly web applications 
            that solve real-world problems. <br></br>With expertise in JavaScript, React, 
            and modern web technologies, I bring ideas to life through code.
        </p>
        </div> 
        <h4 className="core-tech">Core Technologies</h4>
        <div className="core-list">
          
          <ul><strong>Frontend Development</strong>
            <li>React</li>
            <li>JavaScript</li>
            <li>TyoeScript</li>
            <li>CSS</li>
            <li>HTML5</li>
          </ul>

           <ul><strong>Backend Development</strong>
            <li>SQL</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
           </ul>

        </div>

        </>
    )
}

export default Home