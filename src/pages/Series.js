import { useFetch } from "../hooks/useFetch";
import { Grid, Header } from "semantic-ui-react";
import { Container } from "../components/Container";
import { ListSeries } from "../components/ListSeries";

export const Series = () => {
  const url = `${process.env.REACT_APP_BASE_URL}series?ts=${process.env.REACT_APP_TS}&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startYear&limit=20`;

  const listSeries = useFetch(url);

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image">
          <Grid>
            <Grid.Column>
              <Container bg="light">
                <Header as="h2">Las últimas series de Marvel</Header>
                <ListSeries listSeries={listSeries} />
              </Container>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
};
