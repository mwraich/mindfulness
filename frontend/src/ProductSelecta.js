import React, { Component } from 'react'
import { DropButton } from 'grommet'

const programList = [
  "Three-Minute Breathing Space",
  "Awareness of Breathing - Lying & Sitting (20 mins)",
  "Awareness of Breathing (10 mins)",
  "Body Scan (40 mins)",
  "Breath, Body, Sounds, Thoughts, Emotions (30 mins)",
  "Mindful Movement (35 mins)",
]

const Program = (props) => (
    <div>
        {programList.map( (program, index) => <p 
        onClick={() => props.selectProduct(`${program} ${index}`)}
        style={{
            padding: '0.5em'
        }} >{program} {index + 1}</p>)}
    </div>
)

class ProductSelecta extends Component {

    state = {
        selectedProduct: 'Choose a mediation',
      }
  
      selectProduct = (selectedProduct) => this.setState({ selectedProduct })
    render(){
        const { selectedProduct } = this.state
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1em'
                
            }} >
            <DropButton
            dropAlign={{top: "bottom", left: "left"}}
            dropContent={<Program selectProduct={this.selectProduct}  />}
            label={selectedProduct}
            style={{
                left: '50% '
            }}
            />
            </div>
        )
    }
}

export default ProductSelecta