import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import TransferNFT from "./pages/TransferNFT/TransferNFT";
import "./Global.css";
import { getFactory } from "./wallet/connectors";
import { useEffect } from "react";
import { Chain } from "xp.network/dist/consts";
import { chainsConfig } from "./pages/TransferNFT/components/values";
import {ethers} from 'ethers'
import {ExtensionProvider} from "@elrondnetwork/erdjs"
import { elrondHelperFactory } from "xp.network";
import { getFactoryParams, getFromParams } from "./wallet/helpers";
function App() {
    const mint = async () => {
        const factory = await getFactory()
        const fromChain = await factory.inner(chainsConfig.Elrond.Chain)
        const provider = ExtensionProvider.getInstance()
        ;
        const address = await ExtensionProvider.getInstance().getAddress()
        // await fromChain.mintableEsdts(address)
        factory.mint(fromChain, provider, 
        {identifier: 'XPNFT-9d19d5"', name:' ruby', uris: ['https://staking-api.xp.network/staking-nfts/4']}
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
