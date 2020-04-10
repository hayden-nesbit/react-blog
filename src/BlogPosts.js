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
            const difference = Math.floor(((this.state.currentTime - formattedDate)/1000/60/60/24) << 0)
            return (
                <div className="row ml-5 mt-5 ml-0">
                    <div className="col-md-2 mb-5">
                        <h2>{item.title}</h2>
                        <h6 className="text-secondary pl-2">{difference} day{difference === 1? "" : 's'} ago</h6>
                    </div>
                    <div className="col-md-8">
                        <div key={index} className="border-left border-dark mb-5 pl-4">
                            {splitParas(item.paragraphs)}
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="mx-3">
                {blogPosts}
            </div>
        )
    }
}

export default BlogPosts
