import React from 'react'
import './Footer.css'
import img from './awesomelogo.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer mt-auto py-4">
            <div className="container text-left">
              {/* <h6 className="text-white">Hayden Nesbit</h6> */}
              <span className="text-muted">Awesome Inc. 2020 Bootcamp</span>
            </div>
          </footer>
        )
    }
}

export default Footer