import './footer.css'

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return <>
        <div className='footer-main'>
            <div className="row-1">
                <h1 style={{color:"white"}}>Wavesync</h1>
                <a>India | English</a>
            </div>
            <hr />
            <div className="row-2">
            <div className="options">
                <div className="about-us">
                    <ul>
                        <li className='li-1'>About us</li>
                        <li>Our company</li>
                        <li>Media center</li>
                        <li>History</li>
                        <li>Careers</li>
                        <li>Leadership</li>
                    </ul>
                </div>
                <div className="need-help">
                        <ul>
                            <li className='li-1'>Need help</li>
                            <li>FAQ</li>
                            <li>Sitemap</li>
                            <li>Contact us</li>
                        </ul>
                </div>
                <div className="terms-of-use">
                    <ul>
                        <li>Terms of use</li>
                        <li>Privacy policy</li>
                        <li>Financial & policy Documents</li>
                    </ul>
                </div>
            </div>
            </div>
            <hr />
            <div className="row-3">
                <p>© {year} Wavesync. All rights reserved.</p>
            </div>
        </div>
    </>
}