import React from 'react'
import projectCards from './projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'


class Projects extends React.Component {
    render() {

        const projCard = projectCards.map((card, index) => {

            return (

                <a key={index} href={card.link} target="_blank">{card.title}<br /></a>

            )
        })

        return (
            <div>
                <div className="p-4 mb-3 mt-2 bg-light rounded">
                <div>
                    <h4 className="font-italic">Elsewhere</h4>
                </div>
                <div className="d-inline">
                    <a className="pr-4" href="https://github.com/hayden-nesbit?tab=repositories"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    <a className="pr-4" href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a className="pr-4" href="https://twitter.com/HaydenNesbit"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                </div>
                </div>

                <div className="p-4">
                    <h4 className="font-italic">Projects</h4>
                    <ol className="list-unstyled mb-0">
                        {projCard}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Projects

    // {splitStack(card.stack)}

