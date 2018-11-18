import React, { Component } from 'react'
import { Group } from 'grommet-icons'
import JoinSessionButton from './JoinSessionButton'

const schedule = [
    {
        name: 'Activity 1',
        classTime: 20,
        startTime: '5:30 pm',
        classSize: 20
    },
    {
        name: 'Activity 2',
        classTime: 20,
        startTime: '6:30 pm',
        classSize: 20
    },
    {
        name: 'Activity 3',
        classTime: 20,
        startTime: '7:30 pm',
        classSize: 20
    },
    {
        name: 'Activity 4',
        classTime: 20,
        startTime: '8:30 pm',
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

class ScheduleList extends Component {
    render(){
        return (
            <div>
                <h3>Today</h3>
                {schedule.map( ({name, classSize, classTime}, index) => (
                <div style={{backgroundColor: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}} >
                    <table style={{...sessionTableEven, ...sessionTableTimeTd, background: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}}></table>
                    <table style={{...sessionTableEven, background: index % 2 !== 0 ? '#6194EB': ''}}>
                    
                            <tr>
                                <td style={{...sessionTableTd, ...sessionTableNameTd, background: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}}>{name} (15 mins)</td>
                                <td style={{...sessionTableTd, ...sessionTableTimeTd, background: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}} rowspan="2">05:30 PM</td>
                            </tr>
                            <tr>
                                <td style={sessionTableTd}>Avatar <span style={userCountSpanIcon}><Group /></span>23</td>
                            </tr>
                    </table>
                </div>
                ))}
                <JoinSessionButton />
            </div>
        )
    }
}

export default ScheduleList