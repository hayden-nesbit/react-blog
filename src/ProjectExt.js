import React from 'react'
import projectCards from './projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faPhp, faLaravel, faGit } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons'


class ProjectExt extends React.Component {
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
                else if (item === "PHP") {
                    icon = <FontAwesomeIcon icon={faPhp} />
                }
                else if (item === "Laravel") {
                    icon = <FontAwesomeIcon icon={faLaravel} />
                }
                else if (item === "Firebase") {
                    icon = <FontAwesomeIcon icon={faCodeBranch} />
                }
                else if (item === "MySQL") {
                    icon = <FontAwesomeIcon icon={faDatabase} />
                }
                else if (item === "Git") {
                    icon = <FontAwesomeIcon icon={faGit} />
                }

                return (
                    <div className="col-sm-2 fa-lg mt-2 pl-0 d-inline" >
                        {icon}
                    </div>
                )

            })
        }

        const projCard = projectCards.map((card, index) => {

            return (
                <div className="mb-5">
                    <h5><a key={index} href={card.link} target="_blank">{card.title}</a></h5>
                    <p>{card.description}</p>
                    <p>{splitStack(card.stack)}</p>
                </div>
            )
        })

        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col-md-8 blog-main mt-2">
                        {projCard}
                    </div>
                    <aside className="col-md-4 blog-sidebar mt-1">
                        <div className="p-4 mb-3 mt-2 bg-light rounded">
                            <div>
                                <h4 className="font-italic">Elsewhere</h4>
                            </div>
                            <div className="d-inline">
                                <a className="pr-4" href="https://github.com/hayden-nesbit?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                                <a className="pr-4" href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                                <a className="pr-4" href="https://twitter.com/HaydenNesbit" target="_blank"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

        )
    }
}

export default ProjectExt;