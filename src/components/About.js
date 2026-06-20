const About = () => {
    return (
        <div className="about-us">
            <div className="about-info">
                <div className="about-body">
                   <h1>About Us</h1>
                   <h2>This is the About page of our React application.</h2>
                     <p>
                        We are a team of passionate developers dedicated to creating amazing web experiences.
                        It all started with a simple idea and has grown into a full-fledged application.
                    </p>
                    <p>
                        Our mission is to deliver high-quality software solutions that meet the needs of our users.
                        We believe in continuous learning and improvement to stay ahead in the ever-evolving tech landscape.
                    </p>
                    <p>
                        Thank you for visiting our About page. We hope you enjoy using our application as much as we enjoyed building it!
                    </p>
                    <p> 
                        Currently, our branches are located in:
                    </p>    
                        <ul>
                            <li>New York, USA</li>
                            <li>London, UK</li>
                            <li>Sydney, Australia</li>
                            <li>Tokyo, Japan</li>
                            <li>Bangalore, India</li>
                        </ul>
                </div>
            </div>
        </div>
    );
};

export default About;