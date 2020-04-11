import React from "react"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.navbarLinks = [
            "Home",
            "Blog",
            "Projects"
        ]
    }

    render() {
        const navLinksinHTML = this.navbarLinks.map((link, index) => {
            return (
                <div key={index}>
                    <a className="pl-5 text-light"
                        onClick={() => this.props.updatePage(link)}
                        href="#"

                    >
                        {link}
                    </a>
                </div>
            )
        })

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        {navLinksinHTML}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar