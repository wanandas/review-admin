import React from "react";
import Anime from "../anime/anime.component";
import { db } from "../../firebase/firebase.utils";

class CollectionAnime extends React.Component {
  constructor() {
    super();
    this.state = {
      anime: []
    };
  }

  fetchAnimeReview = () => {
    db.collection("review")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.state.anime.push({ id: doc.id, ...doc.data() });
          this.setState({
            anime: this.state.anime
          });
        });
      });
  };

  componentDidMount() {
    this.fetchAnimeReview();
  }

  deleteReview = id => {
    db.collection("review")
      .doc(id)
      .delete();

    const anime = this.state.anime.filter(anime => anime.id !== id);
    this.setState({ anime: anime });
  };

  render() {
    return (
      <div className="anime-contain">
        {this.state.anime.map(anime => {
          return (
            <Anime
              key={anime.id}
              name={anime.name}
              delete={() => this.deleteReview(anime.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default CollectionAnime;
