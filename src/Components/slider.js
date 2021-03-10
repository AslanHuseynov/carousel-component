import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

function Imageslider()
{
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    
    return(
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/drogba.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                        <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Didier Drogba<span className="position"> Center Forward</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/lampard.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                    <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Frank Lampard<span class="position"> Midfielder</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/hazard.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Eden Hazard<span class="position"> Winger</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/terry.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Terry<span class="position"> Centre-back</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/cech.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Peter Cech<span class="position"> Goalkeeper</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/balack.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Michael Ballack<span class="position"> Midfielder</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/osgood.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Peter Osgood<span class="position"> Striker</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/kante.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>N'Golo Kanté<span class="position"> Central Midfielder</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/zola.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Gianfranco Zola<span class="position"> Center Forward</span></h2>
                    </div>
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/cole.jpg" alt=""/>
                    </div>
                    <ul className="social-icons">
                    <li><a href="wikipedia.com"><i className="fa fa-rss"></i></a></li>
                        <li><a href="instagram.com"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="youtube.com"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>Ashley Cole<span class="position"> Left-back</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
        )
}

export default Imageslider