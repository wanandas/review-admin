/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./anime.styles.scss";

const Anime = props => {
  return (
    <div className="anime">
      <div className="anime-name">{props.name}</div>
      <div className="btn-group">
        <a className="btn" onClick={props.delete}>
          delete
        </a>
      </div>
    </div>
  );
};

export default Anime;
