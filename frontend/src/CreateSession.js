import React, { Component } from 'react'
import { Grommet, Box, Button } from 'grommet';
import CategoryButton from './CategoryButtons';
const theme = {
  global: {
    colors: {
      brand: '#00C781'
    },
    font: {
      family: 'Roboto',
      size: '20px'
    },
  },
};

class CreateSession extends Component {
    render(){
      return(
            <CategoryButton/>
        )
    }
}

export default CreateSession
