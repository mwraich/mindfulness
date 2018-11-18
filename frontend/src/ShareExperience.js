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

class ShareExperience extends Component {
    render(){
        return (
            <Grommet theme={theme}>
            <h3
              style={{
                paddingTop: "55px",
                paddingLeft: "40px"
              }}
              >
            Make it a shared experience with the community?
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center"
            }}
            >
            <Button
              label="Yes"
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
              label="No"
              style={{
                width: "115px"
              }}
            />
          </div>
            </ Grommet >
        )
    }
}

export default ShareExperience
