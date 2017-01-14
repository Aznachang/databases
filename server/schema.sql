CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  text VARCHAR(110),
  user_id INT UNSIGNED NOT NULL,
  message_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FOREIGN KEY (user_id) REFERENCES users(user_id);
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users {
  user_name VARCHAR(30) DEFAULT 'anonymous',
  user_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
};

CREATE TABLE rooms {
  room_name VARCHAR(30) DEFAULT 'lobby', 
  room_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
};




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/