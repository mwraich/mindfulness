import React, { Component } from 'react';
import { Grommet, Box, Button } from 'grommet';
import { User } from 'grommet-icons';
import logo from './logo.jpg'

const theme = {
  global: {
    colors: {
      brand: 'white'
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      style={{ zIndex: '100' }}
      {...props}
    />
);

class HomePage extends Component {
  render() {
    return (
      <Grommet theme={theme} full>
      <Box fill>
          <AppBar>
            <img src={logo} alt="User" width="150" height="90" />
          <Button
            icon={<User />}
            onClick={() => this.props.startJourney('Profile')}
            />
          </AppBar>

        <Box
          height="small"
          width="100%"
          margin={{
            bottom: '75px',
            top: '50px'
          }}

        >
        <Button
          primary
          color="neutral-4"
          label="Create Session"
          fill
          style={{
            width: '90%',
            color: 'white'
          }}
        />
        </Box>
        <Box
          alignSelf="end"
          background="white"
          height="small"
          width="100%"
          onClick={() => console.log('yo')}

        >
        <Button
          primarys
          alignSelf="end"
          label="Join Session"
          fill
          onClick={() => this.props.startJourney('joinSession')}
          style={{
            background: '#00C781',
            width: '90%',
            color: 'white'
          }}
        />
        </Box>
      </Box>
      </Grommet>
    )
  }
}

export default HomePage;
