// pages/api/serp.js

import { getJson } from "serpapi";

export default async function handler(req, res) {
  const ll = "@40.7455096,-74.0083012,14z"; // Set the value for the `ll` parameter
  const q = "hotels"; // Set the value for the `q` parameter
  
  // Make API request to SERP API
  getJson({
    engine: "google_maps",
    q,
    ll,
    type: "search",
    api_key: "YOUR_SERP_API_KEY" // Replace with your SERP API key
  }, (json) => {
    // Send response
    res.status(200).json(json["local_results"]);
  });
}
