import { Link } from "react-router-dom"


const Header = () => {

  return (
    <div className="header-container">
        <Link to="/" className="link">Hem</Link>
        <Link to="/map" className="link">Hitta hit</Link>
        <Link to="/pictures" className="link">Galleri</Link>
        <Link to="/contact" className="link">Kontakt</Link>
        <Link to="/guestbook" className="link">Gästbok</Link>
    </div>
  )
}

export default Header