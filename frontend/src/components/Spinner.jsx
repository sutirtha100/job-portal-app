import React from "react";
import { ClipLoader } from "react-spinners";

const Spinner = (job) => {
  return (
    <>
      <section className="job-card-section"
        style={{
          minHeight: "525px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <ClipLoader size={350} /> */}
        {/* <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fuga
          consectetur quis vitae minus sit, eligendi nesciunt blanditiis sed
          maiores.
        </h1> */}
        <div className="job-card">
          <div className="job-card-header">
            <h2 className="job-title">{job.title}</h2>
            <span className="company-name">{job.company}</span>
          </div>
          <div className="job-card-body">
            <p className="job-location">Location: {job.location}</p>
            <p className="job-type">Type: {job.type}</p>
            <p className="job-salary">Salary: {job.salary}</p>
            <p className="job-description">{job.description}</p>
          </div>
          <div className="job-card-footer">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

        <div className="job-card">
          <div className="job-card-header">
            <h2 className="job-title">{job.title}</h2>
            <span className="company-name">{job.company}</span>
          </div>
          <div className="job-card-body">
            <p className="job-location">Location: {job.location}</p>
            <p className="job-type">Type: {job.type}</p>
            <p className="job-salary">Salary: {job.salary}</p>
            <p className="job-description">{job.description}</p>
          </div>
          <div className="job-card-footer">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

        <div className="job-card">
          <div className="job-card-header">
            <h2 className="job-title">{job.title}</h2>
            <span className="company-name">{job.company}</span>
          </div>
          <div className="job-card-body">
            <p className="job-location">Location: {job.location}</p>
            <p className="job-type">Type: {job.type}</p>
            <p className="job-salary">Salary: {job.salary}</p>
            <p className="job-description">{job.description}</p>
          </div>
          <div className="job-card-footer">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

        <div className="job-card">
          <div className="job-card-header">
            <h2 className="job-title">{job.title}</h2>
            <span className="company-name">{job.company}</span>
          </div>
          <div className="job-card-body">
            <p className="job-location">Location: {job.location}</p>
            <p className="job-type">Type: {job.type}</p>
            <p className="job-salary">Salary: {job.salary}</p>
            <p className="job-description">{job.description}</p>
          </div>
          <div className="job-card-footer">
            <button className="apply-button">Apply Now</button>
          </div>
        </div>

      </section>
    </>
  );
};

export default Spinner;
