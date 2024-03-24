import BusData from "../models/buses.js";
import LocationData from "../models/buses.js"; // Assuming LocationData is a separate model for storing locations

export const getBuses = async (req, res) => {
    try {
        const allBuses = await BusData.find();
        res.status(200).json(allBuses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const locations = async (req, res) => {
    try {
        const { source, destination } = req.body;
        const newLocation = new LocationData({ source, destination });
        await newLocation.save(); // Saving the new location data
        res.status(200).json({ message: 'Location data received successfully', source, destination });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
