BEGIN;
DROP TABLE IF EXISTS users , posts ,comments CASCADE;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(225) UNIQUE NOT NULL,
    password VARCHAR(225) NOT NULL,
    email VARCHAR(225) UNIQUE NOT NULL,
    image TEXT DEFAULT 'https://pics.me.me/thumb_i-edited-the-default-reddit-profile-picture-i-hope-you-68963409.png'
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(225) NOT NULL,
    content TEXT NOT NULL ,
    user_id INTEGER  REFERENCES users(id) ON DELETE CASCADE,
    votes INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    isPrivate BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id),
    votes INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP  
);
COMMIT;