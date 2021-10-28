import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavBar from "./layout/NavBar";
import TransferNFT from "./pages/TransferNFT/TransferNFT";
import './Global.css';

function App() {
  return (
      
        <div className={"App"}>
            <Router>
                <header>
                    <NavBar/>
                </header>
                <Switch>
                    <Route exact path={"/"} component={TransferNFT}/>
                </Switch>
            </Router>
        </div>

  );
}

export default App;
