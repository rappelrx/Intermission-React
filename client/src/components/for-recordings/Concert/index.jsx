import React from 'react';

/**
 * Functional component to use on Recordings page.
 * @param {*} props 
 * @returns div element for each individual concert recording playlist
 * 
 * Example: 
 * <div className="concert-recording">
 *     <h4 id="2022fall"><a href="https://www.youtube.com/watch?v=svLcGtC9W7c"
 *         target="_blank"><strong>Fall 2022 |</strong> December 2, 2022</a></h4>
 *      <div className="resp-container">
 *          <iframe className="resp-iframe" src="https://www.youtube.com/embed/svLcGtC9W7c"
 *              frameborder="0"
 *              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
 *              allowfullscreen></iframe>
 *      </div>
 *  </div>
 */
const Concert = (props) => {
    return (
        <div className="concert-recording">
            <h4 id={props.id}><a href={props.playlist}
                rel="noreferrer"><strong>{props.quarter} |</strong> {props.date}</a></h4>
            <div className="resp-container">
                <iframe title={props.iframeTitle} className="resp-iframe" src={props.embedPlaylist}
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Concert;