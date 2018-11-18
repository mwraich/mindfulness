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

const Program = () => (
    <div>
        {programList.map( (program, index) => <p style={{
            padding: '0.5em'
        }} >{program} {index + 1}</p>)}
    </div>
)

class ProductSelecta extends Component {
    render(){
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '1em'
                
            }} >
            <DropButton
            dropAlign={{top: "bottom", left: "left"}}
            dropContent={<Program />}
            label="Choose a mediation"
            style={{
                left: '50% '
            }}
            />
            </div>
        )
    }
}

export default ProductSelecta