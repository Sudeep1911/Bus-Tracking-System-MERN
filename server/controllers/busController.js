// server/controllers/busController.js

import { getBusCollection } from '../config/mongo';

export async function getAllBuses(req, res) {
  try {
    // Get the bus collection
    const collection = await getBusCollection();

    // Find all documents in the collection
    const cursor = collection.find({});

    // Convert cursor to array of documents
    const buses = await cursor.toArray();

    // Send response with the retrieved bus data
    res.json(buses);
  } catch (err) {
    console.error("Error retrieving bus details:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
