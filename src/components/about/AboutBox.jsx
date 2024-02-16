import React from 'react';

function AboutBox(props) {
    return (
        <div className="about__boxes grid">
            
            
            <div className="about__box">
                <i className="about__icon icon-rocket"></i>
                <div>
                    <h3 className="about__title">90</h3>
                    <span className="about__subtitle">Projects Completed.</span>
                </div>
            </div>


            <div className="about__box">
                <i className="about__icon icon-graph"></i>
                <div>
                    <h3 className="about__title">960</h3>
                    <span className="about__subtitle">All India Rank in JEE Mains 2018. </span>
                </div>
            </div>


            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">2</h3>
                    <span className="about__subtitle">Times named as Best Performing Employee.</span>
                </div>
            </div>


            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">1</h3>
                    <span className="about__subtitle">Time Inter NIT Volleyball Champion.</span>
                </div>
            </div>


        </div>
    );
}

export default AboutBox;