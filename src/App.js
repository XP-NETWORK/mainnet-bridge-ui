import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import TransferNFT from "./pages/TransferNFT/TransferNFT";
import * as Dapp from "@elrondnetwork/dapp";
import "./Global.css";
import "./Global-responsive.css";
import { getFactory } from "./wallet/connectors";
import { useEffect } from "react";
import { Chain } from "xp.network/dist/consts";
import { chainsConfig } from "./pages/TransferNFT/components/values";
import {ethers} from 'ethers'
import {ExtensionProvider} from "@elrondnetwork/erdjs"
import { elrondHelperFactory } from "xp.network";
import { getFactoryParams, getFromParams } from "./wallet/helpers";
import TronWeb from "tronweb";
function App() {
    const mint = async () => {
        // const factory = await getFactory()
        // const fromChain = await factory.inner(chainsConfig.Tron.Chain)
        // const provider = new TronWeb(window.tronWeb)
        // ;
        // // await fromChain.mintableEsdts(address)
        // factory.mint(fromChain, provider, 
        // {name:'ruby', uris: ['https://staking-api.xp.network/staking-nfts/4']}
        // )
    }
    useEffect(() => {
        // mint()
    },[])
return (
    <div className={"App light"}>
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path={"/"} component={TransferNFT} />
          <Route
                path="/walletconnect" /* must correspond to walletConnectRoute */
                component={() => (
                  <Dapp.Pages.WalletConnect
                    callbackRoute="/"
                    logoutRoute="/" /* redirect after logout */
                    title="Maiar Login"
                    lead="Scan the QR code using Maiar"
                  />
                )}
                exact={true}
              />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
