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
              Set a time: <Clock
               precision="minutes"
               type="digital" />
              <Button icon={<Up />}/>
            </Box>
            </ Grommet >
        )
    }
}

export default ScheduleForLater
