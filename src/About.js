import React, { Component } from 'react'
import img from './NesbitFam2019.png'

class About extends React.Component {
    render() {
        return (
            <div id="famImg" className="container">
                <div className="row">
                    <div className="col-md-4 offset-4 mt-5 text-center">
                        <img src={img} />
                        <p className="mt-4">Sweet little bio</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
