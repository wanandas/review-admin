import React from "react";
import CollectionAnime from "../../components/collection-anime/collection-anime.component";
import { Grommet, Heading, Box } from "grommet";
import "./homepage.styles.scss";
import myTheme from "../../components/theme/mytheme";

const Homepage = () => {
  return (
    <Grommet theme={myTheme} className="homepage">
      <Box align="center" pad="small">
        <Heading level="2"> Anime </Heading>
      </Box>
      <CollectionAnime />
    </Grommet>
  );
};

export default Homepage;
