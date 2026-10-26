import HeaderMenu from "../components/HeaderMenu"

const About = () => {
  return (
    <>
    <div id="page">
    <HeaderMenu/>
  <div id="body" className="about">
    <div className="header">
      <div>
        <h1>About The Mission</h1>
        <h2>Exploring the Final Frontier</h2>
        <p>
              Welcome to our Space Exploration Hub. We are dedicated to cataloging, 
              sharing, and discussing the most ambitious projects in modern astrophysics 
              and space travel. Whether you are tracking the progress of the Mars rovers, 
              studying the James Webb Telescope, or following the Artemis missions, 
              you will find it here.
        </p>
      </div>
    </div>
    <div className="body">
      <div>
        <img src="/src/assets/artwork/earth-satellite.jpg" alt="" />
        <h2>Built by Enthusiasts, for Enthusiasts</h2>
        <p>
     Our platform is powered by a community of astronomers, engineers, and 
              space lovers. We believe that knowledge about our universe should be 
              accessible to everyone. You can create your own projects, document 
              historical missions, and share your insights with a global network of 
              like-minded individuals. 
        </p>
      </div>
    </div>
    <div className="footer">
      <div>
        <img src="/src/assets/artwork/space-shuttle.png" alt="" />
        <h2>Join the Crew</h2>
        <p>
              Do you have a passion for space? Register an account and start 
              contributing today. Add your own articles, upload mission data, and 
              participate in discussions. The universe is vast, and we are just 
              beginning to scratch the surface of what we can achieve together.
        </p>
      </div>
    </div>
    <div className="section">
      <div>
        <h2>System Information</h2>
        <p>
              Space Hub Version 2.0. Built with React, Vite, and Supabase. 
              All user-generated content is protected by Row Level Security (RLS). 
              For API documentation, system status, and database schemas, please 
              contact the core development team.
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default About