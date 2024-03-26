import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="stopka">
      <div className="footer_odnosniki">
        <Link to="/"><p>FaceBook</p></Link>
        <Link to="/"><p>Instagram</p></Link>
        <Link to="/"><p>Twitter</p></Link>
      </div>

      <div className="footer_logo">
        <hr />
        <Link to="/"><img src="./app/assets/logo.png" alt="logo" /></Link>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
