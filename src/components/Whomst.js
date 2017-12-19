import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';

class Whomst extends Component {
  render() {
    return (
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={8}>
              <Menu fluid vertical>
                <Menu.Item>First</Menu.Item>
                <Menu.Item>Second</Menu.Item>
                <Menu.Item>Third</Menu.Item>
                <Menu.Item>Fourth</Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Whomst;
