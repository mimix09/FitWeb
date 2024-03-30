import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="stopka">
      <div className="footer_odnosniki">
        <Link to="/" style={{textDecoration:"none"}}><p>Facebook</p></Link>
        <Link to="/" style={{textDecoration:"none"}}><p>Instagram</p></Link>
        <Link to="/" style={{textDecoration:"none"}}><p>Twitter</p></Link>
      </div>

      <div className="footer_logo">
        <hr />
        <h1 className="logo" style={{minWidth:"200px"}}>Michał Kopcza</h1>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
