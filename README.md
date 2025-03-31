# Task Manager with API Integration

This project is a Task Manager application that allows users to manage their tasks with additional data fetched from external APIs. The app fetches weather, news, and stock price information related to each task, providing relevant insights to the user based on the task category.

## Features

- **Add Tasks**: Create tasks and assign priority levels.
- **Task Categories**: The tasks are categorized with different types of relevant external data such as weather conditions, news headlines, and stock prices.
- **API Integration**: Fetches data from public APIs (Weather API, News API, and Stock API) to display relevant information.
- **Task Removal**: Delete individual tasks from the list.
- **Clear All Tasks**: Option to clear all tasks from the list.
- **Responsive Design**: The app is responsive and works across different devices.

## Setup and Installation

### Prerequisites

Before setting up this project, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (Node Package Manager, which comes bundled with Node.js)
- **Git** (for cloning the repository)

### 1. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/task-manager-app.git
cd task-manager-app

Install Dependencies
After cloning the repository, install the required dependencies:
npm install

3. Set Up Environment Variables
Create a .env file at the root of your project to store the necessary API keys securely. You will need the following API keys:

Weather API Key: WeatherAPI

News API Key: NewsAPI

Add these keys to your .env file:
VITE_REACT_APP_WEATHER_API_KEY=your_weather_api_key
VITE_REACT_APP_NEWS_API_KEY=your_news_api_key

Start the Development Server
Once the environment variables are set up, you can start the development server:
npm start

Features Implemented
1. Add Task
Users can add a task by entering a description and selecting a priority. Each task will be categorized based on keywords in the task description.

2. Task Categories
Tasks can be categorized into different categories like:

Weather: If the task is related to outdoor activities, the app fetches weather data based on the location and displays the current weather.

News: If the task is related to current events, the app fetches the latest news headlines based on the user's location.

Stocks: If the task is related to financial tracking, the app fetches stock price information.

3. Task List
The app displays all tasks in a list. Each task has:

A description

A priority level (High, Medium, Low)

Relevant external data fetched from APIs based on the task's category.

4. Task Removal
Tasks can be removed individually from the list by clicking the "Delete" button next to each task.

5. Clear All Tasks
Users can clear all tasks by clicking the "Clear All Tasks" button. A confirmation dialog will appear to confirm the action.

6. Task Persistence
Tasks are stored in localStorage, so even if the app is closed and reopened, the tasks will persist.

Folder Structure
The project follows a modular structure to keep the components and context organized:

/src
  /components
    TaskInput.js      - Component to add new tasks
    TaskList.js       - Component to display list of tasks
    TaskCard.js       - Displays individual task information
    DisplayTask.js    - Displays tasks and handles deletion
  /contextCreate
    TaskContext.js    - Provides task context to the app
  /utils
    fetchData.js      - Contains functions to fetch data from APIs
  /styles
    App.css           - Global styling for the app
  App.js              - Main app component
  index.js            - Entry point for React application
  .env                - Environment variables for API keys

API Integration Details
Weather API
The weather API is used to fetch the current weather conditions for a location specified in a task. The API used is WeatherAPI.
const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}&q=Delhi,IN`);

News API
The news API is used to fetch the latest news headlines. The API used is NewsAPI.
const res = await axios.get(`https://newsapi.org/v2/sources?country=in&apiKey=${import.meta.env.VITE_REACT_APP_NEWS_API_KEY}`);

