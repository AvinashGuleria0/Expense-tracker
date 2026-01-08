# Live Link 
### https://avi-expense-tracker.netlify.app 

# Expense Tracker

A full-stack web application for tracking personal expenses and income. Built with a Node.js backend and a React frontend, featuring user authentication, data visualization, and responsive design.

## Features

- **User Authentication**: Secure login and signup functionality
- **Expense Management**: Add, view, and manage expenses with categories
- **Income Tracking**: Record and monitor income sources
- **Dashboard**: Overview of financial data with charts and summaries
- **Data Visualization**: Interactive charts for expenses and income trends
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication
- Multer for file uploads

### Frontend
- React
- Vite
- Tailwind CSS
- Axios for API calls
- Chart.js for data visualization

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the backend directory with:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend/expense-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173` (or the port shown in the terminal)

## Usage

1. Register a new account or log in with existing credentials
2. Add your income sources and expenses
3. View your financial overview on the dashboard
4. Analyze trends with the built-in charts
5. Manage your profile and transactions

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Dashboard
- `GET /api/dashboard` - Get dashboard data

### Expenses
- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Add new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense

### Income
- `GET /api/income` - Get all income
- `POST /api/income` - Add new income
- `PUT /api/income/:id` - Update income
- `DELETE /api/income/:id` - Delete income

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.</content>
<parameter name="filePath">/home/avinash/Desktop/coding/avinash-github/Expense-tracker/README.md