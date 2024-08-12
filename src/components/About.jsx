import React, { useState } from 'react';
import '../components/css/About.css';

const About = () => {
  const [achievements, setAchievements] = useState([{ id: 1, title: '', description: '' }]);

  const handleAddAchievement = () => {
    setAchievements([...achievements, { id: achievements.length + 1, title: '', description: '' }]);
  };

  const handleRemoveAchievement = (id) => {
    setAchievements(achievements.filter((achievement) => achievement.id !== id));
  };

  return (
    <section id="about-sc" className="">
      <div className="container">
        <div className="about-cnt">
          <form action="" className="cv-form" id="cv-form">
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>about section</h3>
              </div>
              <div className="cv-form-row cv-form-row-about">
                <div className="cols-3">
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      First Name
                    </label>
                    <input
                      name="firstname"
                      type="text"
                      className="form-control firstname"
                      id=""
                      placeholder="e.g. John"
                    />
                    <span className="form-text" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Middle Name <span className="opt-text">(optional)</span>
                    </label>
                    <input
                      name="middlename"
                      type="text"
                      className="form-control middlename"
                      id=""
                      placeholder="e.g. Herbert"
                    />
                    <span className="form-text" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Last Name
                    </label>
                    <input
                      name="lastname"
                      type="text"
                      className="form-control lastname"
                      id=""
                      placeholder="e.g. Doe"
                    />
                    <span className="form-text" />
                  </div>
                </div>
                <div className="cols-3">
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Your Image
                    </label>
                    <input
                      name="image"
                      type="file"
                      className="form-control image"
                      id=""
                      accept="image/*"
                    />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Designation
                    </label>
                    <input
                      name="designation"
                      type="text"
                      className="form-control designation"
                      id=""
                      placeholder="e.g. Sr.Accountants"
                    />
                    <span className="form-text" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Address
                    </label>
                    <input
                      name="address"
                      type="text"
                      className="form-control address"
                      id=""
                      placeholder="e.g. Lake Street-23"
                    />
                    <span className="form-text" />
                  </div>
                </div>
                <div className="cols-3">
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Email
                    </label>
                    <input
                      name="email"
                      type="text"
                      className="form-control email"
                      id=""
                      placeholder="e.g. johndoe@gmail.com"
                    />
                    <span className="form-text" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Phone No:
                    </label>
                    <input
                      name="phoneno"
                      type="text"
                      className="form-control phoneno"
                      id=""
                      placeholder="e.g. 456-768-798, 567.654.002"
                    />
                    <span className="form-text" />
                  </div>
                  <div className="form-elem">
                    <label htmlFor="" className="form-label">
                      Summary
                    </label>
                    <input
                      name="summary"
                      type="text"
                      className="form-control summary"
                      id=""
                      placeholder="e.g. Doe"
                    />
                    <span className="form-text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cv-form-blk">
              <div className="cv-form-row-title">
                <h3>achievements</h3>
              </div>
              {achievements.map((achievement, index) => (
                <div className="row-separator repeater" key={achievement.id}>
                  <div className="cv-form-row cv-form-row-achievement">
                    <div className="cols-2">
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          Title
                        </label>
                        <input
                          name={`achieve_title_${achievement.id}`}
                          type="text"
                          className="form-control achieve_title"
                          id=""
                          placeholder="e.g. johndoe@gmail.com"
                          value={achievement.title}
                          onChange={(e) =>
                            setAchievements(
                              achievements.map((ach) =>
                                ach.id === achievement.id
                                  ? { ...ach, title: e.target.value }
                                  : ach
                              )
                            )
                          }
                        />
                        <span className="form-text" />
                      </div>
                      <div className="form-elem">
                        <label htmlFor="" className="form-label">
                          Description
                        </label>
                        <input
                          name={`achieve_description_${achievement.id}`}
                          type="text"
                          className="form-control achieve_description"
                          id=""
                          placeholder="e.g. johndoe@gmail.com"
                          value={achievement.description}
                          onChange={(e) =>
                            setAchievements(
                              achievements.map((ach) =>
                                ach.id === achievement.id
                                  ? { ...ach, description: e.target.value }
                                  : ach
                              )
                            )
                          }
                        />
                        <span className="form-text" />
                      </div>
                    </div>
                    {achievements.length > 1 && index > 0 && (
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => handleRemoveAchievement(achievement.id)}
                      >
                        -
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <button type="button" className="add-btn" onClick={handleAddAchievement}>
                +
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
