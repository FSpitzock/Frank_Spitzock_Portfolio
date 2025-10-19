import ProfilePic from '../assets/professionalHeadshot.jpg'

function Home () {
    return(
      <><div>
        <img src={ProfilePic} alt="Profile Picture"/>
        <p>may have to size the image down</p>
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