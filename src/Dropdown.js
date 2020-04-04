import React from 'react'

class Dropdown extends React.Component {
    render() {
        return (
            <div>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Prework Blogs</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item active" href="#">Week 1</a>
                        <a class="dropdown-item" href="pre2.html">Week 2</a>
                        <a class="dropdown-item" href="pre3.html">Week 3</a>
                        <a class="dropdown-item" href="pre4.html">Week 4</a>
                    </div>
                </li>
            </div>
        )
    }
}

export default Dropdown
