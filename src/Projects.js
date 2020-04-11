import React from 'react'
import projectCards from './projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faGithub } from '@fortawesome/free-brands-svg-icons'


class Projects extends React.Component {
    render() {

        function splitStack(stack) {
            return stack.map((item, index) => {
                if (item === "React") {
                    return (
                        <div className="col-sm-3 fa-3x" >
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                    )
                }
                else if (item === "JavaScript") {
                    return (
                        <div className="col-sm-3 fa-3x" >
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                    )
                }
                else if (item === "Bootstrap") {
                    return (
                        <div className="col-sm-3 fa-3x" >
                            <FontAwesomeIcon icon={faBootstrap} />
                        </div>
                    )
                }
                else if (item === "HTML") {
                    return (
                        <div className="col-sm-3 fa-3x" >
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                    )
                }
                else if (item === "CSS") {
                    return (
                        <div className="col-sm-3 fa-3x" >
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </div>
                    )
                }
                else if (item === "GitHub") {
                    return (
                        <div className="col-sm-3 fa-3x" >
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    )
                }

            })
        }


        const projCard = projectCards.map((card, index) => {


            return (
                <div>
                    <div className="row">
                        <div key={index} className="col-md-6">
                            <div className="card mb-3">
                                <div className="card-body bg-light">
                                    <h5 className="card-title">{card.title}</h5>
                                    <p className="card-text">{card.description}</p>
                                    <a href={card.link} className="btn btn-outline-primary">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="row">
                                    {splitStack(card.stack)}
                            </div>
                        </div>
                    </div>
                </div>


            )
        })

        return (
            <div className="container mt-5" >
                {projCard}
            </div>
        )
    }
}

export default Projects