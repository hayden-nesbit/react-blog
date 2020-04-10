import React from 'react';
import BlogPosts from './BlogPosts'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: "Blog" }
    this.updatePage = this.updatePage.bind(this)
  }

  updatePage(newPage) {
    console.log(newPage)
    this.setState({
      currentPage: newPage
    })
  }

  render() {
    return (
      <div className="Blog">
        <Navbar
          updatePage={this.updatePage}
        />

        {
          this.state.currentPage === "Blog" ?
          <BlogPosts />
            :
            null
        }
        {
          this.state.currentPage === "Projects" ?
            {/* <Projects /> */}
            :
            null
        }
      </div>
    
  )
  };
}

export default Blog;
