import { useState } from "react";
import produce from "immer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
function App() {
  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat soluta
        et recusandae cupiditate necessitatibus asperiores optio eaque quas,
        animi vero nihil velit est cumque similique hic. Tempore nihil iure
        velit autem vero hic optio, cupiditate officia unde porro, ducimus non,
        placeat magnam vel molestiae ut laudantium quaerat exercitationem?
        Reprehenderit placeat voluptate, perferendis aut consequuntur laborum
        error aliquam dignissimos ipsam adipisci repudiandae ullam aspernatur
        excepturi in, velit totam numquam explicabo accusamus ab? Placeat
        ratione eligendi odit excepturi officiis perferendis dolore voluptatum
        molestiae odio neque ipsum rem, cupiditate, ipsam provident a quas
        voluptatibus, voluptate delectus ab officia! Voluptatum accusamus
        laudantium dolor excepturi?
      </ExpandableText>
    </div>
  );
}
export default App;
