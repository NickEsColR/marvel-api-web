import { useState } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import { ListComics } from "../components/ListComics";
import { useFetch } from "../hooks/useFetch";

export const Comics = () => {
  const [renderComics, setRenderComics] = useState(10);
  const url = `${process.env.REACT_APP_BASE_URL}comics?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`

  console.log(url);
  const listComics = useFetch(
    url
  );

  return (
    <div className="comcis-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2" className="list-header">Los mejores comics</Header>
            <ListComics listComics={listComics} setRenderComics={setRenderComics}/>
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
};
