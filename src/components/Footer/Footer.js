import { Grid, Header, Image } from "semantic-ui-react";
import ImageFooter from "../../img/insider.jpeg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer-container">
      <Grid columns={2}>
        <Grid.Column>
          <Image alt="image footer" src={ImageFooter} />
        </Grid.Column>
        <Grid.Column>
          <Header size="large" as="h1">
            Esta página usa la API de Marvel para desarrolladores
          </Header>
          <Header as="h2">
            Para más información visita{" "}
            <a href="https://developer.marvel.com">Marvel Developer</a>
          </Header>
          <Header.Content>
            Todos los derechos reservados de los personajes: &copy; Marvel
          </Header.Content>
          <Header color="red" as="h3">
            Developed by <a href="https://github.com/NickEsColR">NickEsColR</a>{" "}
            &copy; 2024
          </Header>
        </Grid.Column>
      </Grid>
    </div>
  );
};
