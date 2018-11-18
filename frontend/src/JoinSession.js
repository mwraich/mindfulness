import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import ActivityPage from './ActivityPage.png'

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

class JoinSession extends Component {
    render(){
        return (
              <Grommet theme={theme} full>
                <img src={ActivityPage} alt="User"/>
                </Grommet>
        )
    }
}

export default JoinSession
