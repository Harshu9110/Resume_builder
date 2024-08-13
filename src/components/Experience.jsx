import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/css/Experience.css';

export default function Experience() {
  const [experiences, setExperiences] = useState([{ id: Date.now(), startDate: null, endDate: null }]);

  const handleAddExperience = () => {
    setExperiences([...experiences, { id: Date.now(), startDate: null, endDate: null }]);
  };

  const handleRemoveExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const handleDateChange = (date, id, field) => {
    setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: date } : exp));
  };

  const popperContainer = ({ children }) => (
    <div className="calendar-container">
      {children}
    </div>
  );

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
                  <div className="date-picker-container">
                    <DatePicker
                      selected={exp.startDate}
                      onChange={(date) => handleDateChange(date, exp.id, 'startDate')}
                      dateFormat="dd-MM-yy"
                      className="form-control exp_start_date"
                      placeholderText="dd-mm-yy"
                      popperContainer={popperContainer}
                    />
                    <FaCalendarAlt
                      className="calendar-icon"
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.preventDefault()}
                    />
                  </div>
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">End Date</label>
                  <div className="date-picker-container">
                    <DatePicker
                      selected={exp.endDate}
                      onChange={(date) => handleDateChange(date, exp.id, 'endDate')}
                      dateFormat="dd-MM-yy"
                      className="form-control exp_end_date"
                      placeholderText="dd-mm-yy"
                      popperContainer={popperContainer}
                    />
                    <FaCalendarAlt
                      className="calendar-icon"
                      onClick={(e) => e.stopPropagation()}
                      onMouseDown={(e) => e.preventDefault()}
                    />
                  </div>
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
