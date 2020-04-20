import React from 'react';
import BlogPosts from './BlogPosts'
import Navbar from './Navbar'
import Projects from './Projects'
import Footer from './Footer'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from './projects.json'

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
        <Navbar
          updatePage={this.updatePage}
        />

        {
          this.state.currentPage === "Home" ?
            <Home />
            :
            null
        }

        {
          this.state.currentPage === "Blog" ?

            <div className="container ml-0">
              <div className="row">
                <div className="col-md-4 pl-5 bg-light">
                  <Projects />
                </div>
                <div className="col-md-8 pl-5 mt-4 ">
                  <BlogPosts />
                </div>
              </div>
            </div>

            :
            null
        }

        {
          this.state.currentPage === "Projects" ?
            <Projects />

            :
            null
        }
        <Footer />
        ></div>
    )
  };
}

export default App;
