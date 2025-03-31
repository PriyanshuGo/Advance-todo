import axios from "axios";

// Define categories based on keywords
const WEATHER_KEYWORDS = ["run", "walk", "park", "outdoor", "weather"];
const NEWS_KEYWORDS = ["news", "current events", "update", "read"];

// Categorize task based on its keywords
const categorizeTask = (task) => {
    const text = task.toLowerCase();
    if (WEATHER_KEYWORDS.some(word => text.includes(word))) return "weather";
    if (NEWS_KEYWORDS.some(word => text.includes(word))) return "news";
    return "general";  // Default category for tasks that don't match any keywords
};

// Fetch relevant data based on task category
const fetchRelevantData = async (task) => {
    const category = categorizeTask(task);

    try {
        // Fetch weather data if category is weather
        if (category === "weather") {
            const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_REACT_APP_WEATHER_API_KEY}&q=Delhi,IN`);
            // console.log(res.data); // Logs weather data for Delhi
            return `🌤 Weather: ${res.data.current.temp_c}°C`;
        }

        // Fetch news data if category is news
        if (category === "news") {
            const res = await axios.get(`https://newsapi.org/v2/sources?country=in&apiKey=${import.meta.env.VITE_REACT_APP_NEWS_API_KEY}`);
            //   console.log(res.data); // Logs weather data for Delhi
            return `📰 News: ${res.data.sources[2].description}`;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        return "Failed to load relevant info.";  // Error handling
    }
};

export { categorizeTask, fetchRelevantData };
