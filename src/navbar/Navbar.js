import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return ( 
        <div className="flex col m-4 s-7">
            <h2>Sam Portfolio</h2>
            <div className="link">
                <Link to="/">Accueil</Link>
                <Link to="/cv">CV</Link>
                <Link to="/realisation">Réalisations</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
     );
}
 
export default Navbar;