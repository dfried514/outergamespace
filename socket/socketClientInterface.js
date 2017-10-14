const io = require('socket.io-client');

/* CLASS DEFINITION */
class SocketClientInterface {
  constructor(options) {
    // not sure if this is necessary, it depends if io() will work when it's
    // passed an empty or undefined object
    if (options) {
      this.connection = io(options);
    } else {
      // we will use the default connection params of the host connection
      // if we want to have the ability to specify the port, we can add it to the interface as well
      this.connection = io();
    }
    this.callbacks = {
      host: {},
      player: {},
    };
  }

  /* EVENT LISTENERS */

  listenForHostEvents() {
    this.connection.on('updatePlayers', this.handleHostUpdatePlayers.bind(this));
    this.connection.on('nextQuestion', this.handleHostNextQuestion.bind(this));
    this.connection.on('showRoundScores', this.handleHostShowRoundScores.bind(this));
    this.connection.on('showFinalScores', this.handleHostShowFinalScores.bind(this));
    this.connection.on('showAnswer', this.handleHostShowAnswer.bind(this));
  //  this.connection.on('chat', this.handleHostChat.bind(this));
  }

  listenForPlayerEvents() {
    this.connection.on('newGame', this.handlePlayerNewGame.bind(this));
    this.connection.on('joinGame', this.handlePlayerJoinGame.bind(this));
    this.connection.on('gameStarted', this.handlePlayerStartGame.bind(this));
    this.connection.on('leaveGame', this.handlePlayerLeaveGame.bind(this));
    this.connection.on('nextQuestion', this.handlePlayerNextQuestion.bind(this));
    this.connection.on('showAnswer', this.handlePlayerShowAnswer.bind(this));
    this.connection.on('showRoundScores', this.handlePlayerShowRoundScores.bind(this));
    this.connection.on('showFinalScores', this.handlePlayerShowFinalScores.bind(this));
    this.connection.on('hostDisconnect', this.handlePlayerHostDisconnect.bind(this));
  }

  removeListenersForHostEvents() {
    this.connection.removeAllListeners('updatePlayers');
    this.connection.removeAllListeners('nextQuestion');
    this.connection.removeAllListeners('showRoundScores');
    this.connection.removeAllListeners('showFinalScores');
  }

  removeListenersForPlayerEvents() {
    this.connection.removeAllListeners('newGame');
    this.connection.removeAllListeners('joinGame');
    this.connection.removeAllListeners('gameStarted');
    this.connection.removeAllListeners('leaveGame');
    this.connection.removeAllListeners('nextQuestion');

    this.connection.removeAllListeners('showAnswer');
    this.connection.removeAllListeners('showRoundScores');
    this.connection.removeAllListeners('showFinalScores');
    this.connection.removeAllListeners('hostDisconnect');
  }

  /* EVENT HANDLERS - HOST */

  handleHostUpdatePlayers(players) {
    // TODO: Add some error handling if there was no callback defined
    this.callbacks.host.updatePlayers(players);
  }
  handleHostNextQuestion(question, players) {
    this.callbacks.host.nextQuestion(question, players);
  }
  handleHostShowRoundScores(players) {
    this.callbacks.host.showRoundScores(players);
  }
  handleHostShowFinalScores(players) {
    this.callbacks.host.showFinalScores(players);
  }
  handleHostShowAnswer(answer) {
    this.callbacks.host.showAnswer(answer);
  }
  // handleHostChat(messages) {
  //   this.callback.host.chat(messages);
  // }

  /* EVENT HANDLERS - PLAYER */
  handlePlayerNewGame(roomId) {
    this.callbacks.player.newGame(roomId);
  }
  handlePlayerJoinGame(roomId) {
    this.callbacks.player.joinGame(roomId);
  }
  handlePlayerStartGame(roomId) {
    this.callbacks.player.startGame(roomId);
  }
  handlePlayerLeaveGame(roomId) {
    this.callbacks.player.leaveGame(roomId);
  }
  handlePlayerNextQuestion(question) {
    this.callbacks.player.nextQuestion(question);
  }
  handlePlayerShowAnswer(answer) {
    this.callbacks.player.showAnswer(answer);
  }
  handlePlayerShowRoundScores(players) {
    this.callbacks.player.showRoundScores(players);
  }
  handlePlayerShowFinalScores(players) {
    this.callbacks.player.showFinalScores(players);
  }
  handlePlayerHostDisconnect() {
    // null for now since there's no data to send ack
    this.callbacks.player.hostDisconnect(null, null);
  }

  /* EVENT CALLBACK REGISTRY - HOST */

  registerCallbackHostUpdatePlayers(callback) {
    this.callbacks.host.updatePlayers = callback;
  }
  registerCallbackHostNextQuestion(callback) {
    this.callbacks.host.nextQuestion = callback;
  }
  registerCallbackHostShowRoundScores(callback) {
    this.callbacks.host.showRoundScores = callback;
  }
  registerCallbackHostShowFinalScores(callback) {
    this.callbacks.host.showFinalScores = callback;
  }
  registerCallbackHostShowAnswer(callback) {
    this.callbacks.host.showAnswer = callback;
  }
  // registerCallbackHostChat(callback) {
  //   this.callbacks.host.chat = callback;
  // }

  /* EVENT CALLBACK REGISTRY - PLAYER */
  registerCallbackPlayerNewGame(callback) {
    this.callbacks.player.newGame = callback;
  }
  registerCallbackPlayerJoinGame(callback) {
    this.callbacks.player.joinGame = callback;
  }
  registerCallbackPlayerStartGame(callback) {
    this.callbacks.player.startGame = callback;
  }
  registerCallbackPlayerLeaveGame(callback) {
    this.callbacks.player.leaveGame = callback;
  }
  registerCallbackPlayerNextQuestion(callback) {
    this.callbacks.player.nextQuestion = callback;
  }
  registerCallbackPlayerShowAnswer(callback) {
    this.callbacks.player.showAnswer = callback;
  }
  registerCallbackPlayerShowRoundScores(callback) {
    this.callbacks.player.showRoundScores = callback;
  }
  registerCallbackPlayerShowFinalScores(callback) {
    this.callbacks.player.showFinalScores = callback;
  }
  registerCallbackPlayerHostDisconnect(callback) {
    this.callbacks.player.hostDisconnect = callback;
  }
}

module.exports = SocketClientInterface;
