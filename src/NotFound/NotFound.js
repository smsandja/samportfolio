import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
    return ( 
        <div className="font-google text-justify p-28">
            <h2>Oups...</h2>
            <p>La page n'existe pas !</p>
            <Link to="/" className="underline decoration-solid">Retour à la page d'accueil</Link>
        </div>
     );
}
 
export default NotFound;