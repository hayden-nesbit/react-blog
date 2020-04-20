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

                // <div key={index} className="card mb-4 shadow-sm" >
                //     <h5 className="card-title p-3 text-dark"></h5>
                //     <div className="card-body">
                //         <p className="card-text">{card.description}</p>
                //         <div className="d-flex justify-content-between align-items-center">
                //             <div className="btn-group">
                <div>
                    <a key={index} href={card.link} target="_blank">{card.title}</a><br /><br />
                </div>
                //             <small className="text-muted">{splitStack(card.stack)}</small>
                //         </div>
                //     </div>
                // </div>

            )
        })

        return (
            <div className="mt-4">
                <h3 className="mb-3">Projects</h3>
                {projCard}
            </div>


        )
    }
}

export default Projects

// {splitStack(card.stack)}