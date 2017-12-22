import React, { Component } from 'react';
import { Grid, Header, Divider, Card } from 'semantic-ui-react';

class Whomst extends Component {
  render() {
    var info = this.props.results.map((item, index) => {
      if (item === null) {
        return (
            <Card key={this.props.users[index]}>
              <img className="logo"
                src='https://static-cdn.jtvnw.net/jtv_user_pictures/imaqtpie-profile_image-8efb10b7bed60d76-200x100.jpeg'
                alt='avatar'/>
              <Card.Content>
                <Card.Header>
                  <Header textAlign='left'>{this.props.users[index]}</Header>
                  <Header.Subheader>Offline</Header.Subheader>
                </Card.Header>
                <Card.Description>
                  <Header as='h2'>
                    No Active Stream
                  </Header>
                  <Header.Subheader>
                    Will be online again soon
                  </Header.Subheader>
                </Card.Description>
              </Card.Content>
            </Card>
      );
      } else {
        var logo =  'https://static-cdn.jtvnw.net/previews-ttv/live_user_' + item.channel.display_name.toLowerCase() + '-200x100.jpg';
        return (
            <Card key={item.channel.display_name}>
              <img className="logo" src={logo} alt='avatar'/>
              <Card.Content>
                <Card.Header>
                  <a href={item.channel.url}>
                    <Header textAlign='left'> {item.channel.display_name}</Header>
                  </a>
                  <Header.Subheader>Online</Header.Subheader>
                </Card.Header>
                <Card.Description>
                  <Header as='h2'>
                    {item.game}
                  </Header>
                  <Header.Subheader>
                    {item.channel.status}
                  </Header.Subheader>
                </Card.Description>
              </Card.Content>
            </Card>
      );
      }
    });
    return (
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column width={9}>
              <Divider />
              <Grid columns={2} divided>
                {info}
              </Grid>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default Whomst;
