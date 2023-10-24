CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL, 
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    role VARCHAR(255) CHECK (role IN ('Admin', 'Developer', 'Tester', 'Manager')),
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_logged_in TIMESTAMP
);

CREATE TABLE Projects (
    project_id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by INTEGER REFERENCES Users(user_id) ON DELETE SET NULL
);

CREATE TABLE Bugs (
    bug_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(255) CHECK (status IN ('New', 'In Progress', 'Resolved', 'Closed','In Test')) NOT NULL,
    severity VARCHAR(255) CHECK (severity IN ('Low', 'Medium', 'High', 'Critical')) NOT NULL,
    type VARCHAR(255) CHECK (type IN ('Functional Bug', 'UI Bug', 'Performance Bug')) NOT NULL,
    project_id INTEGER REFERENCES projects(project_id) ON DELETE SET NULL,
    reported_by INTEGER REFERENCES users(user_id) ON DELETE SET NULL,
    assigned_to INTEGER REFERENCES users(user_id) ON DELETE SET NULL, 
    date_reported TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    date_resolved TIMESTAMP,
    last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

