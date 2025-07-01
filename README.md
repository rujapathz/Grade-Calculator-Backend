### Overview
This is the backend service of the Grade Calculator web application. It provides RESTful APIs to manage students' grade data including name, score, and calculated grade.

### Features
- Create a new grade with name and score
- Automatically check for existing names before create or update
- Retrieve all grades or filter by name
- Update grade or score by ID with validation
- Delete grade entries
- Validation using DTOs and class-validator
- Custom error handling using BadRequestException

### Install
1. Install dependencies:
```bash
yarn install
```
2. Start development server:
```bash
yarn start:dev
```
3. Open in backend API:
```bash
http://localhost:4000/grades
```

### Development
#### Tech Stack
- **Language**: TypeScript
- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Validation**: class-validator, class-transformer


#### Project Structure 
```bash
src/
├── config/
│   └── postgres.config.ts     
├── grades/
│   ├── dto/
│   │   ├── create-grade.dto.ts  
│   │   └── update-grade.dto.ts  
│   ├── entities/
│   │   └── grade.entity.ts      
│   ├── grades.controller.ts    
│   ├── grades.module.ts         
│   ├── grades.service.ts        
├── app.controller.ts
├── app.module.ts
├── main.ts    
```
#### Folder & File Descriptions
- `components/`: Contains UI components used across the app
  - `stepContainer.tsx`: Main container that controls step flow and manages overall state
  - `stepName.tsx`: Form for entering student name with validation and navigation buttons
  - `stepScore.tsx`:  Score input form with validation and navigation buttons
  - `stepResult.tsx`: Displays the calculated grade result
- `page/`: Page components and route handling (Next.js)
  - `api/rest_api.tsx`: Contains frontend API functions to call the backend
  - `grade/index.tsx`: Grade Calculator page that uses server-side rendering (`getServerSideProps`) to fetch initial grade data and renders the UI with `StepContainer`.
- `styles/`: Styling assets for the web application
  - `global.css`:  Tailwind CSS directives and global styles

#### API Endpoints



