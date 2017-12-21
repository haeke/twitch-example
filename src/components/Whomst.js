import React, { Component } from 'react';
import { Grid, Menu, Segment, Header } from 'semantic-ui-react';

class Whomst extends Component {
  render() {
    var info = this.props.results.map(item => {
      if (item === null) {
        return (
        <Segment color="grey" key={this.props.users}>
          <Grid columns='equal'>
            <Grid.Column width={3}>
              <img
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-100x100.jpeg'
                alt='avatar'/>
            </Grid.Column>
            <Grid.Column>
              <Header textAlign='left'>{this.props.users[1]}</Header>
              <Header.Subheader>Offline</Header.Subheader>
            </Grid.Column>
            <Grid.Column>
              <Header as='h2'>
                No Video
              </Header>
              <Header.Subheader>Going online at some point in time</Header.Subheader>
            </Grid.Column>
          </Grid>
        </Segment>
      );
      } else {
        var logo =  'https://static-cdn.jtvnw.net/previews-ttv/live_user_' + item.channel.display_name.toLowerCase() + '-100x100.jpg';
        return (
        <Segment color='grey' key={item.channel.display_name}>
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
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={8}>
              <Menu pointing secondary>
                <Header as='h1'>User List</Header>
              </Menu>
              {info}
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Whomst;
