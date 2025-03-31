import axios from "axios";

// Define categories based on keywords
const WEATHER_KEYWORDS = ["run", "walk", "park", "outdoor", "weather"];
const NEWS_KEYWORDS = ["news", "current events", "update", "read"];
const STOCK_KEYWORDS = ["invest", "stocks", "market", "trade"];

// Categorize task based on its keywords
const categorizeTask = (task) => {
    const text = task.toLowerCase();
    if (WEATHER_KEYWORDS.some(word => text.includes(word))) return "weather";
    if (NEWS_KEYWORDS.some(word => text.includes(word))) return "news";
    if (STOCK_KEYWORDS.some(word => text.includes(word))) return "stocks";
    return "general";  // Default category for tasks that don't match any keywords
};

// Fetch relevant data based on task category
const fetchRelevantData = async (task) => {
    const category = categorizeTask(task);

    try {
        // Fetch weather data if category is weather
        if (category === "weather") {
            const res = await axios.get(`https://api.weatherapi.com/v1/current.json?key=ccd292eeec4a494caaf151222253103&q=Delhi,IN`);
            // console.log(res.data); // Logs weather data for Delhi
            return `🌤 Weather: ${res.data.current.temp_c}°C`;
        }

        // Fetch news data if category is news
        if (category === "news") {
            const res = await axios.get(`https://newsapi.org/v2/sources?country=in&apiKey=69b2103e67904560ad379388cb164fa6`);
            //   console.log(res.data); // Logs weather data for Delhi
            return `📰 News: ${res.data.sources[2].description}`;
        }

        // Fetch stock data if category is stocks
        if (category === "stocks") {
            const res = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=EAJ0CF3X0W5ONMEJ`);
            // Extract the time series data
            const timeSeries = res.data["Time Series (5min)"];

            // Get the latest time from the time series (which is the most recent 5-minute interval)
            const latestTime = Object.keys(timeSeries)[0];

            // Get the open price at the latest timestamp
            const stockPrice = timeSeries[latestTime]["1. open"];  // '1. open' gives the opening price for the interval
            return `📈 Stock Price: $${stockPrice} (Last Updated: ${latestTime})`;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        return "Failed to load relevant info.";  // Error handling
    }
};

export { categorizeTask, fetchRelevantData };
