import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Web3 from "web3";
import * as Dapp from "@elrondnetwork/dapp";
import { network, walletConnectBridge, walletConnectDeepLink } from "../src/pages/TransferNFT/components/values"

function getLibrary(provider) {
  return new Web3(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Dapp.Context
          config={{
            network, // provide connection information
            walletConnectBridge, // the server used to relay data between the Dapp and the Wallet
            walletConnectDeepLink, // link used to open the Maiar app with the connection details
          }}
        >
          <Provider store={store}>
          <App />
        </Provider>
      </Dapp.Context>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
