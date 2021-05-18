import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import FeatureLayer = require("esri/layers/FeatureLayer");

( async () => {

  const structures = new FeatureLayer({
    portalItem: {
      id: "8d47d8981c514666b7c98196d63d1086"
    }
  });

  const map = new WebMap({
    basemap: "dark-gray-vector",
    layers: [ structures ]
  });

  const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [ -118.244, 34.052],
    zoom: 12
  });

})()
