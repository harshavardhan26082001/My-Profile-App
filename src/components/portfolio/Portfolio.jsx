import React, {useState} from 'react';
import './portfolio.css';
import Menu from './Menu';

function Portfolio(props) {
    const [items, setItems] = useState(Menu);
    const filterItem = (categoryItem) => {
        const updatedItems = Menu.filter((currElem) => {
            return currElem.category === categoryItem;
        });
        setItems(updatedItems);
    }
    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">Recent Works</h2>

            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>All Projects</span>
                <span className="work__item" onClick={() => filterItem("B.tech Projects")}>B.Tech Projects</span>
                <span className="work__item" onClick={() => filterItem("Personal Projects")}>Personal Projects</span>
                <span className="work__item" onClick={() => filterItem("Research Paper")}>Research Paper</span>

            </div>

            <div className="work__container grid">
                {items.map((elem) => {
                    const {id, image, title, category, link, website} = elem;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>


                            <div className="work__button">
                                <a href={link}>
                                    <i className="icon-link work__button-icon"></i>
                                </a>
                            </div>

                            {/* <div className="work__button1">
                                <a href={website} className='work__button1'>
                                    <i className="icon-link work__button-icon"></i> 
                                </a>
                            </div> */}
                            
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Portfolio;