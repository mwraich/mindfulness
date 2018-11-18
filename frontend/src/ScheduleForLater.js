import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import { Up } from 'grommet-icons';

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

class ScheduleForLater extends Component {
    render(){
        return (
            <Grommet theme={theme}>
            <Box align="center" border="grey">
              Time
              05: 30 PM
              <Button icon={<Up />}/>
            </Box>
            <Box background="grey" align="center">
              <h2
              style={{
                color: "white"
              }}
              > Schedule For Later </h2>
            </Box>
            </ Grommet >
        )
    }
}

export default ScheduleForLater
