import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import TransferNFT from "./pages/TransferNFT/TransferNFT";
import "./Global.css";
import { getFactory } from "./wallet/connectors";
import { useEffect } from "react";
import { Chain } from "xp.network/dist/consts";
import { chainsConfig } from "./pages/TransferNFT/components/values";
import {ethers} from 'ethers'
function App() {
    const mint = async () => {
        const factory = await getFactory()
        const fromChain = await factory.inner(chainsConfig.Fantom.Chain)
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        factory.mint(fromChain, provider.getSigner('0x5fbc2F7B45155CbE713EAa9133Dd0e88D74126f6'), 
        {uris: ['https://staking-api.xp.network/staking-nfts/4'], contract: '0x0267b99B8e26A8945F894010460aB83543e8d6aa'}
        )
    }
    useEffect(() => {
        // mint()
    },[])
return (
    <div className={"App"}>
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path={"/"} component={TransferNFT} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
