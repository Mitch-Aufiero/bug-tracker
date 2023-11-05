# Bug Tracker App

A comprehensive bug tracker application built using React for the frontend, Express.js for the backend, PostgreSQL as the database, and Redis for caching. The entire stack is containerized using Docker Compose for quick and easy setup.

**Note**: This project is a work-in-progress, and I'm actively updating it daily.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Application Structure](#application-structure)
- [Additional Notes](#additional-notes)

## Features

- **User Authentication**: Register, login, and logout functionality.
- **Bug Management**: Users can create, update, view, and delete bugs.
- **Caching**: Utilizes Redis to cache frequently accessed data.
- **Containerized**: Quick setup using Docker Compose.

## Technologies Used

- **Frontend**:
  - **Framework**: React
  - **State Management**: Redux
  - **Styling**: Styled Components

- **Backend**:
  - **Framework**: Express.js
  - **Testing**: Jest

- **Database**:
  - PostgreSQL (Initial seed data can be found in `postgreSQL/init/seed.sql`)

## Prerequisites

- Docker & Docker Compose
- Node.js (if running outside of Docker)

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/bug-tracker.git
   cd bug-tracker
   ```

2. **Run using Docker Compose**:

   ```bash
   docker-compose up
   ```

   This will start the frontend on port `3000`, the backend on port `5000`, PostgreSQL on its default port `5432`, and Redis on its default port `6379`.

3. **Access the Application**:

   Open your browser and visit `http://localhost:3000`.

## Application Structure

```
bug-tracker-app/
|-- react/     # Frontend code (React, Redux, Styled Components)
|   |-- src/
|   |-- public/
|   |-- Dockerfile
|   `-- ...
|-- express/                  # Backend code (Express.js with Jest for unit testing)
|   |-- routes/
|   |-- middleware/
|   |-- Dockerfile
|   `-- ...
|-- postgreSQL/               # Database scripts, schemas, and seed data (PostgreSQL)
|-- cache/                    # Cache configurations (Redis)
`-- docker-compose.yml
```

## Additional Notes

- Please report any issues or feature requests as this project continues to evolve.
- This is a personal project, but feel free to fork!
