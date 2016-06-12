var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

function Game (props) {
  return (
    props.isLoading === true
    ? <p></p>
    :<div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <li className="list-group-item"><h2> {props.playersInfo.data.login}</h2></li>
      <li className="list-group-item"><img src={props.playersInfo.data.avatar_url} className="img-rounded img-responsive"/></li>
    </div>
  )
}

Game.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}

module.exports = Game