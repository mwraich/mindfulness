import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import profilePage from './profilePage.png'

const theme = {
  global: {
    colors: {
      brand: '#00C781'
    },
    font: {
      family: 'Poppins',
      size: '20px'
    },
  },
};

class Profile extends Component {
    render(){
      return(
        <Grommet theme={theme} full>
          <img src={profilePage}
            width="100%"
            alt="User"/>
        </Grommet>
        )
    }
}

export default Profile
