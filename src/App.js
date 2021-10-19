import React from "react";
import HomePage from "./HomePage/HomePage";
import MenuBlock from "./MenuBlock/MenuBlock";

class App extends React.Component {
  render() {
    return(
      <div>
        <MenuBlock />
        <main id="main">
          <HomePage/>
        </main>
      </div>
    );
  }
}

export default App;
