import { Button, Card, Dimmer, Icon, Image, Loader } from "semantic-ui-react";
import "./ListComics.scss";

export const ListComics = ({ listComics, setRenderComics }) => {
  const { response, loading } = listComics;

  if (loading) {
    return (
      <Dimmer active inverted>
        <Loader inverted>Cargando...</Loader>
      </Dimmer>
    );
  }
  console.log( response.data);
  const { results } = response.data;
  console.log(results);

  const loadMoreComics = () =>{
    setRenderComics((prev) => prev + 5);
  }

  return (
    <Card.Group itemsPerRow={5}>
      {results.map((comic, index) => (
        <Card key={index} className="list-comics">
          <Image
            src={`${comic.images[0].path}.${comic.images[0].extension}`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{comic.title}</Card.Header>
            <Card.Meta>
              <span className="date">{comic.dates[0].date.split('T')[0]}</span>
            </Card.Meta>
            <Card.Description>Digital id:  {comic.id}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              animated
              fluid
              as="a"
              href={comic.urls[0].url}
              target="_blank"
              color="black"
            >
              <Button.Content visible>Ver comic</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      ))}
      <div className="container-button">
        <Button color="red" onClick={loadMoreComics}>
          <Icon name="plus"/>
          Cargar más comics
        </Button>
      </div>
    </Card.Group>
  );
};
