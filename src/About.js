import React, { Component } from 'react'
import img from './NesbitSpring2019.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class About extends React.Component {
    render() {
        return (
            <div id="famImg" className="container">
                <div className="row mt-3">
                    <div className="col mt-4 text-center">
                        <img src={img} />
                        <p className="mt-4">A blog-in-progress documenting my growth <br /> as a Full-Stack Developer.</p>
                        <div className="d-inline">
                            <a className="pr-4" style={{color: "#191618"}} href="https://github.com/hayden-nesbit?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            <a className="pr-4" style={{color: "#3777B5"}} href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a className="pr-4" style={{color: "#52AEEF"}} href="https://twitter.com/HaydenNesbit" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
