import React from 'react';


function HeaderSocials(props) {
    return (
        <div className="home__socials">
            <a href="https://github.com/harshavardhan26082001" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/harsha-amirishetti/" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-linkedin"></i>
            </a>

            <a href="" className="home__social-link" target='_blank'>
            <i className="fa-brands fa-twitter"></i>
            </a>
            
        </div>
    );
}

export default HeaderSocials;