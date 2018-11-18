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

class CategoryButton extends Component {
    state = {
      selectedCategory: null,
    }

    selectCategory = (selectedCategory) => this.setState({ selectedCategory })

    render(){
      const { selectedCategory } = this.state
        return (
            <Grommet theme={theme}>
              <h3
                style={{
                  paddingTop: "1em",
                  paddingLeft: "40px"
                }}
                >
              Choose a Category
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              >
              <Button
                label="MBCT"
                style={{
                  width: "115px",
                  backgroundColor: selectedCategory === 'MBCT' ? '#6194EB': '' 
                }}
                onClick={() => this.selectCategory('MBCT')}
              />
            <div
              style={{
                width: "25px"
              }}
              >
            </div>
              <Button
                label="MBSR"
                style={{
                  backgroundColor: selectedCategory === 'MBSR' ? '#6194EB': '', 
                  width: "115px"
                  
                }}
                onClick={() => this.selectCategory('MBSR')}
              />
            </div>

            </ Grommet >
        )
    }
}

export default CategoryButton
