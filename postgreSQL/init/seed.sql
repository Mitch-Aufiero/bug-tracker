-- Insert data into Users table
INSERT INTO Users (username, password, email, first_name, last_name, role) VALUES
('admin', 'hashed_password_1', 'admin@example.com', 'John', 'Doe', 'Admin'),
('devJane', 'hashed_password_2', 'jane@example.com', 'Jane', 'Smith', 'Developer'),
('testerEve', 'hashed_password_3', 'eve@example.com', 'Eve', 'Johnson', 'Tester'),
('mgrAlice', 'hashed_password_4', 'alice@example.com', 'Alice', 'Brown', 'Manager');

-- Insert data into Projects table
INSERT INTO Projects (name, description, created_by) VALUES
('Project Alpha', 'This is the first project.', 1),
('Project Beta', 'This is the second project.', 2);

-- Insert data into Bugs table
INSERT INTO Bugs (title, description, status, severity, type, project_id, reported_by, assigned_to) VALUES
('Login Bug', 'Unable to login using correct credentials.', 'New', 'High', 'Functional Bug', 1, 2, 3),
('Slow Dashboard', 'Dashboard loads slowly when accessing Project Alpha.', 'In Progress', 'Medium', 'Performance Bug', 1, 3, 2),
('Misaligned Button', 'Submit button on the form is misaligned.', 'New', 'Low', 'UI Bug', 2, 1, 2);
