const mysql = require('mysql');
const Promise = require('bluebird');

/**
 * A module that provides an interface to the database
 * @module db
 */

const DB_HOST = process.env.OGS_HOST || 'localhost';
const DB_USER = process.env.OGS_USER || 'root';
const DB_PASS = process.env.OGS_PASS || '';
const DB_DATABASE = process.env.OGS_DATABASE || 'trivia';

const databaseQueryString = `mysql://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_DATABASE}?reconnect=true`;

// connection pooling is used here to recycle and prevent dropped connections
const pool = mysql.createPool(databaseQueryString);

const db = {};

const executeQuery = queryString =>
  new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      } else {
        connection.query(queryString, (error, results) => {
          if (err) {
            reject(err);
            connection.release();
          } else {
            resolve(results);
            connection.release();
          }
        });
      }
    });
  })
    .catch(console.error);

db.storeUser = (name, hash) => {
  const queryString = `
    INSERT INTO users
    (name, hash, total_points, games_played, badge)
    VALUES
    ('${name}', '${hash}', 0, 0, 'turd')
  `;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      } else {
        connection.query(queryString, (error, results) => {
          if (err) {
            reject(err);
            connection.release();
          } else {
            resolve(results);
            connection.release();
          }
        });
      }
    });
  });
};

db.getUser = (name) => {
  const queryString = `
    SELECT * FROM users
    WHERE name='${name}'
  `;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      } else {
        connection.query(queryString, (error, results) => {
          if (err) {
            reject(err);
            connection.release();
          } else {
            resolve(results);
            connection.release();
          }
        });
      }
    });
  });
};

db.updateUserScore = (name, gameScore) => {
  const queryString = `
    UPDATE users
    SET total_points = total_points + ${gameScore},
    games_played = games_played + 1
    WHERE name='${name}'
  `;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      } else {
        connection.query(queryString, (error, results) => {
          if (err) {
            reject(err);
            connection.release();
          } else {
            resolve(results);
            connection.release();
          }
        });
      }
    });
  });
};

db.getAllUsers = () => {
  const queryString = `
    SELECT * FROM users
  `;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      } else {
        connection.query(queryString, (error, results) => {
          if (err) {
            reject(err);
            connection.release();
          } else {
            resolve(results);
            connection.release();
          }
        });
      }
    });
  });
};

db.storeMessage = (username, message) => {
  const queryString = `
    INSERT INTO messages
    (username, message)
    VALUES
    ('${username}', '${message}')
  `;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      } else {
        connection.query(queryString, (error, results) => {
          if (err) {
            reject(err);
            connection.release();
          } else {
            resolve(results);
            connection.release();
          }
        });
      }
    });
  });
};

db.getAllMessages = () => {
  const queryString = `
    SELECT * FROM messages ORDER BY datetime DESC LIMIT 50
  `;
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        connection.release();
      } else {
        connection.query(queryString, (error, results) => {
          if (err) {
            reject(err);
            connection.release();
          } else {
            resolve(results);
            connection.release();
          }
        });
      }
    });
  });
};

db.addGame = (game) => {
  const { roomId, username, noOfQuestions, timePerQuestion, maxPlayers, category, difficulty } = game;
  const queryString = `
    INSERT INTO open_games
    (room_id, host_username, num_questions, time_per_question, category, difficulty, max_players)
    VALUES
    ('${roomId}', '${username}', ${noOfQuestions}, ${timePerQuestion}, '${category.name}', '${difficulty}', ${maxPlayers})
 `;
  return executeQuery(queryString);
};

db.getGames = () => {
  const queryString = 'SELECT * FROM open_games WHERE num_players < max_players';
  return executeQuery(queryString);
};

db.getGame = (roomId) => {
  const queryString = `SELECT * FROM open_games WHERE room_id = '${roomId}'`;
  return executeQuery(queryString);
};

db.addGamePlayer = (roomId) => {
  const queryString = `UPDATE open_games SET num_players = num_players + 1 WHERE room_id = '${roomId}'`;
  return executeQuery(queryString);
};

db.removeGamePlayer = (roomId) => {
  const queryString = `UPDATE open_games SET num_players = num_players - 1 WHERE room_id = '${roomId}'`;
  return executeQuery(queryString);
};

db.removeGame = (roomId) => {
  const queryString = `DELETE FROM open_games WHERE room_id = '${roomId}'`;
  return executeQuery(queryString);
};

/** exports a database connection object */
module.exports = db;
