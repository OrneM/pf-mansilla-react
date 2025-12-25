import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Hero = ({ greeting, image }) => {
    return (
        <div className="hero-container">
            <img src={image} alt="Hero Banner" className="hero-image" />
        </div>
    );
};

Hero.propTypes = {
    greeting: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default Hero;
