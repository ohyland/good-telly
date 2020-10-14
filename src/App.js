import React from "react";
import Header from "./Header";
import Main from "./Main";
import { CssBaseline } from "@material-ui/core";

// 3rd party imports

function App() {
  return (
    <CssBaseline>
      <Header></Header>
      <Main></Main>
    </CssBaseline>
  );
}

export default App;
