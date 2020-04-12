import React from 'react'
import projectCards from './projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faGithub } from '@fortawesome/free-brands-svg-icons'


class Projects extends React.Component {
    render() {

        function splitStack(stack) {
            return stack.map((item) => {
                let icon = ''
                if (item === "React") {
                    icon = <FontAwesomeIcon icon={faReact} />
                }
                else if (item === "JavaScript") {
                    icon = <FontAwesomeIcon icon={faJsSquare} />
                }
                else if (item === "Bootstrap") {
                    icon = <FontAwesomeIcon icon={faBootstrap} />
                }
                else if (item === "HTML") {
                    icon = <FontAwesomeIcon icon={faHtml5} />
                }
                else if (item === "CSS") {
                    icon = <FontAwesomeIcon icon={faCss3Alt} />
                }
                else if (item === "GitHub") {
                    icon = <FontAwesomeIcon icon={faGithub} />
                }
                return (
                    <div className="col-sm-2 fa-lg mt-2" >
                        {icon}
                    </div>
                )

            })
        }

        const projCard = projectCards.map((card, index) => {

            return (
                <div>
                    <div className="row">
                        <div key={index} className="col-md-6 offset-3">
                            <div className="card mb-3">
                                <div className="card-body bg-light">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                    <div className="row">
                                        <div className="col-sm-2 col-2">
                                            <a href={card.link} target="_blank" className="btn btn-outline-primary">View</a>
                                        </div>
                                        {splitStack(card.stack)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container mt-3" >
                {projCard}
            </div>
        )
    }
}

export default Projects