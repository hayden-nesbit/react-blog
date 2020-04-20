import React from 'react'
import blogWeeks from './weeks.json'

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
                    <h6 className="text-secondary pl-2 mb-3">{difference} day{difference === 1 ? "" : 's'} ago</h6>
                    <div key={index} className="mb-5">
                        {splitParas(item.paragraphs)}
                    </div>
                </div>

            )
        })
        return (
            <div>
            <h1 className="mb-4">Blog</h1>
                {blogPosts}
            </div>
        )
    }
}



export default BlogPosts
