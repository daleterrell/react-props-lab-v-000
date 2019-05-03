const Spaceship = props => (<p>{props.name}</p>);

Spaceship.defaultProps = {
  name: 'CamperBot'
  speed: 'slow'
  has Rockets: false
  colors: ['black', 'red']
  
};

Spaceship.propTypes = {
  name: PropTypes.string.isRequired
};

export default Spaceship;