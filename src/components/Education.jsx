import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import '../components/css/Education.css';

const CustomInput = React.forwardRef(({ value, onClick, placeholder }, ref) => (
  <div className="date-picker-wrapper">
    <input
      type="text"
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      className="form-control date_input"
      readOnly
    />
    <FaCalendarAlt className="calendar-icon" onClick={onClick} />
  </div>
));

export default function Education() {
  const [educations, setEducations] = useState([{ id: Date.now() }]);

  const handleAddEducation = () => {
    setEducations([...educations, { id: Date.now() }]);
  };

  const handleRemoveEducation = (id) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };

  const handleDateChange = (date, id, field) => {
    setEducations(educations.map(edu => edu.id === id ? { ...edu, [field]: date } : edu));
  };

  return (
    <>
      <div className="cv-form-blk">
        <div className="cv-form-row-title">
          <h3>Education</h3>
        </div>
        <div className="row-separator repeater">
          {educations.map((edu, index) => (
            <div key={edu.id} className="cv-form-row cv-form-row-education">
              <div className="cols-3">
                <div className="form-elem">
                  <label htmlFor="" className="form-label">School</label>
                  <input
                    name={`edu_school_${edu.id}`}
                    type="text"
                    className="form-control edu_school"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Degree</label>
                  <input
                    name={`edu_degree_${edu.id}`}
                    type="text"
                    className="form-control edu_degree"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">City</label>
                  <input
                    name={`edu_city_${edu.id}`}
                    type="text"
                    className="form-control edu_city"
                  />
                  <span className="form-text" />
                </div>
              </div>
              <div className="cols-3">
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Start Date</label>
                  <DatePicker
                    selected={edu.startDate}
                    onChange={(date) => handleDateChange(date, edu.id, 'startDate')}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="dd mm yy"
                    customInput={<CustomInput />}
                    calendarClassName="custom-calendar"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">End Date</label>
                  <DatePicker
                    selected={edu.endDate}
                    onChange={(date) => handleDateChange(date, edu.id, 'endDate')}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="dd mm yy"
                    customInput={<CustomInput />}
                    calendarClassName="custom-calendar"
                  />
                  <span className="form-text" />
                </div>
                <div className="form-elem">
                  <label htmlFor="" className="form-label">Description</label>
                  <input
                    name={`edu_description_${edu.id}`}
                    type="text"
                    className="form-control edu_description"
                  />
                  <span className="form-text" />
                </div>
              </div>
              {index > 0 && (
                <button
                  type="button"
                  className="repeater-remove-btn"
                  onClick={() => handleRemoveEducation(edu.id)}
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
          onClick={handleAddEducation}
        >
          +
        </button>
      </div>
    </>
  );
}
