import React, { Component } from 'react'
import { Grommet, Box, Button, Clock } from 'grommet';
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
              <Clock type="digital" />
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
