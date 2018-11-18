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
              > Join Session </h2>
            </Box>

            </ Grommet >
        )
    }
}

export default StartNow