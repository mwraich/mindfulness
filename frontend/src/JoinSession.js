import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import ActivityPage from './ActivityPage.png'
import CategoryButton from './CategoryButtons'
import ProductSelecta from './ProductSelecta'
import ScheduleList from './ScheduleList'

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
          <React.Fragment>
            <CategoryButton />
            <ProductSelecta /> 
            <ScheduleList />
          </React.Fragment>
        )
    }
}

export default JoinSession
