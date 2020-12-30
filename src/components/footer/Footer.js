import React from "react";
import './footer.styles.scss'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrap">
                <p>Content data are provided by <a target="_blank" href="https://www.themoviedb.org/">TMDB</a>. It's strictly forbidden to use any data for commercial purposes without their permission!
                </p>
                <p>This webside was build as an exercise project. <br/> &copy; by <strong>Vaclav Lysek.</strong></p>
            </div>
        </div>
    );
};

export default Footer;
