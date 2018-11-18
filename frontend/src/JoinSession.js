import React, { Component } from 'react'
import { Button } from 'grommet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const schedule = [
    {
        name: 'Activity',
        classTime: 20,
        startTime: '5:30 pm',
        classSize: 20
    },
    {
        name: 'Activity',
        classTime: 20,
        startTime: '5:30 pm',
        classSize: 20
    },
    {
        name: 'Activity',
        classTime: 20,
        startTime: '5:30 pm',
        classSize: 20
    },
    {
        name: 'Activity',
        classTime: 20,
        startTime: '5:30 pm',
        classSize: 20
    }
]

const sessionTableEven = {
    width: "100%",
    background:"#c3d6e7"
}

const sessionTableNameTd = {
    fontWeight: 500
}

const sessionTableTimeTd = {
    width: "30%",
    fontWeight: 600,
}

const sessionTableTd = {
    padding: "6px"
}

const userCountSpanIcon = {
    marginLeft: "50px",
    marginRight: "2px"
}

class JoinSession extends Component {
    render(){
        return (
            <div>
                {schedule.map( ({name, classSize, classTime}) => (
                <div>
                    <table style={{...sessionTableEven, ...sessionTableTimeTd}}></table>
                    <table style={sessionTableEven}>
                    
                            <tr>
                                <td style={{...sessionTableTd, ...sessionTableNameTd}}>{name} (15 mins)</td>
                                <td style={{...sessionTableTd, ...sessionTableTimeTd}} rowspan="2">05:30 PM</td>
                            </tr>
                            <tr>
                                <td style={sessionTableTd}>Avatar <span style={userCountSpanIcon}><FontAwesomeIcon icon="users" /></span>23</td>
                            </tr>
                    </table>
                </div>
                ))}
            </div>
        )
    }
}

export default JoinSession