# Simple Promotion Management

A simple REST API service for managing promotions built with Node.js, Express, and TypeScript.

## Features

- Create, read, update, and delete promotions
- Input validation using express-validator
- TypeScript for type safety and better development experience
- Hot reloading during development

## Prerequisites

- Node.js (v18 or higher)
- npm (v6 or higher)

## Installation

```bash
npm install
```

## Running the Application

### Development Mode

To run the application in development mode with hot reloading:

```bash
npm run dev
```

### Production Mode

1. Build the TypeScript files:

```bash
npm run build
```

2. Start the application:

```bash
npm start
```

## Project Structure

```
simple-promotion-management/
├── src/                    # Source code
├── dist/                   # Compiled JavaScript files
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## API Endpoints

- `POST /promotions` - Create a new promotion
- `GET /promotions` - Get all promotions
- `GET /promotions/:uuid` - Get a specific promotion
- `PUT /promotions/:uuid` - Update a promotion
- `PATCH /promotions/:uuid` - Set a promotion active status
- `DELETE /promotions/:uuid` - Delete a promotion

## Technologies Used

- Node.js
- Express.js
- TypeScript
- express-validator
- UUID for unique identifiers

## License

ISC
