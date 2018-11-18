import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import CategoryButton from './CategoryButtons';
import ShareExperience from './ShareExperience';
import StartNow from './StartNow';
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
        </React.Fragment>
        )
    }
}

export default CreateSession
