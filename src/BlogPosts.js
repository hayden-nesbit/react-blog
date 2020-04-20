import React from 'react'
import blogWeeks from './weeks.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

class BlogPosts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTime: null
        }
    }


    componentDidMount() {

        this.setState({
            currentTime: new Date()
        })
    }



    render() {

        function splitParas(post) {
            return post.map((item, index) => {
                if (index % 2 === 0) {
                    return <h5 key={index}>{item}</h5>
                } else {
                    return <p key={index}>{item}</p>
                }
            })
        }


        const blogPosts = blogWeeks.map((item, index) => {
            const formattedDate = new Date(item.date)
            const difference = Math.floor(((this.state.currentTime - formattedDate) / 1000 / 60 / 60 / 24) << 0)

            return (
                <div>
                    <h4 className="text-primary mb-2 pl-0">{item.subtitle}</h4>
                    <h6 className="text-secondary mb-4">{difference} day{difference === 1 ? "" : 's'} ago</h6>
                    <div key={index} className="mb-5">
                        {splitParas(item.paragraphs)}
                        <hr />
                    </div>
                </div>

            )
        })
        return (
            <div className="mt-5 pl-5 mr-0 pr-0">
                <div className="d-inline p-1 float-right">
                    <a className="pr-3" href="https://twitter.com/HaydenNesbit"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a className="pr-3" href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a href="https://github.com/hayden-nesbit?tab=repositories"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>
                <h1 className="mb-4">Blog</h1>
                {blogPosts}
            </div>
        )
    }
}



export default BlogPosts
