import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';

class CustomHeader extends Component {
  render() {
    return (
      <Grid centered columns={5}>
        <Grid.Column>
          <Header as='h1'>
            <Icon name='settings' />
            <Header.Content>
              Whomst
              <Header.Subheader>
                See whomst'd online
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default CustomHeader;
