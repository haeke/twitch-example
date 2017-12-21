import React, { Component } from 'react';
import { Grid, Menu, Segment, Header } from 'semantic-ui-react';

class Whomst extends Component {
  render() {
    var info = this.props.results.map(item => {
      if (item === null) {
        return (
        <Segment key={this.props.users}>
          <Grid columns='equal'>
            <Grid.Column width={3}>
              <img
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-100x100.jpeg' alt='avatar'/>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign='left'>{this.props.users}</Header>
              <Header.Subheader>Offline</Header.Subheader>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>
                No Video
              </Header>
            </Grid.Column>
          </Grid>
        </Segment>
      );
      } else {
        var logo =  'https://static-cdn.jtvnw.net/previews-ttv/live_user_' + item.channel.display_name.toLowerCase() + '-100x100.jpg';
        return (
        <Segment key={item.channel.display_name}>
          <Grid columns='equal'>
            <Grid.Column width={3}>
              <img src={logo} alt='avatar'/>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign='left'>{item.channel.display_name}</Header>
              <Header.Subheader>Online</Header.Subheader>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>
                {item.game}
              </Header>
              <Header.Subheader>
                {item.channel.status}
              </Header.Subheader>
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
                <Menu.Item name='Everyone' />
                <Menu.Item name='Online' />
                <Menu.Item name='Offline' />
              </Menu>
            {info}
            </Grid.Column>
            <Grid.Column> Right</Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Whomst;
