import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>Wavesync</h1>
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
            <a style={{fontWeight:"500",backgroundColor:"#00e785"}} href="">Book Demo</a>
            <a style={{fontWeight:"500"}} href="">Dashboard</a>
        </div>
    </div>
  )
}

export default Navbar