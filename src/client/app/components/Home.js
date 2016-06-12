var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;
var PromptContainer = require('../containers/PromptContainer');

function Home () {
  return (
    <div className=" col-sm-12 text-center" style={transparentBg}>
      <h1>GitHub Finder</h1>
      <PromptContainer/>
    </div>
  )
}

module.exports = Home;