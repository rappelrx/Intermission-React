import React from 'react';
import Navbar from '../components/Navigation';
import CommonHeader from '../components/CommonHeader';
import Concert from '../components/for-recordings/Concert';
import Footer from '../components/Footer';
import './style.css';

const Recordings = () => {
    return (
        <div>
            <Navbar />
            <CommonHeader />

            {/* Main */}
            <div className="wrapper style1">
                <div className="container">
                    <div className="row gtr-500">
                        <div className="col-3 col-12-mobile" id="sidebar">
                            <hr className="first" />
                            {/* SIDEBAR */}
                            <section>
                                <header>
                                    <h4>Jump to</h4>
                                </header>

                                <ul className="sidebar-ul">
                                    <a href="#20222023"><b>2022 – 2023</b></a>
                                    <li><a href="#2022fall">Fall</a></li>
                                </ul>

                                <ul className="sidebar-ul">
                                    <a href="#20212022"><b>2021 – 2022</b></a>
                                    <li><a href="#2021fall">Fall</a></li>
                                    <li><a href="#2022spring">Spring</a></li>
                                </ul>

                                <ul className="sidebar-ul">
                                    <a href="#20202021"><b>2020 – 2021</b></a>
                                    <li><a href="#2021winter">Winter</a></li>
                                    <li><a href="#2021spring">Spring</a></li>
                                </ul>

                                <ul className="sidebar-ul">
                                    <a href="#20192020"><b>2019 – 2020</b></a>
                                    <li><a href="#2019fall">Fall</a></li>
                                    <li><a href="#2020winter">Winter</a></li>
                                    <li><a href="#2020spring">Spring</a></li>
                                </ul>

                                <ul className="sidebar-ul">
                                    <a href="#20182019"><b>2018 – 2019</b></a>
                                    <li><a href="#2018fall">Fall</a></li>
                                    <li><a href="#2019winter">Winter</a></li>
                                    <li><a href="#2019spring">Spring</a></li>
                                </ul>

                                <ul className="sidebar-ul">
                                    <a href="#20172018"><b>2017 – 2018</b></a>
                                    <li><a href="#2017fall">Fall</a></li>
                                    <li><a href="#2018winter">Winter</a></li>
                                    <li><a href="#2018spring">Spring</a></li>
                                </ul>

                                <ul className="sidebar-ul">
                                    <a href="#20172018"><b>2016 – 2017</b></a>
                                    <li><a href="#2016fall">Fall</a></li>
                                    <li><a href="#2017winter">Winter</a></li>
                                    <li><a href="#2017spring">Spring</a></li>
                                </ul>
                                <footer>
                                    <a href="https://www.youtube.com/IntermissionOrchestraatUCSD" rel="noreferrer"
                                        className="button">Youtube</a>
                                </footer>
                            </section>
                        </div>
                        {/* CENTER STUFF */}
                        <div className="col-8 col-12-mobile imp-mobile" id="content">
                            <article id="main">
                                <header>
                                    <h2 className="recordings-h2"><a
                                        href="https://www.youtube.com/IntermissionOrchestraatUCSD"
                                        rel="noreferrer">Recordings</a></h2>
                                </header>

                                <section>
                                    {/* 2022 – 2023 */}
                                    <header>
                                        <h3 id="20222023">2022 – 2023</h3>
                                    </header>

                                    <Concert id="2022fall"
                                        playlist="https://www.youtube.com/watch?v=svLcGtC9W7c"
                                        quarter="Fall 2022"
                                        date="December 2, 2022"
                                        iframeTitle="Fall 2022 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/svLcGtC9W7c" />
                                </section> {/* 2022 - 2023 */}

                                <section>
                                    {/* 2021 – 2022 */}
                                    <header>
                                        <h3 id="20212022">2021 – 2022</h3>
                                    </header>

                                    <Concert id="2022spring"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-JfQ0Nk0mA4Qk4-B01gmlQs"
                                        quarter="Spring 2022"
                                        date="June 4, 2022"
                                        iframeTitle="Spring 2022 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-JfQ0Nk0mA4Qk4-B01gmlQs" />

                                    <Concert id="2021fall"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-IoVt1pdSKwF0nZmJ1eLa5q"
                                        quarter="Fall 2021"
                                        date="Virtual"
                                        iframeTitle="Fall 2021 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-IoVt1pdSKwF0nZmJ1eLa5q" />
                                </section> {/* 2021 - 2022 */}

                                <section>
                                    {/* 2020 – 2021 */}
                                    <header>
                                        <h3 id="20202021">2020 – 2021</h3>
                                    </header>

                                    <Concert id="2021spring"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-Kjf3Lgg5WleicHqmcSZUkh"
                                        quarter="Spring 2021"
                                        date="Virtual"
                                        iframeTitle="Spring 2021 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-Kjf3Lgg5WleicHqmcSZUkh" />

                                    <Concert id="2021winter"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-L2YEb4qBbqdlcPsGOmXNHq"
                                        quarter="Winter 2021"
                                        date="Virtual"
                                        iframeTitle="Winter 2021 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-L2YEb4qBbqdlcPsGOmXNHq" />
                                </section> {/* 2020 – 2021 */}

                                <section>
                                    {/* 2019 – 2020 */}
                                    <header>
                                        <h3 id="20192020">2019 – 2020</h3>
                                    </header>

                                    <Concert id="2020spring"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-K3e1he_Q4XqpZFOFiyAdnv"
                                        quarter="Spring 2020"
                                        date="TIO at Home"
                                        iframeTitle="Spring 2020 At-Home"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-K3e1he_Q4XqpZFOFiyAdnv" />

                                    <Concert id="2020winter"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-It0HnFoo2sUYOepK3TS3Me"
                                        quarter="Winter 2020"
                                        date="March 7, 2020"
                                        iframeTitle="Winter 2020 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-It0HnFoo2sUYOepK3TS3Me" />

                                    <Concert id="2019fall"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-IHpGwiTzFoaToXw5Gwf82Q"
                                        quarter="Fall 2019"
                                        date="November 24, 2019"
                                        iframeTitle="Fall 2019 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-IHpGwiTzFoaToXw5Gwf82Q" />
                                </section> {/* 2019 – 2020 */}

                                <section>
                                    {/* 2018 – 2019 */}
                                    <header>
                                        <h3 id="20182019">2018 – 2019</h3>
                                    </header>

                                    <Concert id="2019spring"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-LqWWgOD9CYjgySoHhWftOC"
                                        quarter="Spring 2019"
                                        date="June 1, 2019"
                                        iframeTitle="Spring 2019 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-LqWWgOD9CYjgySoHhWftOC" />

                                    <Concert id="2019winter"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-IDK7o94Wz8ekHSA9dU91Cn"
                                        quarter="Winter 2019"
                                        date="March 9, 2019"
                                        iframeTitle="Winter 2019 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-IDK7o94Wz8ekHSA9dU91Cn" />

                                    <Concert id="2018fall"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-JaEQdCdGweKQhzPXaLSC9M"
                                        quarter="Fall 2018"
                                        date="December 1, 2018"
                                        iframeTitle="Fall 2018 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-JaEQdCdGweKQhzPXaLSC9M" />
                                </section> {/* 2018 - 2019 */}

                                <section>
                                    {/* 2017 – 2018 */}
                                    <header>
                                        <h3 id="20172018">2017 – 2018</h3>
                                    </header>

                                    <Concert id="2018spring"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-KsR3CREgMbopugVL98kTl9"
                                        quarter="Spring 2018"
                                        date="June 3, 2018"
                                        iframeTitle="Spring 2018 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-KsR3CREgMbopugVL98kTl9" />

                                    <Concert id="2018winter"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-KbsMX86soxBTD6g-S6xkUt"
                                        quarter="Winter 2018"
                                        date="March 10, 2018"
                                        iframeTitle="Winter 2018 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-KbsMX86soxBTD6g-S6xkUt" />

                                    <Concert id="2017fall"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-Ii4obtu0BDUVZ9zrc2hpem"
                                        quarter="Fall 2017"
                                        date="December 6, 2017"
                                        iframeTitle="Fall 2017 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-Ii4obtu0BDUVZ9zrc2hpem" />
                                </section> {/* 2017 – 2018 */}

                                <section>
                                    {/* 2016 – 2017 */}
                                    <header>
                                        <h3 id="20162017">2016 – 2017</h3>
                                    </header>

                                    <Concert id="2017spring"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-KqsLlaP_EVkzRCVKZwZfca"
                                        quarter="Spring 2017"
                                        date="June 1, 2017"
                                        iframeTitle="Spring 2017 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-KqsLlaP_EVkzRCVKZwZfca" />

                                    <Concert id="2017winter"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-L1NCtmKT2qhGxKQ-MfaaTt"
                                        quarter="Winter 2017"
                                        date="March 8, 2017"
                                        iframeTitle="Winter 2017 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-L1NCtmKT2qhGxKQ-MfaaTt" />

                                    <Concert id="2016fall"
                                        playlist="https://www.youtube.com/playlist?list=PLhiWfYIxxD-I25uzz_EBiKef3ISjVEdjN"
                                        quarter="Fall 2016"
                                        date="November 26, 2016"
                                        iframeTitle="Fall 2016 Concert"
                                        embedPlaylist="https://www.youtube.com/embed/videoseries?list=PLhiWfYIxxD-I25uzz_EBiKef3ISjVEdjN" />
                                </section> {/* 2016 – 2017 */}
                            </article>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Recordings;