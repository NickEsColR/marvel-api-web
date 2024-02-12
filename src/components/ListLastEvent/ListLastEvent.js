import "./ListLastEvent.scss";
import { Card, Container, Header } from "semantic-ui-react";
import { useFetch } from "../../hooks/useFetch";

export const ListLastEvent = () => {
  const lastEventFetch = useFetch(
    `${process.env.REACT_APP_BASE_URL}
    /events?ts=${process.env.REACT_APP_TS}
    &apikey=${process.env.REACT_APP_API_KEY}
    &hash=${process.env.REACT_APP_HASH_ID}
    &orderBy=startDate
    &limit=5`
  );
  return (
    <div className="container-list-last-events">
      <Header size="large">Últimos eventos</Header>
      <Container bg="light">
        <Card.Group itemsPerRow={5}>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
          <p>Los eventos...</p>
        </Card.Group>
      </Container>
    </div>
  );
};
