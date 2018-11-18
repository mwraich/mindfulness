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
  state = {
    isSharedExperience: null,
  }

  setExperienceType = (isSharedExperience) => this.setState({ isSharedExperience })

    render(){
      const { isSharedExperience } = this.state
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
                width: "115px",
                backgroundColor: isSharedExperience === 'yes' ? '#6194EB': '' 
              }}
              onClick={() => this.setExperienceType('yes')}
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
                width: "115px",
                backgroundColor: isSharedExperience === 'no' ? '#6194EB': '' 
              }}
              onClick={() => this.setExperienceType('no')}
            />
          </div>
            </ Grommet >
        )
    }
}

export default ShareExperience
