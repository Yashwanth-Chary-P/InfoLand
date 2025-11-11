import React, { useState, useCallback } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import "../CSS/PlotMap.css";

// --- Async polygon fetch ---
async function fetchLandPolygon(lat, lon) {
  const query = `
    [out:json];
    (
      way(around:10, ${lat}, ${lon})["landuse"];
      way(around:10, ${lat}, ${lon})["building"];
    );
    (._;>;);
    out body;
  `;
  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      body: query,
    });
    const data = await response.json();

    if (!data.elements?.length) return null;

    const nodes = {};
    for (const el of data.elements) {
      if (el.type === "node") nodes[el.id] = [el.lat, el.lon];
    }

    const way = data.elements.find((el) => el.type === "way" && el.nodes);
    return way ? way.nodes.map((id) => nodes[id]) : null;
  } catch (err) {
    console.error("Polygon fetch error:", err);
    return null;
  }
}

function MapClickHandler({ onClick }) {
  useMapEvents({
    click: (e) => onClick(e.latlng),
  });
  return null;
}

const PlotMap = () => {
  const [polygon, setPolygon] = useState([]);
  const [landDetails, setLandDetails] = useState(null);
  const [center, setCenter] = useState([17.385, 78.486]); // Hyderabad
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleMapClick = useCallback(async ({ lat, lng }) => {
    setLoading(true);

    // Temporary info while loading
    setLandDetails({
      name: `Plot near (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
      area: "Fetching data...",
      owner: "Fetching...",
      type: "Loading...",
      registrationYear: "-",
      surveyNo: "-",
      village: "-",
      district: "-",
      verifiedStatus: "Loading...",
    });
    setCenter([lat, lng]);

    const coords = await fetchLandPolygon(lat, lng);
    if (coords) {
      setPolygon(coords);
      setLandDetails({
        name: `Plot near (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
        area: "450 sq. yards",
        owner: "Harsha Vardhan",
        type: "Residential",
        registrationYear: 2021,
        surveyNo: "123/B",
        village: "Gachibowli",
        district: "Rangareddy",
        verifiedStatus: "Not Verified",
      });
    } else {
      setPolygon([]);
      setLandDetails({
        name: "No Land Found",
        area: "N/A",
        owner: "-",
        type: "-",
        registrationYear: "-",
        surveyNo: "-",
        village: "-",
        district: "-",
        verifiedStatus: "Unavailable",
      });
    }

    setLoading(false);
  }, []);

  return (
    <div
      className="flex w-full"
      style={{ height: "calc(100vh - 64px)", margin: "0 20px" }}
    >
      {/* 2/3 Map Section */}
      <div className="w-2/3 rounded-lg overflow-hidden shadow-md">
        <MapContainer
          center={center}
          zoom={18}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapClickHandler onClick={handleMapClick} />

          {polygon.length > 0 && (
            <Polygon
              positions={polygon}
              pathOptions={{
                color: "#2563eb",
                fillColor: "#60a5fa",
                fillOpacity: 0.5,
              }}
            />
          )}
        </MapContainer>
      </div>

      {/* 1/3 Details Section */}
      <div className="w-1/3 bg-white border-l shadow-xl p-6 overflow-y-auto rounded-lg ml-4">
        {!landDetails ? (
          <div className="h-full flex flex-col justify-center items-center text-gray-600">
            <h2 className="text-2xl font-semibold mb-2">Land Information</h2>
            <p className="text-center">
              Click on any plot on the map to view detailed property
              information, ownership, and verification plans.
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {landDetails.name}
              </h3>
              <button
                onClick={() => setLandDetails(null)}
                className="text-gray-500 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            {loading ? (
              <p className="text-blue-500">Loading property details...</p>
            ) : (
              <div className="space-y-3 text-gray-700">
                <p><b>Owner:</b> {landDetails.owner}</p>
                <p><b>Survey No:</b> {landDetails.surveyNo}</p>
                <p><b>Area:</b> {landDetails.area}</p>
                <p><b>Village:</b> {landDetails.village}</p>
                <p><b>District:</b> {landDetails.district}</p>
                <p><b>Type:</b> {landDetails.type}</p>
                <p><b>Registration:</b> {landDetails.registrationYear}</p>
                <p className="text-red-600 font-medium">
                  <b>Status:</b> {landDetails.verifiedStatus}
                </p>
              </div>
            )}

            <button
              onClick={() => navigate("/plans")}
              className="w-full mt-6 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Background Verification
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PlotMap;
