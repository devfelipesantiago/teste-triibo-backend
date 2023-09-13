CREATE TABLE users (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE tasks (
    id INT AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(100),
    description VARCHAR(100),
    status VARCHAR(100),
    PRIMARY KEY(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);