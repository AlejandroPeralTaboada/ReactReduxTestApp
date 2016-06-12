var React = require('react');
var PropTypes = React.PropTypes;

function GameWrapper (props) {
  return (
    <div className='col-xs-12 col-sm-6'>
      {props.children}
    </div>
  )
}


module.exports = GameWrapper;
