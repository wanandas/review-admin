import React, { useEffect } from "react";
import Anime from "../anime/anime.component";
import {
  fetchReviewStart,
  deleteReview
} from "../../redux/review/review.action";
import { createStructuredSelector } from "reselect";
import { selectReviewForView } from "../../redux/review/review.selection";
import { connect } from "react-redux";

import { deleteReviewfirebase } from "../../firebase/firebase.utils";
import { List } from "../listitem/list";

const CollectionAnime = ({ anime, fetchReviewStart, deleteReivew }) => {
  useEffect(() => {
    fetchReviewStart();
  }, [fetchReviewStart]);

  const deleteReviewredux = id => {
    deleteReviewfirebase(id);
    deleteReivew();
    fetchReviewStart();
  };

  return (
    <List pad={{ horizontal: "large" }} className="anime-contain">
      {anime.map(({ id, ...otherProps }) => {
        return (
          <Anime
            key={id}
            {...otherProps}
            delete={() => deleteReviewredux(id)}
          />
        );
      })}
    </List>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchReviewStart: () => dispatch(fetchReviewStart()),
  deleteReivew: () => dispatch(deleteReview())
});

const mapStateToProps = createStructuredSelector({
  anime: selectReviewForView
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionAnime);
