import mapboxgl from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {

    const markerEl = document.createElement("div");
    markerEl.style.width = "32px";
    markerEl.style.height = "39px";
    markerEl.style.backgroundImage = `url(${iconURLs[type]})`;
    return new mapboxgl.Marker(markerEl).setLngLat(coords);
};

export default buildMarker;