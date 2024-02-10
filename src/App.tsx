import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });
  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Suresh" } });
  };
  return <div></div>;
}
export default App;
