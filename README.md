## Overview

This is the backend service of the Grade Calculator web application. It provides RESTful APIs to manage grade data including name, score, and calculated grade.

## Features

- Create a new grade with name and score
- Automatically check for existing names before create or update
- Retrieve all grades or filter by name
- Update grade or score by ID with validation
- Delete grade entries
- Validation using DTOs and class-validator
- Custom error handling using BadRequestException

## Tech Stack

- **Language**: TypeScript
- **Framework**: NestJS 11.0.7
- **Database**: PostgreSQL 17.5
- **ORM**: TypeORM
- **Validation**: class-validator, class-transformer

## Installation

1. Install dependencies

```bash
yarn install
```

2. Start development server

```bash
yarn start:dev
```

3. Open in backend API

```bash
http://localhost:4000/grades
```

## Configuration

Create a `.env` file in the project root with the following environment variables to configure the database connection.

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_user
DB_PASSWORD=your_password
DB_NAME=your_database
```

## Database Setup

- Database: PostgreSQL
- Connection: Managed via TypeORM in `postgres.config.ts` using `.env` variables

### Using Docker

`docker-compose.yml`

```docker-compose
version: '3.8'

services:
  postgres:
    container_name: grade_calculator_postgres
    image: postgres
    environment:
      POSTGRES_DB: your_database
      POSTGRES_USER: your_user
      POSTGRES_PASSWORD: your_password
      PGDATA: /data/postgres
      TZ: Asia/Bangkok
    volumes:
      - postgres-data:/data/postgres
    ports:
      - '5432:5432'

volumes:
  postgres-data:
```

Start PostgreSQL service

```bash
docker-compose up -d
```

### Using SQL Script

Alternatively, you can manually create the grades table by running this SQL script.

```sql
CREATE TABLE IF NOT EXISTS grades (
id SERIAL PRIMARY KEY,
name TEXT UNIQUE NOT NULL,
score INTEGER,
grade TEXT
);
```

## Project Structure

```bash
src/
├── config/
│ └── postgres.config.ts
├── grades/
│ ├── dto/
│ │ ├── create-grade.dto.ts
│ │ └── update-grade.dto.ts
│ ├── entities/
│ │ └── grade.entity.ts
│ ├── grades.controller.ts
│ ├── grades.module.ts
│ ├── grades.service.ts
├── app.controller.ts
├── app.module.ts
├── main.ts
```

#### Folder & File Descriptions

- `config/`:
  - `postgres.config.ts`: Database connection configuration using TypeORM and environment variables from `.env`
- `grades/`:
  - `dto/`
    - `create-grade.dto.ts`: DTO for creating a new grade entry, includes validation rules
    - `update-grade.dto.ts`: DTO for updating a grade, with optional validated fields
- `entities/`:
  - `grade.entity.ts`: GradeEntity that maps to the grades table in PostgreSQL
- `grades.controller.ts`: Handles HTTP requests and routes for the /grades endpoints
- `grades.module.ts`: Declares and organizes all components related to the grades feature
- `grades.service.ts`: Contains logic for grade operations (create, read, update, delete)
- `app.controller.ts`: Default root controller
- `app.module.ts`: Root module that imports all feature modules, including GradesModule
- `main.ts`: Application entry point that bootstraps the NestJS app

## API Endpoints

| Method | Endpoint      | Description                      |
| ------ | ------------- | -------------------------------- |
| GET    | `/grades`     | Get all grades or filter by name |
| GET    | `/grades/:id` | Get grade by ID                  |
| POST   | `/grades`     | Create new grade                 |
| PATCH  | `/grades/:id` | Update grade by ID               |
| DELETE | `/grades/:id` | Delete grade by ID               |

## Validation

All input is validated using DTOs with class-validator.

#### CreateGradeDto

- `name`: required, must be a non-empty string
- `score`: required, must be an integer between 0–100

#### UpdateGradeDto

- All fields are optional
- If name is provided, must not be duplicated
- If score is provided, must be an integer between 0–100

## Libraries Used

- `@nestjs/common`
- `@nestjs/typeorm`
- `pg` (PostgreSQL client)
- `class-validator`, `class-transformer`
