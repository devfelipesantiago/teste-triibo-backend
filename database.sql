CREATE TABLE users (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    password VARCHAR(255),
    PRIMARY KEY(id)
);

INSERT INTO users (name, password) VALUES ('Joao', '123');
INSERT INTO users (name, password) VALUES ('Jose', '123');

CREATE TABLE tasks (
    id INT AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(100),
    description VARCHAR(100),
    status VARCHAR(100),
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
