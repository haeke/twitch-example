import React, { Component } from 'react';
import { Grid, Menu, Segment, Header } from 'semantic-ui-react';

class Whomst extends Component {

  render() {
    var info = this.props.results.map(item => {
      if (item === null) {
        console.log('nothing to see here');
      } else {
        return (
        <Segment key={item.channel.display_name}>
          <Grid columns='equal'>
            <Grid.Column width={3}>
              <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-100x100.jpeg' alt='avatar'/>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign='left'>{item.channel.display_name}</Header>
              <Header.Subheader>Online</Header.Subheader>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>
                {item.game}
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
      );
      }
    });
    return (
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column> Left
            </Grid.Column>
            <Grid.Column width={8}>
              <Menu pointing secondary>
                <Menu.Item name='first' />
                <Menu.Item name='second' />
                <Menu.Item name='third' />
                <Menu.Item name='fourth' />
              </Menu>
              {info}
              <Segment>
                <Grid columns='equal'>
                  <Grid.Column width={3}>
                    <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-100x100.jpeg' alt='avatar'/>
                  </Grid.Column>
                  <Grid.Column>
                    <Header textAlign='left'>First</Header>
                    <Header.Subheader>Offline</Header.Subheader>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2'>
                      League of Legends
                    </Header>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment>
                <Grid columns='equal'>
                  <Grid.Column width={3}>
                    <img src='https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-100x100.jpeg' alt='avatar'/>
                  </Grid.Column>
                  <Grid.Column>
                    <Header textAlign='left'>First</Header>
                    <Header.Subheader>Offline</Header.Subheader>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2'>
                      League of Legends
                    </Header>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Grid.Column>
            <Grid.Column> Right</Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Whomst;
