import React from 'react'
import projectCards from './projects.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faReact, faJsSquare, faBootstrap, faHtml5, faCss3Alt, faPhp, faLaravel, faGit } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faDatabase } from '@fortawesome/free-solid-svg-icons'
import Elsewhere from './Elsewhere.js'
import './Project.css'
import Fb from './firebase.png'


function ProjectExt() {

        function splitStack(stack) {
            return stack.map((item) => {
                let icon = ''
                if (item === "React") {
                    icon = <FontAwesomeIcon style={{color: "#61DBFB"}} icon={faReact} />
                }
                else if (item === "JavaScript") {
                    icon = <FontAwesomeIcon style={{color: "#EAD64E"}} icon={faJsSquare} />
                }
                else if (item === "Bootstrap") {
                    icon = <FontAwesomeIcon style={{color: "#543B79"}} icon={faBootstrap} />
                }
                else if (item === "HTML") {
                    icon = <FontAwesomeIcon style={{color: "#E54C21"}} icon={faHtml5} />
                }
                else if (item === "CSS") {
                    icon = <FontAwesomeIcon style={{color: "#264EE4"}} icon={faCss3Alt} />
                }
                else if (item === "GitHub") {
                    icon = <FontAwesomeIcon icon={faGithub} />
                }
                else if (item === "PHP") {
                    icon = <FontAwesomeIcon style={{color: "#8690BA"}} icon={faPhp} />
                }
                else if (item === "Laravel") {
                    icon = <FontAwesomeIcon style={{color: "#E62D1F"}} icon={faLaravel} />
                }
                else if (item === "Firebase") {
                    icon = <FontAwesomeIcon icon={faCodeBranch} style={{color: "#F99504"}}/>
                }
                else if (item === "MySQL") {
                    icon = <FontAwesomeIcon icon={faDatabase} style={{color: "#686A71"}}/>
                }
                else if (item === "Git") {
                    icon = <FontAwesomeIcon style={{color: "#E74D33"}} icon={faGit} />
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
                    <h4><a style={{color: "#212529"}} key={index} href={card.link} target="_blank">{card.title}</a></h4>
                    <p>{card.description}</p>
                    <p>{splitStack(card.stack)}</p>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div id="project-block" className="col-md-8 blog-main mt-4">
                    <div className="row">
                        {projCard}
                    </div>
                    </div>
                    <aside className="col-md-4 blog-sidebar mt-4">
                        <Elsewhere />
                    </aside>
                </div>
            </div>

        )
    }


export default ProjectExt;