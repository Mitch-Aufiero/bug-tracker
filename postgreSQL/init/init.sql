CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    role VARCHAR(255),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_logged_in TIMESTAMP
);

CREATE TABLE Projects (
    project_id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER NOT NULL
);

CREATE TABLE Bugs (
    bug_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(255) NOT NULL,
    severity VARCHAR(255)  NOT NULL,
    type VARCHAR(255) NOT NULL,
    project_id INTEGER NOT NULL,
    reported_by INTEGER NOT NULL,
    assigned_to INTEGER DEFAULT NULL, 
    date_reported TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_resolved TIMESTAMP,
    last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

