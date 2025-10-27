import Navigation from "./Navigation"

function Footer () {
    return(
        <>
        <footer className="footer">
        <p>Frank Spitzock Portfolio</p>

        <p>Quick Links</p>
        <div className="navFoot">
        <Navigation/>
        </div>
    

      <p className="footer-copy">&copy; {new Date().getFullYear()} Frank Spitzock. All rights reserved.</p>
        </footer>
    </>
    )
}

export default Footer