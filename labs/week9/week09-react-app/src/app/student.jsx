'use client' //use client directive is required for React components that use state or effects
import React, { Component } from 'react'

// Class component - keeps its data in state
export default class Student extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      studentId: "101553623",
      name: "Jared-Ian Duldulao"
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.studentId}</h3>
        <h4>{this.state.name}</h4>
      </div>
    )
  }
}