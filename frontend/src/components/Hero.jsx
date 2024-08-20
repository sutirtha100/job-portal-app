// import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      {/* <h1>Find Your Dream Job Today</h1>
      <h4>
        Connecting Talent with Opportunities Across the Nation for Every Skill
        Level
      </h4>
      <div className="box">
        Explore a vast array of job listings in diverse industries. Whether 
        you're a seasoned professional or just starting out, find the perfect
        role to advance your career. Our platform makes job searching easy and
        efficient, bringing you closer to your next big opportunity.
      </div> */}
      <div className="hero-section-conainer">
        <div className="left-container-hero">
          <div className="heading-span">
            <h5 data-aos="fade-right">
              Find digital <span style={{color:"blue"}}>freelance</span> and <span style={{color:"blue"}}>fulltime</span> jobs{" "}
              <br />
              now!
            </h5>
          </div>
          <div className="subtitle-hero-sec" >
            <p >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              est illo sequi incidunt soluta magni illum quam dolorem iure
              repellendus?
            </p>
          </div>
        </div>
        <div className="right-container-hero">
          <div className="img-hero-container" data-aos="fade-left">
            <img className="floating"
              src="https://w7.pngwing.com/pngs/419/675/png-transparent-happy-person-hand-photography-people-thumbnail.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
