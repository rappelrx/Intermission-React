import React from 'react';
import Navigation from '../components/Navigation';
import CommonHeader from '../components/CommonHeader';
import CarouselAbout from '../components/CarouselAbout';
import Footer from '../components/Footer';
import './style.css';

const About = () => {
    return (
        <div>
            <Navigation />
            <CommonHeader />

            <div className="wrapper style1">

                <div className="container">
                    <article id="main" className="special">
                        <header>
                            <h2>About us</h2>
                            <p>
                                Video games. Anime. Films. <em>Music.</em>
                            </p>
                        </header>
                        <p>
                            We're a student-run organization dedicated to playing music from video games, anime, and films.
                            We arrange, play, conduct, coordinate rehearsals, record our performances — our student power
                            runs practically everything required to manage an orchestra. Currently, we're a ninety-member
                            symphonic orchestra and choir. We have concerts three times a year, at the end of each quarter,
                            and perform at events such as the Triton Gaming Expo, Winter GameFest, and Animefest. But, we
                            didn't start off like this. It's certainly been some work to get our toddler-age orchestra to
                            where we are now. <br />
                        </p>
                        
                        <CarouselAbout />

                        <section>
                            <header>
                                <h3>The Beginning: The Intermission Ensemble</h3>
                            </header>
                            <p>
                                In Fall 2015, four undergraduate music students — David Dong, Dana Marie Chan, Brandon
                                Paulson, and Alex Vargas — met in one of their music classes. Their shared interest in video
                                game and anime music brought them together and they decided to form a student organization
                                dedicated to playing their favorite music. As for the name, the word "Intermission" in fancy
                                font on a UCSD Music concert program served as a sudden stroke of inspiration.
                            </p>
                            <p>
                                With that, they and a few other friends arranged some pieces and started recruiting more
                                members in Winter 2016. Our first pieces included a <em>The Legend of Zelda: Link's
                                    Awakening</em> medley, "Time" from <em>Inception</em>, "Carrying You" from <em>Castle in
                                        the Sky</em>, a <em>Pokémon Gold/Silver</em> medley, and a few others. In May, we had
                                our first gig performing at the first Triton Gaming Expo. By the end of Spring 2016, we had
                                about twenty members and were ready for our very first concert.
                            </p>
                        </section>
                        <section>
                            <header>
                                <h3>The Intermission Orchestra</h3>
                            </header>
                            <p>
                                When Fall 2016 rolled around, we doubled in size to about forty members and changed our name
                                to The Intermission Orchestra to reflect our larger ensemble size. We held another concert
                                at the end of Fall 2016 to showcase the pieces we had been practicing during the quarter.
                                Since then, we have continued to prepare a new set of pieces for each quarter, rehearse
                                every week, and show off our members' hard work at our end-of-the-quarter concert. Now,
                                we're also a regular feature at on-campus gaming and anime events.
                            </p>
                            <p>
                                We hope to inspire passion for music inside and outside of our orchestra. Within the
                                orchestra, we take pride in a different way of running things — since we're self-directed,
                                all our members' inputs count. Any member has the chance to arrange and arrangers have the
                                option to conduct their own pieces as well. By having more people involved in the process,
                                we strive to foster more passion for music in our heavily STEM campus setting at UCSD. With
                                our concerts and performances, we aim to bring music out from the screen and into tangible
                                space, live. What was background music is now the feature.
                            </p>
                        </section>
                    </article>

                </div>

            </div>

            <Footer />
        </div>
    );
};

export default About;