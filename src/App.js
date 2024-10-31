import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";
// import Navbar from "./navbar/Navbar";
import Nav from "./navbar/Nav";
import Resume from "./Accueil/Resume";
import Cv from "./Cv/Cv";
import NotFound from "./NotFound/NotFound";
import Dev from "./Realisation/Dev";
import Projet from "./Realisation/Projet";

function App() {
  return (
    <Router>
      <div className="App">
          {/* <Navbar /> */}
          <Nav ></Nav>
          
        <div className="p-4">
          <Switch>
              <Route exact path="/">
                 <Resume />
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
