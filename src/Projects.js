import React from 'react'
import projectCards from './projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Elsewhere from './Elsewhere.js'


class Projects extends React.Component {
    render() {

        const projCard = projectCards.map((card, index) => {

            return (

                <a key={index} href={card.link} target="_blank">{card.title}<br /></a>

            )
        })

        return (
            <div id="projContainer">
                <Elsewhere />
                <div className="p-4">
                    <h4 className="font-italic">Portfolio</h4>
                    <ol className="list-unstyled mb-0">
                        {projCard}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Projects

