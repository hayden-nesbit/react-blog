import React from 'react'
import blogWeeks from './weeks.json'

class BlogPosts extends React.Component {
    render() {

        function splitParas(post){
            return post.map((item, index) => {
                return <p key={index}>{item}</p>
            })
        }

        const blogPosts = blogWeeks.map((item, index) => {
            return (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <h5>{item.date}</h5>
                    {splitParas(item.paragraphs)}
                </div>
            )
        })
        return (
            <div>
                {blogPosts}
            </div>
        )
    }
}

export default BlogPosts
