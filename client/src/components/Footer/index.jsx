import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container } from 'react-bootstrap';
import './style.css';

/**
 * Footer component that goes at the bottom of all pages.
 */
const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div class="row">
                    <div className="col-12">
                        {/* Contact */}
                        <section className="contact">
                            <header>
                                <h3>Bringing music out from the screen and into tangible space, live.</h3>
                            </header>
                            <p>Contact us at <a href="mailto:intermissionUCSD@gmail.com">intermissionUCSD@gmail.com</a> or shoot us a message on 
                                one of our <a href="https://tiosocialmedia.carrd.co/" target="_blank" rel="noreferrer">social media pages</a>.</p>
                            {/*<li><a href="https://www.facebook.com/IntermissionUCSD" rel="noreferrer"
                                        className="icon fa-facebook"><span className="label">Facebook</span></a></li>*/}
                            <div className="singleCol social-media-icons-white d-flex justify-content-around">
                                <a href="https://www.youtube.com/IntermissionOrchestraatUCSD" target="_blank" rel="noreferrer" className="icon fa-youtube-play">
                                    <span><FontAwesomeIcon icon={faYoutube} /></span></a>
                                <a href="https://www.facebook.com/IntermissionUCSD" target="_blank" rel="noreferrer" className="icon fa-facebook">
                                    <span><FontAwesomeIcon icon={faFacebook} /></span></a>
                                <a href="https://www.instagram.com/TIOatUCSD" target="_blank" rel="noreferrer" className="icon fa-instagram">
                                    <span><FontAwesomeIcon icon={faInstagram} /></span></a>
                                <a href="https://www.twitch.tv/IntermissionUCSD" target="_blank" rel="noreferrer" className="icon fa-twitch">
                                    <span><FontAwesomeIcon icon={faTwitch} /></span></a>
                                <a href="https://twitter.com/TIOatUCSD" target="_blank" rel="noreferrer" className="icon fa-twitter">
                                    <span><FontAwesomeIcon icon={faTwitter} /></span></a>
                            </div>
                        </section>

                        {/* Copyright */}
                        <div className="copyright">
                            <p>&copy; 2023 The Intermission Orchestra at UC San Diego.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;