import "./BestCharacters.scss";
import { Button, Grid, Header, Image } from "semantic-ui-react";
import {Container} from "../Container";
import marvelImage from "../../img/marvel.png";


export const BestCharacters = () => {
  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided="vertically" stackable>
          <Grid.Column>
            <Header as="h1">Los mejores personajes de Marvel</Header>
            <Header as="h3">Disfruta del mejor contenido.</Header>
            <Button>Ver todos los personajes</Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} alt="Marvel App" />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
};
