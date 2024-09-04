import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

function Footer() {
    return(
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to setep in the future before others
                </h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="Logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, mollitia.</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjek</p>
                    <p>693-12934-231</p>
                    <p>info@gpt3Ai.net</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>@2024 GPT-3. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer;