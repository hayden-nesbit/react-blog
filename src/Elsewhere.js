import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


function Elsewhere() {
    return (
        <div className="p-4 mb-3 mt-2 bg-light rounded">
            <div>
                <h4 className="font-italic">Elsewhere</h4>
            </div>
            <div className="d-inline">
                <a className="pr-4" style={{ color: "#191618" }} href="https://github.com/hayden-nesbit" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a className="pr-4" style={{ color: "#3777B5" }} href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a className="pr-4" style={{ color: "#52AEEF" }} href="https://twitter.com/HaydenNesbit" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
            </div>
        </div>
    )
}

export default Elsewhere;