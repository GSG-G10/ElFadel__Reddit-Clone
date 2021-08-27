BEGIN;
DROP TABLE IF EXISTS users , posts ,comments CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL,
    email VARCHAR(225) UNIQUE NOT NULL
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    content VARCHAR(225),
    user_id INTEGER  REFERENCES users(id),
    votes INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    isPrivate BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content VARCHAR(225) NOT NULL,
    post_id INTEGER REFERENCES posts(id),
    user_id INTEGER REFERENCES users(id),
    votes INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP  
);
COMMIT;