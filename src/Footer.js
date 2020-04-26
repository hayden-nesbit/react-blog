import React from 'react'
import './Footer.css'
import img from './awesomelogo.png'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer mt-auto py-4 bg-dark">
            <div className="container text-center">
              <span className="text-white">Awesome Inc. 2020 Bootcamp</span>
            </div>
          </footer>
        )
    }
}

export default Footer