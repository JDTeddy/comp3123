'use client' //use client directive is required for React components that use state or effects
import React from 'react'

export default function Student() {

    let fullName = "Jay Evans";
    let age = 21;

    let buttonClicked = () => alert("Button clicked!");

    return(
        <div>
            <h3>Student Information</h3>
            <h4>Name: {this.fullName}</h4>
            <h4>Age: {age}</h4>
            {/* <button onClick={() => console.log("Button clicked!")}>Click Me</button> */}
            {/* <button onClick={buttonClicked}>Alert</button> */}
        </div>
    );
}