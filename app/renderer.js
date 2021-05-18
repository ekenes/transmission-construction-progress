define(["require", "exports", "esri/renderers", "esri/symbols", "esri/Color", "./symbolUtils"], function (require, exports, renderers_1, symbols_1, Color, symbolUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // #b30000|#7c1158|#4421af|#1a53ff|#00b7c7|#8be04e|#ebdc78
    // #437a75|#d9d78c|#bf7860|#72231f|#afbfa2|#5a9bc8|#89a6a6
    var colors1 = ["#437a75", "#d9d78c", "#bf7860", "#72231f", "#afbfa2", "#5a9bc8", "#89a6a6"];
    // #ccb642|#6998b4|#a67474|#6bb38f|#9a6bb3|#bf8739|#96aedc
    var colors2 = ["#ccb642", "#6998b4", "#a67474", "#6bb38f", "#9a6bb3", "#bf8739", "#96aedc"];
    var colors3 = ["#b30000", "#7c1158", "#4421af", "#1a53ff", "#00b7c7", "#8be04e", "#ebdc78"];
    var colors = colors3.map(function (color) { return new Color(color).toJSON(); });
    exports.renderer = new renderers_1.SimpleRenderer({
        symbol: new symbols_1.CIMSymbol({
            data: {
                type: "CIMSymbolReference",
                symbol: {
                    type: "CIMPointSymbol",
                    symbolLayers: [
                        // rings
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "access-rd-ring",
                            anchorPoint: { x: 0, y: 0 },
                            color: colors[0],
                            isRing: true
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "pad-site-ring",
                            anchorPoint: { x: 0, y: 1 },
                            color: colors[3],
                            isRing: true
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "grillages-ring",
                            anchorPoint: { x: 0, y: 2 },
                            color: colors[1],
                            isRing: true
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "foundation-ring",
                            anchorPoint: { x: 0, y: 3 },
                            color: colors[2],
                            isRing: true
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "structure-ring",
                            anchorPoint: { x: 0, y: 4 },
                            color: colors[4],
                            isRing: true
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "wire-pull-ring",
                            anchorPoint: { x: 0, y: 5 },
                            color: colors[5],
                            isRing: true
                        }),
                        // fills
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "access-rd-fill",
                            anchorPoint: { x: 0, y: 0 },
                            color: colors[0],
                            isRing: false
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "pad-site-fill",
                            anchorPoint: { x: 0, y: 1 },
                            color: colors[3],
                            isRing: false
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "grillages-fill",
                            anchorPoint: { x: 0, y: 2 },
                            color: colors[1],
                            isRing: false
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "foundation-fill",
                            anchorPoint: { x: 0, y: 3 },
                            color: colors[2],
                            isRing: false
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "structure-fill",
                            anchorPoint: { x: 0, y: 4 },
                            color: colors[4],
                            isRing: false
                        }),
                        symbolUtils_1.createCircleSymbolLayer({
                            primitiveName: "wire-pull-fill",
                            anchorPoint: { x: 0, y: 5 },
                            color: colors[5],
                            isRing: false
                        })
                    ]
                },
                primitiveOverrides: [
                    {
                        type: "CIMPrimitiveOverride",
                        primitiveName: "access-rd-fill",
                        propertyName: "Size",
                        valueExpressionInfo: {
                            type: "CIMExpressionInfo",
                            title: "Access road progress",
                            expression: createExpression("Access_Rd"),
                            returnType: "Default"
                        }
                    },
                    {
                        type: "CIMPrimitiveOverride",
                        primitiveName: "grillages-fill",
                        propertyName: "Size",
                        valueExpressionInfo: {
                            type: "CIMExpressionInfo",
                            title: "Access road progress",
                            expression: createExpression("Grillages"),
                            returnType: "Default"
                        }
                    },
                    {
                        type: "CIMPrimitiveOverride",
                        primitiveName: "foundation-fill",
                        propertyName: "Size",
                        valueExpressionInfo: {
                            type: "CIMExpressionInfo",
                            title: "Access road progress",
                            expression: createExpression("Foundation"),
                            returnType: "Default"
                        }
                    },
                    {
                        type: "CIMPrimitiveOverride",
                        primitiveName: "pad-site-fill",
                        propertyName: "Size",
                        valueExpressionInfo: {
                            type: "CIMExpressionInfo",
                            title: "Access road progress",
                            expression: createExpression("Pad_Site"),
                            returnType: "Default"
                        }
                    },
                    {
                        type: "CIMPrimitiveOverride",
                        primitiveName: "structure-fill",
                        propertyName: "Size",
                        valueExpressionInfo: {
                            type: "CIMExpressionInfo",
                            title: "Access road progress",
                            expression: createExpression("Structure"),
                            returnType: "Default"
                        }
                    },
                    {
                        type: "CIMPrimitiveOverride",
                        primitiveName: "wire-pull-fill",
                        propertyName: "Size",
                        valueExpressionInfo: {
                            type: "CIMExpressionInfo",
                            title: "Access road progress",
                            expression: createExpression("Wire_Pull"),
                            returnType: "Default"
                        }
                    }
                ]
            }
        })
    });
    function createExpression(fieldName) {
        return "\n    var progress = Decode($feature." + fieldName + ",\n      \"100% Complete\", 1,\n      \"75% Complete\", 0.75,\n      \"50% Complete\", 0.50,\n      \"25% Complete\", 0.25,\n      \"Not Started\", 0,\n      \"NA\", 1,\n    -1);\n\n    var outerSize = 20;\n    var innerSize = outerSize * progress;\n    return IIF( innerSize < 0, 0, innerSize );\n  ";
    }
});
//# sourceMappingURL=renderer.js.map