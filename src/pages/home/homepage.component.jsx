import React from "react";
import "./homepage.styles.scss";
import CollectionAnime from "../../components/collection-anime/collection-anime.component";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="home-contanier">
        <h1>Anime</h1>
        <CollectionAnime />
      </div>
    </div>
  );
};

export default Homepage;
