# React [Redux / Tanstack/React Query / Mock Service Worker] JavaScript Starter/Boilerplate

## Overview

This project is built using **React 18.3.1** and leverages several popular JavaScript libraries and tools to create a modern, fast, and scalable front-end application. The project uses **Vite** as its build tool for optimized development and production builds.

## Requirements

- **Node.js** ~ ^v23.x.x
- **NPM** ~ ^v10.x.x

## Features

- **React & Redux** for state management and UI rendering.
- **React Router DOM** for routing.
- **Axios** for HTTP requests.
- **React Query** integration for server state management.
- **Eslint** and **Prettier** for maintaining code quality and style consistency.
- **SASS Embedded** for advanced styling capabilities.
- Mocking with **MSW** (Mock Service Worker).

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/dsvjetl/react-redux-tanstack-msw-js-starter
    cd react-redux-tanstack-msw-js-starter
    ```

2. Install dependencies using `npm`:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

4. Open the project in your browser at `http://localhost:5173` (default port for Vite).

## Project Structure

```plaintext
.
├── src
│   ├── shared        # Reusable React components, services, utils, etc.
│   ├── views         # Page-level React components
│   ├── store         # Redux store
│   ├── routing       # React Router
│   ├── assets        # Multimedia files
│   ├── mocks         # Mock Service Worker config
│   └── App.jsx       # Main application entry point
├── public            # Static assets (e.g., index.html, images) & mockServiceWorker.js
├── package.json      # Project dependencies and scripts
├── .eslintrc.json    # ESLint configuration
├── prettier.config.js # Prettier configuration
├── README.md         # Documentation
└── vite.config.js    # Vite configuration
```

## Scripts

Below are the standard scripts defined in the `package.json`:

- **Start the development server:**

    ```bash
    npm run dev
    ```
- **Start the mock (MSW) server:**

    ```bash
    npm run dev:mock
    ```

- **Create production build:**

    ```bash
    npm run build
    ```

- **Preview production build locally:**

    ```bash
    npm run preview
    ```

- **Lint the project:**

    ```bash
    npm run lint
    ```

- **Format the project:**

    ```bash
    npm run format
    ```

## Libraries and Tools

| Library/Tool              | Version     | Use Case                                  |
|---------------------------|-------------|-------------------------------------------|
| **React**                 | 18.3.1      | UI Rendering                              |
| **React Redux**           | 9.2.0       | State management                          |
| **React Router DOM**      | 7.0.2       | Client-side routing                       |
| **Axios**                 | 1.7.9       | HTTP requests                             |
| **React Query**           | 5.62.8      | Server state management                   |
| **Eslint**                | 8.57.1      | Error prevention and code standardization |
| **Prettier**              | 3.4.2       | Code formatting                           |
| **SASS Embedded**         | 1.83.0      | Advanced CSS styling                      |
| **Mock Service Worker**   | 2.7.0       | API data mocking for testing              |
| **Vite**                  | 6.0.3       | Lightning-fast development build tool     |

For a complete list of dependencies, check the `package.json` file.

## Development Guidelines

### Linting and Formatting

Run the linting script to check for code issues:

```bash
npm run lint
```

Prettier is configured to auto-format code on save using your IDE. Ensure that your development setup supports Prettier auto-formatting.

### Adding New Features

This project utilizes **Plop.js** to scaffold components. To create a new component, run:

```bash
npm run plop
```

Follow the prompts to auto-generate boilerplate files for the React components.

### Mocking Data with MSW

This project uses **Mock Service Worker (MSW)** to mock API endpoints during development and testing. MSW ensures controlled responses and prevents dependency on actual backend services.
See the `src/views/HomeExample/mocks/postsMock.js` as an example.

```bash
npm run dev:mock
```

## Contribution Guidelines

1. Fork the repository and create a new branch for your feature or bugfix.
2. Ensure all changes are tested, formatted, and do not introduce linting errors.
3. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the [MIT License](./LICENSE).

---

Happy Coding! 🎉