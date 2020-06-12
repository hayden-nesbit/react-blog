import React, {useState} from 'react';
import BlogPosts from './BlogPosts'
import Projects from './Projects'
import Footer from './Footer'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blog.css'
import Navbar from './Navbar'
import ProjectExt from './ProjectExt'
import Resume from './resume.pdf'

function App() {

  const [view, setView] = useState("About")

  function updatePage(newPage) {
    setView(newPage)
  }


    return (
      <div className="App">
      <Navbar 
        updatePage={updatePage}
        view={view}
      />
        {
          view === "About" ?
            <About />
            :
            null
        }

        {
          view === "Blog" ?
              <main role="main" className="container">
                <div className="row">
                  <div id="blog-block" className="col-md-8 blog-main mt-4">
                    <BlogPosts />
                  </div>
                  <aside className="col-md-4 blog-sidebar mt-4">
                    <Projects />
                  </aside>
                </div>
              </main>


            :
            null
        }

        {
          view === "Resume" ?
           <Resume />
            :
            null
        }

        {
          view === "Portfolio" ?
            <ProjectExt />

            :
            null
        }
        <Footer />
      </div>
    )
  };


export default App;

