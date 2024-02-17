import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <div>
      <ExpandableText maxChar={10}>Hello world</ExpandableText>
    </div>
  );
}
export default App;
