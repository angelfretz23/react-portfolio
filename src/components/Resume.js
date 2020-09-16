import React from "react";

function Resume(props) {
  const {year, position, graduation, university, company, description, details, appName} = props.resumeData;
  console.log(props);

  const jobDetails = (!details || !details.length ? null : 
    <div className="mi-resume-ds">
      <ul>
        {details.map( (d) => <li>{d}</li>)}
      </ul>
    </div>
  );

  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation }</h5>
        <h6 className="mi-resume-company">{company || university || appName}</h6>
        <p>{description}</p>
        {jobDetails}
      </div>
    </div>
  );
};

export default Resume;
