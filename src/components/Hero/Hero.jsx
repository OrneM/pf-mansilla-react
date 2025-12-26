import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import banner2 from '../../assets/banner2.png';

const Hero = ({ greeting, image }) => {
    return (
        <div className="hero-container">
            <img src={banner2} alt="Hero Banner" className="hero-image" />
        </div>
    );
};

Hero.propTypes = {
    greeting: PropTypes.string,
    image: PropTypes.string.isRequired,
};

export default Hero;
