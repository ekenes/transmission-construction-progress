import esri = __esri;

import WebMap = require("esri/WebMap");
import MapView = require("esri/views/MapView");
import FeatureLayer = require("esri/layers/FeatureLayer");
import PopupTemplate = require("esri/PopupTemplate");
import LayerList = require("esri/widgets/LayerList");
import ActionButton = require("esri/support/actions/ActionButton");
import { createPopupTemplate } from "esri/support/popupUtils";

import { accessRdWebStyleRenderer, accessRdWurmanRenderer, foundationWebStyleRenderer, foundationWurmanRenderer, padSiteWebStyleRenderer, padSiteWurmanRenderer, stackedRenderer, stackedRendererWithTower, structureWebStyleRenderer, structureWurmanRenderer, wirePullWebStyleRenderer, wirePullWurmanRenderer } from "./renderers";
import { buffer } from "esri/geometry/geometryEngine";

( async () => {

  const buff = buffer

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
    zoom: 12
  });

  const renderers = [
    {
      renderer: stackedRendererWithTower,
      id: "stacked-renderer-tower",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Stacked renderer (tower)",
        id: "stacked-renderer-tower"
      })
    },

    {
      renderer: stackedRenderer,
      id: "stacked-renderer",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Stacked renderer",
        id: "stacked-renderer"
      })
    },
    {
      renderer: accessRdWurmanRenderer,
      id: "access-roads",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Access Roads",
        id: "access-roads"
      })
    },
    {
      renderer: padSiteWurmanRenderer,
      id: "pad-site",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Pad Site",
        id: "pad-site"
      })
    },
    {
      renderer: foundationWurmanRenderer,
      id: "foundation",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Foundation",
        id: "foundation"
      })
    },
    {
      renderer: structureWurmanRenderer,
      id: "structure",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Structure",
        id: "structure"
      })
    },
    {
      renderer: wirePullWurmanRenderer,
      id: "wire-pull",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Wire Pull",
        id: "wire-pull"
      })
    },


    {
      renderer: accessRdWebStyleRenderer,
      id: "access-roads-webstyle",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Access Roads (Web style)",
        id: "access-roads-webstyle"
      })
    },
    {
      renderer: padSiteWebStyleRenderer,
      id: "pad-site-webstyle",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Pad Site (Web style)",
        id: "pad-site-webstyle"
      })
    },
    {
      renderer: foundationWebStyleRenderer,
      id: "foundation-webstyle",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Foundation (Web style)",
        id: "foundation-webstyle"
      })
    },
    {
      renderer: structureWebStyleRenderer,
      id: "structure-webstyle",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Structure (Web style)",
        id: "structure-webstyle"
      })
    },
    {
      renderer: wirePullWebStyleRenderer,
      id: "wire-pull-webstyle",
      action: new ActionButton({
        className: "esri-icon-maps",
        title: "Wire Pull (Web style)",
        id: "wire-pull-webstyle"
      })
    }
  ];

  const layerList = new LayerList({
    view,
    listItemCreatedFunction: (event) => {
      const item = event.item as esri.ListItem;
      item.actionsSections = [ renderers.map( renderer => renderer.action ) ] as any;
      item.actionsOpen = true;
    }
  });
  view.ui.add(layerList, "top-right");

  layerList.on("trigger-action", (event) => {
    const { action } = event;
    const { id } = action as esri.ActionButton;

    const selectedRenderer = renderers.find( renderer => renderer.id === id );
    (structures as FeatureLayer).renderer = selectedRenderer.renderer;
  });

  await view.when();
  await structures.when();

  structures.popupTemplate = createPopupTemplate({
    title: "test",
    fields: structures.fields
  });

  structures.renderer = stackedRenderer;
  await view.goTo(structures.fullExtent);

  view.constraints = {
    geometry: structures.fullExtent,
    maxScale: 0,
    minScale: view.scale
  };

})()
