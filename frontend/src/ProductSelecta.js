import React, { Component } from 'react'
import { DropButton } from 'grommet'

const programList = [
    'Option',
    'Option',
    'Option',
    'Option',
    'Option',
    'Option',
    'Option',
    'Option',
    'Option',

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