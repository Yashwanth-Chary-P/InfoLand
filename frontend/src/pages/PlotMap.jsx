


import React, { useState } from "react";
import {
    MapContainer,
    TileLayer,
    Polygon,
    Popup,
    useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CSS/PlotMap.css"; // Import the CSS file

// --- Fetch real land polygon from Overpass API ---
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
    const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
    });
    const data = await response.json();

    if (!data.elements || data.elements.length === 0) return null;

    const nodes = {};
    data.elements.forEach((el) => {
        if (el.type === "node") {
            nodes[el.id] = [el.lat, el.lon];
        }
    });

    const ways = data.elements.filter((el) => el.type === "way" && el.nodes);
    if (ways.length === 0) return null;

    const coords = ways[0].nodes.map((nodeId) => nodes[nodeId]);
    return coords;
}

function MapClickHandler({ onPolygon }) {
    useMapEvents({
        click: async (e) => {
            const { lat, lng } = e.latlng;
            const polygon = await fetchLandPolygon(lat, lng);
            if (polygon) {
                onPolygon(polygon, lat, lng);
            } else {
                alert("No land boundary found for this area.");
            }
        },
    });
    return null;
}

const PlotMap = () => {
    const [polygon, setPolygon] = useState([]);
    const [landDetails, setLandDetails] = useState(null);
    const [showPlans, setShowPlans] = useState(false);
    const [center, setCenter] = useState([17.385, 78.486]); // Default: Hyderabad

    const handlePolygonSelect = (coords, lat, lng) => {
        setPolygon(coords);
        setLandDetails({
            name: `Plot near (${lat.toFixed(4)}, ${lng.toFixed(4)})`,
            area: "450 sq. yards",
            owner: "Yashwanth Chary",
            type: "Residential",
            registrationYear: 2021,
            surveyNo: "123/B",
            village: "Gachibowli",
            district: "Rangareddy",
            verifiedStatus: "Not Verified",
        });
        setCenter([lat, lng]);
        setShowPlans(false);
    };

    const plans = [
        {
            name: "Basic",
            price: "₹499",
            includes: ["EC, Tax, Govt Record Check"],
        },
        {
            name: "Standard",
            price: "₹1,999",
            includes: ["Basic + Title Check, Lawyer Opinion"],
        },
        {
            name: "Premium",
            price: "₹4,999",
            includes: ["Standard + Physical Visit, Dispute"],
        },
    ];

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <MapContainer
                center={center}
                zoom={18}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapClickHandler onPolygon={handlePolygonSelect} />

                {polygon.length > 0 && (
                    <Polygon
                        positions={polygon}
                        pathOptions={{
                            color: "#2563eb",
                            fillColor: "#60a5fa",
                            fillOpacity: 0.5,
                        }}
                    >
                        <Popup>
                            <div

                                className="popup-container"

                                onClick={(e) => e.stopPropagation()}
                            >
                                {landDetails && (
                                    <div className="popup-details">
                                        <h3>{landDetails.name}</h3>
                                        <p>
                                            <b>Owner:</b> {landDetails.owner}
                                        </p>
                                        <p>
                                            <b>Survey No:</b> {landDetails.surveyNo}
                                        </p>
                                        <p>
                                            <b>Area:</b> {landDetails.area}
                                        </p>
                                        <p>
                                            <b>Village:</b> {landDetails.village}
                                        </p>
                                        <p>
                                            <b>District:</b> {landDetails.district}
                                        </p>
                                        <p>
                                            <b>Type:</b> {landDetails.type}
                                        </p>
                                        <p>
                                            <b>Registration:</b> {landDetails.registrationYear}
                                        </p>
                                        <p style={{ color: "#dc2626" }}>
                                            <b>Status:</b> {landDetails.verifiedStatus}
                                        </p>

                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setShowPlans((prev) => !prev);
                                            }}
                                            className={`btn-toggle-plans ${showPlans ? "hide" : ""}`}
                                        >
                                            {showPlans
                                                ? "Hide Verification Plans"
                                                : "View Background Verification"}
                                        </button>
                                    </div>
                                )}

                                {/* Background Verification Plans */}
                                {showPlans && (
                                    <div className="plans-section">
                                        <h4>Background Analysis Plans</h4>
                                        <div className="plans-container">
                                            {plans.map((plan, index) => (
                                                <div key={index} className="plan-card">
                                                    <div className="plan-header">
                                                        <b className="plan-name">{plan.name}</b>
                                                        <span className="plan-price">{plan.price}</span>
                                                    </div>
                                                    <ul className="plan-features">
                                                        {plan.includes.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                    <button className="btn-select-plan">
                                                        Select Plan
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Popup>
                    </Polygon>
                )}
            </MapContainer>
        </div >
    );
};

export default PlotMap;