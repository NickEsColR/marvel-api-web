import { Button, Card, Dimmer, Icon, Image, Loader } from "semantic-ui-react";
import "./LastEvents.scss";

export const LastEvents = ({ lastEventFetch }) => {
  const { response, loading } = lastEventFetch;
  
  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando...</Loader>
      </Dimmer>
    );
  }

  const { results } = response.data;

  return results.map((event, index) => (
    <Card key={index} className="Last-event">
      <Image
        src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{event.title}</Card.Header>
        <Card.Meta>
          <span>
            <Icon name="book" />
            {event.comics.available} Comics
          </span>
        </Card.Meta>
        <Card.Description>{event.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button animated fluid as="a" href={event.urls[0].url} target="_blank" color="black">
          <Button.Content visible>Ver más</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  ));
};
