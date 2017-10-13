import React from 'react';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    props.handleMessage(this.state.message);

    var chatWindow = this.refs.chatWindow;
    chatWindow.value = '';
    this.setState({
      message: ''
    });
  };

  render() {
    return (
      <div className={`col-sm-3 game-list ${this.props.gamePanelRender}`}>
        <div className="input-group chatInput">
          <span className="input-group-addon" id="basic-addon3">{this.props.username}</span>
          <form onSubmit={this.handleSubmit}>
            <input type="text"
              ref="chatWindow"
              className="form-control"
              name="chatInput"
              placeholder="chat here!"
              onChange={this.handleChange}
              aria-describedby="basic-addon3">
            </input>
          </form>
        </div>
      </div>
    );
  };
};

export default ChatBar;
