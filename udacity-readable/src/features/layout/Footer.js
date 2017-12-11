import React from "react";
import { Segment, Container, Grid, List, Header, Icon } from "semantic-ui-react";
import "../../App.css";

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container className="App-footer">
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={16}>
              <Header as="h4" inverted>
                Anthony George - Udacity Redux Project
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
