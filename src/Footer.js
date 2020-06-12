import React from 'react'
import './Footer.css'
import img from './awesomelogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


class Footer extends React.Component {
    render() {
        return (
            <footer className="footer mt-auto py-4">
            <div className="container text-left">
              {/* <h6 className="text-white">Hayden Nesbit</h6> */}
              <span className="pt-1 text-muted">Awesome Inc. 2020 Bootcamp</span>
              <a className="pr-4 pl-3 text-danger float-right" href="mailto:hdnesbit@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
              <p className="pt-1 text-muted float-right">Contact me</p>

            </div>
          </footer>
        )
    }
}

export default Footer