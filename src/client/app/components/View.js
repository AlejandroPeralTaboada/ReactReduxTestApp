var React = require('react');
var transparentBg = require('../styles').transparentBg;

function View () {
  return (
    <div style={transparentBg}>
      <h2>Hola</h2>
    </div>
  )
}

module.exports = View;