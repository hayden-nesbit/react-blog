import React, { Component } from 'react'
import img from './headshot.blog.2020.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './About.css'


function About() {
        return (
            <div id="famImg" className="container">
                <div className="row mt-3">
                    <div className="col mt-5 text-center">
                        <img className="pr-2" src={img}/>
                        <h4 className="mt-4 mb-3">Hayden Nesbit</h4>
                        {/* <p className="mt-2">A blog-in-progress documenting my growth <br /> as a Full-Stack Developer.</p> */}
                        <div className="d-inline pl-4">
                            <a className="pr-4" style={{color: "#191618"}} href="https://github.com/hayden-nesbit" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            <a className="pr-4" style={{color: "#3777B5"}} href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            <a className="pr-4" style={{color: "#52AEEF"}} href="https://twitter.com/HaydenNesbit" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default About;
