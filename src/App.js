import React from 'react';
import BlogPosts from './BlogPosts'
import ProjNav from './ProjectNav'
import Projects from './Projects'
import Footer from './Footer'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './TopNav'
import './Blog.css'

class App extends React.Component {
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
      <div className="App">


        {/* {
          this.state.currentPage === "Home" ?
            <Home />
            :
            null
        } */}

        {
          this.state.currentPage === "Blog" ?
              <main role="main" className="container">
              <h1 className="pb-3 mb-2 mt-4 border-bottom">
                    Blog
                </h1>
                <div className="row">
                  <div id="blog-block" className="col-md-8 blog-main">
                    <BlogPosts />
                  </div>
                  <aside className="col-md-4 blog-sidebar">
                    <Projects />
                  </aside>
                </div>
              </main>


            :
            null
        }

        {/* {
          this.state.currentPage === "Projects" ?
            <Projects />

            :
            null
        } */}
        <Footer />
      </div>
    )
  };
}

export default App;

