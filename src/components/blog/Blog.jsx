import React from 'react';
import './blog.css';
import Image1 from '../../assets/work-1.jpg';
import Image2 from '../../assets/blog-2.jpg';
import Image3 from '../../assets/blog-3.jpg';

function Blog(props) {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                
                
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href=""><span className="blog__category">Reviews</span></a>
                        <a href="https://www.finoit.com/blog/top-mobile-app-development-tools/"><img src={Image1} alt="" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">5 Best App Development Tool for Your Projects</h3>
                        <div className="blog__meta">
                            <span>09 February, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Finoit</span>
                        </div>
                    </div>
                </div>

                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href=""><span className="blog__category">Tutorial</span></a>
                        <a href="https://www.moneycorp.com/en-us/news-hub/debunking-5-common-payment-processing-misconceptions/"><img src={Image2} alt="" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Common Misconceptions About Payment</h3>
                        <div className="blog__meta">
                            <span>07 February, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Moneycorp</span>
                        </div>
                    </div>
                </div>


                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href=""><span className="blog__category">Business</span></a>
                        <a href="https://hbr.org/2022/05/sm-pub-5-20-should-you-work-at-a-startup"><img src={Image3} alt="" className="blog__img" /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">3 Things to know about startup business</h3>
                        <div className="blog__meta">
                            <span>05 February, 2024</span>
                            <span className="blog__dot">.</span>
                            <span>Harvard Bussiness</span>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}

export default Blog;