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
define(["require", "exports", "esri/symbols/support/cimSymbolUtils"], function (require, exports, cimSymbolUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.size = 10;
    exports.cimCircleGeometry = {
        rings: [
            [
                [8.5, 0.2],
                [7.06, 0.33],
                [5.66, 0.7],
                [4.35, 1.31],
                [3.16, 2.14],
                [2.14, 3.16],
                [1.31, 4.35],
                [0.7, 5.66],
                [0.33, 7.06],
                [0.2, 8.5],
                [0.33, 9.94],
                [0.7, 11.34],
                [1.31, 12.65],
                [2.14, 13.84],
                [3.16, 14.86],
                [4.35, 15.69],
                [5.66, 16.3],
                [7.06, 16.67],
                [8.5, 16.8],
                [9.94, 16.67],
                [11.34, 16.3],
                [12.65, 15.69],
                [13.84, 14.86],
                [14.86, 13.84],
                [15.69, 12.65],
                [16.3, 11.34],
                [16.67, 9.94],
                [16.8, 8.5],
                [16.67, 7.06],
                [16.3, 5.66],
                [15.69, 4.35],
                [14.86, 3.16],
                [13.84, 2.14],
                [12.65, 1.31],
                [11.34, 0.7],
                [9.94, 0.33],
                [8.5, 0.2]
            ]
        ]
    };
    function createCircleSymbolLayer(params) {
        var primitiveName = params.primitiveName, color = params.color, isRing = params.isRing, anchorPoint = params.anchorPoint;
        var symbol = isRing ? {
            type: "CIMLineSymbol",
            symbolLayers: [
                {
                    type: "CIMSolidStroke",
                    enable: true,
                    color: color,
                    width: 1
                }
            ]
        } : {
            type: "CIMPolygonSymbol",
            symbolLayers: [
                {
                    type: "CIMSolidFill",
                    enable: true,
                    color: color
                }
            ]
        };
        return {
            type: "CIMVectorMarker",
            enable: true,
            anchorPoint: { x: 0, y: 0 },
            offsetX: anchorPoint.x * exports.size,
            offsetY: anchorPoint.y * exports.size,
            anchorPointUnits: "Relative",
            primitiveName: primitiveName,
            frame: { xmin: 0.0, ymin: 0.0, xmax: 17.0, ymax: 17.0 },
            size: exports.size,
            markerGraphics: [
                {
                    type: "CIMMarkerGraphic",
                    geometry: exports.cimCircleGeometry,
                    symbol: symbol
                }
            ],
            scaleSymbolsProportionally: true,
            respectFrame: true
        };
    }
    exports.createCircleSymbolLayer = createCircleSymbolLayer;
    function colorizeWebStyleSymbol(params) {
        return __awaiter(this, void 0, void 0, function () {
            var symbol, color, cimSymbol;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        symbol = params.symbol, color = params.color;
                        return [4 /*yield*/, symbol.fetchCIMSymbol()];
                    case 1:
                        cimSymbol = _a.sent();
                        cimSymbolUtils_1.applyCIMSymbolColor(cimSymbol, color);
                        return [2 /*return*/, cimSymbol];
                }
            });
        });
    }
    exports.colorizeWebStyleSymbol = colorizeWebStyleSymbol;
    function colorizeCIMSymbol(params) {
        var symbol = params.symbol, color = params.color;
        cimSymbolUtils_1.applyCIMSymbolColor(symbol, color);
        cimSymbolUtils_1.scaleCIMSymbolTo(symbol, 32);
        return symbol.clone();
    }
    exports.colorizeCIMSymbol = colorizeCIMSymbol;
});
//# sourceMappingURL=symbolUtils.js.map