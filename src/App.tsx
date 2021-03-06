import React from "react";
import { Router } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Web3Provider from "providers/Web3Provider";
import UploadContext from "providers/UploadProvider";
import Routes from "views/Routes";
import Header from "components/Header";
import Footer from "components/Footer";
import { history } from "routes";

const App: React.FC = () => {
  return (
    <Web3Provider.Provider>
      <UploadContext.Provider>
        <Router history={history}>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <Header />

            {/* Content of the dapp*/}
            <Container>
              <Routes />
            </Container>
            <div style={{ flexGrow: 1 }} />

            <Footer />
          </div>
        </Router>
      </UploadContext.Provider>
    </Web3Provider.Provider>
  );
};

export default App;
