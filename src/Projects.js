import React from 'react'
import projectCards from './projects.json'

class Projects extends React.Component {

    render() {

        const projCard = projectCards.map((card, index) => {
            return (
                <div key={index} className="row">
                    <div className="col-sm-6">
                        <div className="card mb-3">
                            <div className="card-body bg-light">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                                <a href={card.link} className="btn btn-outline-primary">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })



        return (
            <div className="container mt-5">
                {projCard}
            </div>
        )
    }
}

export default Projects