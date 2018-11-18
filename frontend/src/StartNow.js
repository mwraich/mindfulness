import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';

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

class StartNow extends Component {
    render(){
        return (
            <Grommet theme={theme}>
            <div
              style={{
                height: "40px"
              }}
              >
            </div>
            <Box background="grey" align="center">
              <h2
              style={{
                color: "white"
              }}
              onClick={() => this.props.startJourney('activityPage')}
              > Start Now </h2>
            </Box>
            <h4
            style={{
              textAlign: "center"
            }}
            > Or </h4>

            </ Grommet >
        )
    }
}

export default StartNow
