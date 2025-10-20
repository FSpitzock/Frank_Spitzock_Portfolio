import Navigation from "./Navigation"

function Footer () {
    return(
        <>
        <footer className="footer">
        <h4>Frank Spitzock Portfolio</h4>

        <ul>Quick Links</ul>
        <div className="navFoot">
        <Navigation/>
        </div>
    

      <p className="footer-copy">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </footer>
    </>
    )
}

export default Footer