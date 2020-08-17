import mapboxgl from "mapbox-gl";
import buildMarker from "./marker.js";

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZXJpZWluZ21hbm4iLCJhIjoiY2tkeW9kZmFzMjdwMDJ5bnhjOHI5MHZsZiJ9.mMkUPMqyyS517L7G6bh2lw';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
  });

const marker = buildMarker("restaurants", [-74.009151, 40.705086]);
marker.addTo(map);
