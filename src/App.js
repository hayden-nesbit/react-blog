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
        <TopNav />

        {/* {
          this.state.currentPage === "Home" ?
            <Home />
            :
            null
        } */}

        {
          this.state.currentPage === "Blog" ?

          <div className="container ml-0 mr-2 pr-2">
              <div className="row">
                <div className="col-md-3 col-sm-3 pl-5 bg-light">
                <ProjNav />
                </div>
                
                <div className="col-md-9 col-sm-9 pl-2 pr-3">
                <h1 className="mb-2 mt-4 pl-5">Blog</h1>
                  <BlogPosts />
                </div>
              </div>
            </div>


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
