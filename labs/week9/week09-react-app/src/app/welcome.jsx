import React from 'react'
import Student from "./student";

export default function Welcome({ courseDetails }) {
    return (
        <div>
            <img src="/logo.svg" className="App-logo" alt="logo" />
            <h1>{courseDetails.title}</h1>
            <h2>{courseDetails.lab}</h2>
            <Student />
            <h5>{courseDetails.college}</h5>
        </div>
    )
}