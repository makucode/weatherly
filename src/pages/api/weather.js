import axios from "axios";

const fetchWeather = async (req, res) => {
    console.log(req.query);
    try {
        const { data } = await axios.get(`${process.env.WEATHER_URI}onecall`, {
            params: {
                lat: req.query.lat,
                lon: req.query.lon,
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
