/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ListItem } from "../listitem/listitem";
import { Text, Anchor } from "grommet";

const Anime = props => {
  return (
    <ListItem className="anime">
      <Text>{props.name}</Text>
      <Anchor className="btn" onClick={props.delete} color="#111">
        delete
      </Anchor>
    </ListItem>
  );
};

export default Anime;
