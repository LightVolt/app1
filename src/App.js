import { userContext } from "./context";
import React from "react";
import Content from "./context-content";

function App() {
  return(
    <userContext.Provider value={'Tom Jerry'}>
      <Content/>
    </userContext.Provider>
  )
}

export default App;
