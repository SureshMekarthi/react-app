import { useState } from "react";

import styles from "./ListGroup.css";
import styled from "styled-components";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  OnSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, OnSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length == 0 && <p>No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              OnSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
