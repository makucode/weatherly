import axios from "axios";

const fetchCoordinates = async (req, res) => {
    try {
        const { data } = await axios.get(`${process.env.GEOCODING_URI}`, {
            params: {
                q: req.query.city,
                key: process.env.GEOCODING_API_KEY,
            },
        });

        res.status(200).json(data);
    } catch (error) {
        console.log(error.code, error.message);
        res.status(400).json(error);
    }
};

export default fetchCoordinates;
