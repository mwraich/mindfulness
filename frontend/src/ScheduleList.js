import React, { Component } from 'react'
import { Group } from 'grommet-icons'
import JoinSessionButton from './JoinSessionButton'

const schedule = [
    {
        name: 'Awareness of Breathing - Lying & Sitting',
        classTime: 20,
        startTime: '5:30 pm',
        classSize: 17,
        user: "Arel"
    },
    {
        name: 'Body Scan',
        classTime: 40,
        startTime: '6:30 pm',
        classSize: 6,
        user: "Cindy"
    },
    {
        name: 'Breath, Body, Sounds, Thoughts, Emotions',
        classTime: 3,
        startTime: '7:30 pm',
        classSize: 19,
        user: "Lisa"
    },
    {
        name: 'Mindful Movement',
        classTime: 35,
        startTime: '8:00 pm',
        classSize: 14,
        user: "George"
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
                {schedule.map( ({name, classSize, classTime, startTime, user}, index) => (
                <div style={{backgroundColor: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}} >
                    <table style={{...sessionTableEven, ...sessionTableTimeTd, background: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}}></table>
                    <table style={{...sessionTableEven, background: index % 2 !== 0 ? '#6194EB': ''}}>

                            <tr>
                                <td style={{...sessionTableTd, ...sessionTableNameTd, background: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}}>{name} ({classTime} mins)</td>
                                <td style={{...sessionTableTd, ...sessionTableTimeTd, background: index % 2 !== 0 ? '#6194EB': '#c3d6e7'}} rowspan="2">{startTime}</td>
                            </tr>
                            <tr>
                                <td style={sessionTableTd}>{user} <span style={userCountSpanIcon}><Group /></span>{classSize}</td>
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