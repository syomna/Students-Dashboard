# Students Dashboard

This is a simple Angular project showcasing CRUD operations for managing student data. It uses JSON Server as a mock REST API to simulate backend functionality.

## Getting Started

To get started with the project, follow the instructions below.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js: https://nodejs.org
- Angular CLI: https://angular.io/cli
- JSON Server: https://www.npmjs.com/package/json-server

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/syomna/Students-Dashboard.git
   ```

2. Navigate to the project directory:
   ```shell
   cd angular-project
   ```
3. Install the dependencies:
   ```shell
   npm install
   ```

### Development Server

1. Navigate to the project directory:
   ```shell
   cd angular-project
   ```
2. Start the JSON Server to simulate the backend API:

   ```shell
   json-server --watch students.json
   This will start the JSON Server and use the students.json file as the data source.

   ```

3. In a separate terminal, start the Angular development server:
   ```shell
   ng serve
   Navigate to http://localhost:4200/ in your web browser to access the application.
   ```

### Features

- View a list of students
- Add a new student
- Edit an existing student
- Delete a student

### Technologies Used

- Angular
- HTML
- CSS
- Bootstrap
- TypeScript
- JSON Server

### Acknowledgements

- Bootstrap: https://getbootstrap.com
- ngx-toastr: https://www.npmjs.com/package/ngx-toastr
- JSON Server: https://www.npmjs.com/package/json-server
