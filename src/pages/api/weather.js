import axios from "axios";

const fetchWeather = async (req, res) => {
    try {
        const { data } = await axios.get(`${process.env.WEATHER_URI}onecall`, {
            params: {
                id: "524901",
                appid: process.env.WEATHER_API_KEY,
                units: "metric",
            },
        });

        res.status(200).json(data);
    } catch (error) {
        console.log(error.code, error.message);
        res.status(400).json(error);
    }
};

export default fetchWeather;
