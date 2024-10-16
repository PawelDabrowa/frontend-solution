# Frontend API Solution Project

This repository contains the frontend implementation for a test booking system. The project interacts with an API, handling potential API failures and displaying data related to bookings and users. The project is built using React, TypeScript, and Axios for API communication, and it includes handling for API failures.

## Requirements

To run this project locally, ensure you have the following installed:

- **Node.js**: Version 14 or above
- **npm**
- **API**: The backend API should be running locally

## Run Project

### Clone the Repository:
```bash
git clone https://github.com/your-username/frontend-test-project.git
cd frontend-test-project
npm install
npm start
```
The application will be available at http://localhost:3000.

```bash
npm test
```
The tests will automatically run using Jest and React Testing Library.


Project Structure:

frontend-test-project/
│
├── src/
│   ├── ApiDataComponent.tsx         # Component that fetches data from the API
│   ├── App.tsx                      # Main application file
│   ├── ApiDataComponent.test.tsx    # Unit tests for the ApiDataComponent
│   └── apiService.ts                # Service handling API interactions
│  
├── package.json                     # Project dependencies and scripts
├── tsconfig.json                    # TypeScript configuration

