import React from 'react';
import BlogPosts from './BlogPosts'
import Navbar from './Navbar'
import Projects from './Projects'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from './projects.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: "Home" }
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
          this.state.currentPage === "Blog" ?
            <BlogPosts />
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
      </div>

    )
  };
}

export default App;
