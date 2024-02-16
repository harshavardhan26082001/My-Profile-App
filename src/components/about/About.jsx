import React from 'react';
import './about.css';
import img from '../../assets/avatar-1.jpg';
import AboutBox from './AboutBox';
import Resume from '../../assets/Harshavardhan_Resume.pdf';

function About(props) {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img src={img} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">I am seeking a dynamic and collaborative work environment that aligns with my skills, fosters creativity, and offers opportunities for continuous learning, professional development and 
                         allowing me to make a meaningful impact and contribute to the success of the team and organization. Looking to utilize and enhance my skills and abilities efficiently and effectively to make this world a better place for living through computers and technology.
                        </p>
                         <div className='btn1'>
                        <a href={Resume} className="btn"  download="Harshavardhan_Resume">Download Resume</a>
                        </div>
                    </div>
                    
                    
                    <div className="about__skills grid">
                        
                        
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Backend Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage back"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Frontend Development</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage front"></span>
                            </div>
                        </div>


                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Database Management</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage dbms"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Dev Ops</h3>
                                <span className="skills__number">75%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage devops"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <AboutBox/>
        </section>
    );
}

export default About;