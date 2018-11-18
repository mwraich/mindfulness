import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import CategoryButton from './CategoryButtons';
import ShareExperience from './ShareExperience';
import StartNow from './StartNow';
import ScheduleForLater from './ScheduleForLater';

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

class CreateSession extends Component {
    render(){
      return(
        <React.Fragment>
            <CategoryButton/>
            <ShareExperience/>
            <StartNow/>
            <ScheduleForLater/>
        </React.Fragment>
        )
    }
}

export default CreateSession
