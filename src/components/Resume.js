import React from "react";

function Resume(props) {
  const { year, position, graduation, university, company, details, description } = props.resumeData;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="mi-resume-company">{company || university}</h6>
        <div className="mi-resume-description">{description}</div>
        {!details ? null : details.map((detail, index) => {
          return <p key={`${index}`}>{`- ${detail}`}</p>
        })}
      </div>
    </div>
  );
};

export default Resume;