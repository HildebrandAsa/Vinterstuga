import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <div className="footer-container">
      <Link to="/" className="link">Länk</Link>
      <Link to="/" className="link">Länk</Link>
      <Link to="/" className="link">Länk</Link>
    </div>
  )
}

export default Footer