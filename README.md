# Event Management System

## Introduction
The Event Management System is a full-stack web application designed to help users create, manage, and book events. This project showcases proficiency in React, TypeScript, .NET 6, Entity Framework Core, and SQL Server. The application includes features for event creation, user management, and booking management, with a responsive and visually appealing UI.

## Features

### Basic Features
- **Frontend**:
  - React project using TypeScript.
  - Styling with MUI for a consistent and responsive design.
  - React Router for navigation.
  - Git integration for version control.
  
- **Backend**:
  - Built with C# and .NET 6.
  - Entity Framework Core for data access.
  - SQL Server for database management.
  - CRUD operations for events, users, and bookings.
  - Git integration for version control.

### Advanced Features
- Integration with Storybook for component development.
- State management with Redux.
- Theme switching between dark and light modes.
- Containerization with Docker.
- Real-time notifications using SignalR.
- End-to-end testing with Cypress.
- Deployment on Azure.

## Installation and Setup

### Prerequisites
- [.NET 6 SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Visual Studio Code](https://code.visualstudio.com/) or any other IDE of your choice

### Backend Setup
1. **Clone the repository**:
   ```bash
     git clone https://github.com/yourusername/EventManagementSystem.git
     cd EventManagementSystem/EventManagementAPI
2. **Install dependencies**:
   ```bash
     dotnet restore 
3. **Update appsettings.json with your SQL Server connection string**:
   ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "Server=YOUR_SERVER_NAME;Database=EventManagementDB;Trusted_Connection=True;MultipleActiveResultSets=true"
      },
      "Logging": {
        "LogLevel": {
          "Default": "Information",
          "Microsoft.AspNetCore": "Warning"
        }
      },
      "AllowedHosts": "*"
    } 
4. **Create the initial migration and update the database**:
   ```bash
    dotnet ef migrations add InitialCreate 
    dotnet ef database update 
5. **Run the application**:
   ```bash
    dotnet run 
### Frontend Setup
1. **Navigate to the frontend directory**:
   ```bash
    cd ../EventManagementClient 
2. **Install dependencies**:
   ```bash
    npm install 
3. **Start the development server**:
   ```bash
    npm start 
### Usage
- **API Endpoints**:
  - GET /api/events
  - GET /api/events/{id}
  - POST /api/events
  - PUT /api/events/{id}
  - DELETE /api/events/{id}
  - Similar endpoints for users and bookings.
- **Frontend**:
  - Access the application at **http://localhost:3000**.
### Deployment
- **Docker**:
  - Build and run Docker containers for frontend and backend.
- **Azure**:
  - Deploy the application on Azure App Services.
### Contributing
- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature-branch).
- Open a pull request.
### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
- Microsoft Student Accelerator Program for the guidance and support.
- All contributors and community members.
