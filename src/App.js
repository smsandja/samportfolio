import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
// import Navbar from "./navbar/Navbar";
import Nav from "./navbar/Nav";
import Resume from "./Accueil/Resume";
import Cv from "./Cv/Cv";
import NotFound from "./NotFound/NotFound";
import Dev from "./Realisation/Dev";
import Projet from "./Realisation/Projet";

function App() {
const projets = [
                {id: 1, title: "Mangadex", body:"Mangadex est un site web de Pokemon, on y retrouve plusieurs types de pokemon avec leurs differentes caracteristiques. On a meme la possibilité dùen creer:"},
                {id: 2, title: "GameBoy", body:"GameBoy est une forme de jeu fait en VueJs. Il teste vos reflexes et vous dis si vous etes rapides ou lent."},
                {id: 3, title: "Samy-blog", body:"C'est un blog conçu avec mon langage front-end favoris @ReactJs"},
                {id: 4, title: "Samy-blog", body:"C'est un blog conçu avec mon langage front-end favoris @ReactJs"}
            ];
  return (
    <Router>
      <div className="App">
          {/* <Navbar /> */}
          <Nav ></Nav>
          
        <div className="p-4">
          <Switch>
              <Route exact path="/">
                 <Resume projets={projets}/>
              </Route>
              <Route path="/cv">
                 <Cv />
              </Route>
              <Route path="/dev">
                 <Dev />
              </Route>
              <Route path="/gestion-projet">
                 <Projet />
              </Route>
              <Route path="*">
                 <NotFound></NotFound>
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
