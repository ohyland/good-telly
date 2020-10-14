import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

// 3rd party imports
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Container
        maxWidth="sm"
        style={{ backgroundColor: "lavender", height: "100vh" }}
      >
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Container>
    </div>
  );
}

export default App;
