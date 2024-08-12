import React, { useState } from 'react';
import '../components/css/Experience.css';

export default function Experience() {
  const [experiences, setExperiences] = useState([{ id: Date.now() }]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { id: Date.now() }]);
  };

  const handleRemoveExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  return (
    <>
      <div className="cv-form-blk">
        <div className="cv-form-row-title">
          <h3>Experience</h3>
        </div>
        <div className="row-separator repeater">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="cv-form-row cv-form-row-experience">
              <div className="cols-3">
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Title</label>
                  <input
                    name={`exp_title_${exp.id}`}
                    type="text"
                    className="form-control exp_title"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Company / Organization</label>
                  <input
                    name={`exp_organization_${exp.id}`}
                    type="text"
                    className="form-control exp_organization"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Location</label>
                  <input
                    name={`exp_location_${exp.id}`}
                    type="text"
                    className="form-control exp_location"
                  />
                  <span className="form-text" />
                </div>
              </div>
              <div className="cols-3">
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Start Date</label>
                  <input
                    name={`exp_start_date_${exp.id}`}
                    type="date"
                    className="form-control exp_start_date"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">End Date</label>
                  <input
                    name={`exp_end_date_${exp.id}`}
                    type="date"
                    className="form-control exp_end_date"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Description</label>
                  <input
                    name={`exp_description_${exp.id}`}
                    type="text"
                    className="form-control exp_description"
                  />
                  <span className="form-text" />
                </div>
              </div>
              {index > 0 && (
                <button
                  type="button"
                  className="repeater-remove-btn"
                  onClick={() => handleRemoveExperience(exp.id)}
                >
                  -
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          className="repeater-add-btn"
          onClick={handleAddExperience}
        >
          +
        </button>
      </div>
    </>
  );
}
