import './components/css/footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="social-links">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-github"></i>
            </div>
            <div className="other-links">
                <ul>
                    <li>Contact</li>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
            <div className="copyright-line">
                <span>© {new Date().getFullYear()} Articles About Coding All Rights Reserved</span>
            </div>
        </div>
    )
}

export default Footer;