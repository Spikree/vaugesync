import './footer.css'

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return <>
        <div className='footer-main'>
            <div className="row-1">
                <h1 style={{color:"white"}}>vaugesync</h1>
                <a>India | English</a>
            </div>
            <hr />
            <div className="row-2">
                <ul>
                    <li>About us</li>
                    <li>Support</li>
                    <li>Sales</li>
                    <li>Marketing</li>
                </ul>
            </div>
            <div className="row-3">
                <p>© {year} vaugesync. All rights reserved.</p>
            </div>
        </div>
    </>
}