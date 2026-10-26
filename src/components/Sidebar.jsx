import React from 'react'
import { Link } from 'react-router'

const Sidebar = () => {
return (
  <>
          <div className="sidebar">
          <ul>
            <li>
              <h1>FEATURED POSTS</h1>
              <Link to="/projects/1">
                <img src="/src/assets/artwork/moon-satellite.jpg" alt="" />
              </Link>
              <h2>SOYUZ TMA-M</h2>
              <span>FEBRUARY 6, 2023</span>
            </li>
            <li>
              <h1>RECENT POSTS</h1>
              <ul>
                <li>
                  <Link to="/projects/1">
                    <img src="/src/assets/artwork/alien-life.jpg" alt="" />
                  </Link>
                  <h2>ALIEN LIFE</h2>
                  <span>FEBRUARY 3, 2023</span>
                </li>
                <li>
                  <Link to="/projects/17">
                    <img src="/src/assets/artwork/galaxy.jpg" alt="" />
                  </Link>
                  <h2>THE GALAXY</h2>
                  <span>FEBRUARY 1, 2023</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
  </>
)
}

export default Sidebar