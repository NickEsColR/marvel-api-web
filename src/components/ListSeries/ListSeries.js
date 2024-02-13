import { Button, Card, Dimmer, Icon, Image, Loader } from "semantic-ui-react";
import "./ListSeries.scss";

export const ListSeries = ({ listSeries }) => {
  const { loading, response } = listSeries;

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando...</Loader>
      </Dimmer>
    );
  }
  console.log(response);
  const { results } = response.data;
  console.log(results);

  return (
    <Card.Group itemsPerRow={5}>
      {results.map((serie, index) => (
        <Card key={index} className="list-series">
          <Image
            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            wrapped
            alt={serie.title}
            ui={false}
          />
          <Card.Content>
            <Card.Header>{serie.title}</Card.Header>
            <Card.Meta>
              <span>
                <Icon name="id badge" />&nbsp;&nbsp;
                {serie.creators.available} creadores
              </span>
            </Card.Meta>
            <Card.Meta>
              <span>
                <Icon name="users" />&nbsp;&nbsp;
                {serie.characters.available} personajes
              </span>
            </Card.Meta>
            <Card.Description>{serie.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              animated
              fluid
              as="a"
              href={serie.urls[0].url}
              target="_blank"
              color="black"
            >
              <Button.Content visible>Ver más</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};
