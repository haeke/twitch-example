import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

class CustomHeader extends Component {
  render() {
    return (
      <Grid centered columns={5}>
        <Grid.Column>
          <Header as='h1'>
            <Icon name='video camera'/>
            <Header.Content>
              Who's online
              <Header.Subheader>
                "Whomst'd" streaming
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CustomHeader;
