CREATE DATABASE IF NOT EXISTS chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE IF NOT EXISTS users (
  user_name VARCHAR(30),
  user_id int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (user_id) 
);


CREATE TABLE IF NOT EXISTS messages(
  /* Describe your table here.*/
  message_id int NOT NULL AUTO_INCREMENT,
  user VARCHAR(30),
  room VARCHAR(10),
  text_msg VARCHAR(110),
  PRIMARY KEY (message_id)
);

-- ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`user_id`);

-- FOREIGN KEY (user) REFERENCES users(user_id)
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/