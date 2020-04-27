import React from 'react';
import BlogPosts from './BlogPosts'
import Projects from './Projects'
import Footer from './Footer'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css'
import Navbar from './Navbar'
import ProjectExt from './ProjectExt'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: "About" }
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
      <div className="App">
      <Navbar 
        updatePage={this.updatePage}
      />
        {
          this.state.currentPage === "About" ?
            <About />
            :
            null
        }

        {
          this.state.currentPage === "Blog" ?
              <main role="main" className="container">
                <div className="row">
                  <div id="blog-block" className="col-md-8 blog-main mt-5">
                    <BlogPosts />
                  </div>
                  <aside className="col-md-4 blog-sidebar mt-5">
                    <Projects />
                  </aside>
                </div>
              </main>


            :
            null
        }

        {
          this.state.currentPage === "Projects" ?
            <ProjectExt />

            :
            null
        }
        <Footer />
      </div>
    )
  };
}

export default App;

