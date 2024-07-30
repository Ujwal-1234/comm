import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [map, setMap] = useState(null);
  const [tileLayerUrl, setTileLayerUrl] = useState('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}');

  useEffect(() => {
    if (map === null) {
      // Initialize the map
      const initialMap = L.map('MapContainer').setView([20.5937, 78.9629], 5);
      // Add initial tile layer
      const tiles = L.tileLayer(tileLayerUrl, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      });
      tiles.addTo(initialMap);
      setMap(initialMap);
    } else {
      // Update tile layer URL without changing z-index
      map.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
          layer.setUrl(tileLayerUrl);
        }
      });
    }
  }, [map, tileLayerUrl]);

  const handleThemeChange = (event) => {
    setTileLayerUrl(event.target.value);
  };

  return (
    <div>
      <select className=' border border-white w-auto absolute z-10 right-10 top-10 bg-[#05363D] text-slate-200 p-2 rounded-lg' onChange={handleThemeChange} defaultValue={tileLayerUrl}>
        <option value={"https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"}>SELECT MAP</option>
        <option value="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png">Normal</option>
        <option value="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png">CartoDB Light</option>
        <option value="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}">Dark Gray{"(DEFAULT)"}</option>
      </select>
      <div id="MapContainer" className=' z-0' style={{ height: '100vh', width: '100%' }} />
    </div>
  );
};

export default Map;
