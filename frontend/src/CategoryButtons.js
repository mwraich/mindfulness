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
    render(){
        return (
            <Grommet theme={theme}>
              <h3
                style={{
                  paddingTop: "55px",
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
                  width: "115px"
                }}
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
                  width: "115px"
                }}
              />
            </div>

            </ Grommet >
        )
    }
}

export default CategoryButton
