import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import FeatureLayer = require("esri/layers/FeatureLayer");
import PopupTemplate = require("esri/PopupTemplate");
import { createPopupTemplate } from "esri/support/popupUtils";
import { renderer } from "./renderers";

( async () => {

  const structures = new FeatureLayer({
    portalItem: {
      id: "8d47d8981c514666b7c98196d63d1086"
    },
    popupEnabled: true
  });

  const map = new WebMap({
    basemap: "gray-vector",
    layers: [ structures ]
  });

  const view = new MapView({
    map,
    container: "viewDiv",
    center: [ -118.244, 34.052],
    zoom: 12,
    // popup: {
    //   defaultPopupTemplateEnabled: true
    // }
  });

  await view.when();
  await structures.when();
  structures.popupTemplate = createPopupTemplate({
    title: "test",
    fields: structures.fields
  });

  structures.renderer = renderer;

  view.goTo(structures.fullExtent);

})()
