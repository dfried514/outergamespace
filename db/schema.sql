CREATE DATABASE trivia;

USE trivia;

CREATE TABLE users(
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL UNIQUE,
  hash VARCHAR(64) NOT NULL,
  total_points INT NOT NULL,
  games_played INT NOT NULL,
  badge VARCHAR(120) NOT NULL
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(30) NOT NULL,
  message varchar(140) NOT NULL,
  datetime timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

CREATE TABLE games(
  room_id VARCHAR(10) PRIMARY KEY NOT NULL,
  host_username VARCHAR(20) NOT NULL UNIQUE,
  num_questions INT NOT NULL,
  time_per_question INT NOT NULL,
  category VARCHAR(50) NOT NULL,
  difficulty VARCHAR(10) NOT NULL,
  max_players INT NOT NULL,
  num_players INT NOT NULL DEFAULT 0
);

INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Backbone', '$2a$10$tRR0upAcEXKEZQPcVP/.pO.8vRl4Apu4QyRmvL54Wk1080HEJ9FNK', 10000, 100, 'onFire,hacker');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Leo', '$$2a$10$9fZZC6sNt.ft3XDBqX1PI.beCTCkC/QBQTttnq28syvEz20xoQzsm', 4080, 76, 'onFire,champ');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Rebecca', '$2a$10$Z/P3vEzb8IHSRSJm4ULgoOax7sg56NawEVuzYLtBNpWHDBGnZvtH.', 3750, 72, 'champ');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Lynn', '$2a$10$oCyqNpDX6gmjJT/.1xXRUeYK0q2Q1C8FTU8Paoa/ADTZPr7lysJP.', 3020, 67, 'champ');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('David', '$2a$10$nvD8Tki1rzDzUMkgTB2Y..jNOx1FlOMTGwKdwRQlykkLMb/MUxapK', 2980, 61, 'grazer');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Lam', '$2a$10$iwBwmTD5F4yhWeRPJ6MfCuYIn8TxzvZQbk.0T6Jj03WJjmk9FSqCe', 2830, 55, 'newb');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Tiffany', '$2a$10$VahvPr6Flcd0AE0sYxKCdOgCmDrB92xoYIj.dKS/iZTzgkjKRspFW', 2640, 77, 'newb');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Shwetha', '$2a$10$QvUEtgQA4UeC3Zj3CK2Zi.e1NzWZYBOD3qO7SCnB0vLF0IhZ4pcLC', 2590, 65, 'newb');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Jon', '$2a$10$PMDoynjYntpBtNcm4MaTse2T6v2F3dIsWHZWEZsrlCysvvTZyWwZ2', 2470, 48, 'newb,grazer');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Christine', '$2a$10$eOYfCq0jzl9zKOnAX3arueTIrmFthKAb2NFns5K6sdGjAi6krF6Gi', 2010, 42, 'newb,grazer');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Shane', '$2a$10$fy7Lr4aU1ryJFN06xNgf8uVJDGwrNyggFqN30M864RlgvMZc4KF2W', 50, 3, 'turd');
INSERT INTO users (name, hash, total_points, games_played, badge)
VALUES ('Austin', '$2a$10$g6cmg.KfhKyc8qDxWH.ioOPsScuTf/fIudz24grG6UYD9sm7zQ2fe', 10, 1, 'turd,grazer');
