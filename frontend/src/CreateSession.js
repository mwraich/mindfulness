import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import CategoryButton from './CategoryButtons';
import ProductSelecta from './ProductSelecta'
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
      size: '20px',
      color: 'white',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='h2'
    background='grey'
    align='center'
    style={{ zIndex: '100', color: '#fff', padding: '20px' }}
    {...props}
  />
);

class CreateSession extends Component {
    render(){ 
      return(
        <React.Fragment>
            <CategoryButton/>
            <ProductSelecta />
            <ShareExperience/>
            <StartNow startJourney={this.props.startJourney}/>
            <ScheduleForLater/>
            <AppBar onClick={() => this.props.startJourney('profile')}>
            Schedule for Later
            </AppBar>
        </React.Fragment>
        )
    }
}

export default CreateSession
