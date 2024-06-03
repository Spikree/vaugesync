import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <Link to={'/'}>
            <h1>Wavesync</h1>
            </Link>
            
        </div>
        <div className="nav-items">
            <ul>
                <li><a href="">Pricing</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Solutions</a></li>
                <li><a href="">Integrations</a></li>
                <li><a href="">Resources</a></li>
            </ul>
        </div>
        <div className="buttons">
            <Link to={'/book-a-demo'} style={{fontWeight:"500",backgroundColor:"#3ABEF9"}} href="">Book Demo</Link>
            <a style={{fontWeight:"500"}} href="">Dashboard</a>
        </div>
    </div>
  )
}

export default Navbar