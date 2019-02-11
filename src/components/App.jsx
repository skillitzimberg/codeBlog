import React from "react";
import Header from "./Header";
import Articles from "./Articles";

function App(){
  return (
    <main>
      <Header/>
      <div class="container">
        <Articles/>
      </div>
    </main>
  );
}

export default App;