var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "esri/WebMap", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/LayerList", "esri/support/actions/ActionButton", "esri/support/popupUtils", "./renderers", "esri/geometry/geometryEngine"], function (require, exports, WebMap, MapView, FeatureLayer, LayerList, ActionButton, popupUtils_1, renderers_1, geometryEngine_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var buff, structures, map, view, renderers, layerList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    buff = geometryEngine_1.buffer;
                    structures = new FeatureLayer({
                        portalItem: {
                            id: "8d47d8981c514666b7c98196d63d1086"
                        },
                        popupEnabled: true
                    });
                    map = new WebMap({
                        basemap: "gray-vector",
                        layers: [structures]
                    });
                    view = new MapView({
                        map: map,
                        container: "viewDiv",
                        center: [-118.244, 34.052],
                        zoom: 12
                    });
                    renderers = [
                        {
                            renderer: renderers_1.stackedRenderer,
                            id: "stacked-renderer",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Stacked renderer",
                                id: "stacked-renderer"
                            })
                        },
                        {
                            renderer: renderers_1.accessRdWurmanRenderer,
                            id: "access-roads",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Access Roads",
                                id: "access-roads"
                            })
                        },
                        {
                            renderer: renderers_1.padSiteWurmanRenderer,
                            id: "pad-site",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Pad Site",
                                id: "pad-site"
                            })
                        },
                        {
                            renderer: renderers_1.foundationWurmanRenderer,
                            id: "foundation",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Foundation",
                                id: "foundation"
                            })
                        },
                        {
                            renderer: renderers_1.structureWurmanRenderer,
                            id: "structure",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Structure",
                                id: "structure"
                            })
                        },
                        {
                            renderer: renderers_1.wirePullWurmanRenderer,
                            id: "wire-pull",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Wire Pull",
                                id: "wire-pull"
                            })
                        },
                        {
                            renderer: renderers_1.accessRdWebStyleRenderer,
                            id: "access-roads-webstyle",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Access Roads (Web style)",
                                id: "access-roads-webstyle"
                            })
                        },
                        {
                            renderer: renderers_1.padSiteWebStyleRenderer,
                            id: "pad-site-webstyle",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Pad Site (Web style)",
                                id: "pad-site-webstyle"
                            })
                        },
                        {
                            renderer: renderers_1.foundationWebStyleRenderer,
                            id: "foundation-webstyle",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Foundation (Web style)",
                                id: "foundation-webstyle"
                            })
                        },
                        {
                            renderer: renderers_1.structureWebStyleRenderer,
                            id: "structure-webstyle",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Structure (Web style)",
                                id: "structure-webstyle"
                            })
                        },
                        {
                            renderer: renderers_1.wirePullWebStyleRenderer,
                            id: "wire-pull-webstyle",
                            action: new ActionButton({
                                className: "esri-icon-maps",
                                title: "Wire Pull (Web style)",
                                id: "wire-pull-webstyle"
                            })
                        }
                    ];
                    layerList = new LayerList({
                        view: view,
                        listItemCreatedFunction: function (event) {
                            var item = event.item;
                            item.actionsSections = [renderers.map(function (renderer) { return renderer.action; })];
                            item.actionsOpen = true;
                        }
                    });
                    view.ui.add(layerList, "top-right");
                    layerList.on("trigger-action", function (event) {
                        var action = event.action;
                        var id = action.id;
                        var selectedRenderer = renderers.find(function (renderer) { return renderer.id === id; });
                        structures.renderer = selectedRenderer.renderer;
                    });
                    return [4 /*yield*/, view.when()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, structures.when()];
                case 2:
                    _a.sent();
                    structures.popupTemplate = popupUtils_1.createPopupTemplate({
                        title: "test",
                        fields: structures.fields
                    });
                    structures.renderer = renderers_1.stackedRenderer;
                    return [4 /*yield*/, view.goTo(structures.fullExtent)];
                case 3:
                    _a.sent();
                    view.constraints = {
                        geometry: structures.fullExtent,
                        maxScale: 0,
                        minScale: view.scale
                    };
                    return [2 /*return*/];
            }
        });
    }); })();
});
//# sourceMappingURL=main.js.map