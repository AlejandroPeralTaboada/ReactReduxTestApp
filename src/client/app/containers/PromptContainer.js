var React = require('react');
var Prompt = require('../components/Prompt');
var Game = require('../components/Game');
var GameWrapper = require('../components/GameWrapper');
var githubHelpers = require('../utils/githubHelpers');

var PromptContainer = React.createClass({

  getInitialState: function () {
    return {
      name: '',
      found: false,
      playersInfo:[],
      isLoading:true
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    this.setState({
      isLoading:true
    });
    githubHelpers.getUserInfo(this.state.name).then(function (players) {
        console.log("Players",players);
        this.state.playersInfo.push(players),
        this.setState({
          isLoading:false
        })
      }.bind(this)).catch(function (err) {
        console.warn('Error in getPlayersInfo: ', err)
      });
  },
  handleUpdateUser: function (event) {
    this.setState({
      name: event.target.value
    });
  },



  render: function () {
    console.log("Players info",this.state.playersInfo);
    let rows = this.state.playersInfo.map(player => {
        return <GameWrapper >
              <Game
              isLoading={this.state.isLoading}
              playersInfo={player}/>
            </GameWrapper> });
    return ( 
        <div className="container-fluid">
            <div className="col-md-12">
              <Prompt
              onSubmitUser={this.handleSubmitUser}
              onUpdateUser={this.handleUpdateUser}/>
          </div>
          <div className="row">
            {rows}
          </div>
        </div>
      )
  }
});

module.exports = PromptContainer;