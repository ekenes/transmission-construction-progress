import { SimpleRenderer } from "esri/renderers";
import { CIMSymbol } from "esri/symbols";
import Color = require("esri/Color");
import { cimCircleGeometry, createCircleSymbolLayer, size } from "./symbolUtils";

// #b30000|#7c1158|#4421af|#1a53ff|#00b7c7|#8be04e|#ebdc78
// #437a75|#d9d78c|#bf7860|#72231f|#afbfa2|#5a9bc8|#89a6a6
const colors1 = ["#437a75", "#d9d78c", "#bf7860", "#72231f", "#afbfa2", "#5a9bc8", "#89a6a6"];
// #ccb642|#6998b4|#a67474|#6bb38f|#9a6bb3|#bf8739|#96aedc
const colors2 = ["#ccb642", "#6998b4", "#a67474", "#6bb38f", "#9a6bb3", "#bf8739", "#96aedc"];
const colors3 = ["#b30000", "#7c1158", "#4421af", "#1a53ff", "#00b7c7", "#8be04e", "#ebdc78"];

const colors = colors3.map(color => new Color(color).toJSON());

export const stackedRenderer = new SimpleRenderer({
  symbol: new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          // rings
          createCircleSymbolLayer({
            primitiveName: `access-rd-ring`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[0],
            isRing: true
          }),
          createCircleSymbolLayer({
            primitiveName: `pad-site-ring`,
            anchorPoint: { x: 0, y: 1 },
            color: colors[3],
            isRing: true
          }),
          createCircleSymbolLayer({
            primitiveName: `foundation-ring`,
            anchorPoint: { x: 0, y: 2 },
            color: colors[2],
            isRing: true
          }),
          createCircleSymbolLayer({
            primitiveName: `structure-ring`,
            anchorPoint: { x: 0, y: 3 },
            color: colors[4],
            isRing: true
          }),
          createCircleSymbolLayer({
            primitiveName: `wire-pull-ring`,
            anchorPoint: { x: 0, y: 4 },
            color: colors[5],
            isRing: true
          }),

          // fills
          createCircleSymbolLayer({
            primitiveName: `access-rd-fill`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[0],
            isRing: false
          }),
          createCircleSymbolLayer({
            primitiveName: `pad-site-fill`,
            anchorPoint: { x: 0, y: 1 },
            color: colors[3],
            isRing: false
          }),
          createCircleSymbolLayer({
            primitiveName: `foundation-fill`,
            anchorPoint: { x: 0, y: 2 },
            color: colors[2],
            isRing: false
          }),
          createCircleSymbolLayer({
            primitiveName: `structure-fill`,
            anchorPoint: { x: 0, y: 3 },
            color: colors[4],
            isRing: false
          }),
          createCircleSymbolLayer({
            primitiveName: `wire-pull-fill`,
            anchorPoint: { x: 0, y: 4 },
            color: colors[5],
            isRing: false
          })
        ]
      },
      primitiveOverrides: [
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `access-rd-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Access_Rd"),
            returnType: `Default`
          }
        },
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `foundation-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Foundation"),
            returnType: `Default`
          }
        },
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `pad-site-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Pad_Site"),
            returnType: `Default`
          }
        },
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `structure-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Structure"),
            returnType: `Default`
          }
        },
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `wire-pull-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Wire_Pull"),
            returnType: `Default`
          }
        }
      ]
    }
  })
});

function createExpression(fieldName: string){
  return `
    var progress = Decode($feature.${fieldName},
      "100% Complete", 1,
      "75% Complete", 0.75,
      "50% Complete", 0.50,
      "25% Complete", 0.25,
      "Not Started", 0,
      "NA", 1,
    -1);

    var outerSize = ${size};
    var innerSize = outerSize * progress;
    return IIF( innerSize < 0, 0, innerSize );
  `;
}

export const accessRdWurmanRenderer = new SimpleRenderer({
  symbol: new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          // rings
          createCircleSymbolLayer({
            primitiveName: `access-rd-ring`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[0],
            isRing: true
          }),

          // fills
          createCircleSymbolLayer({
            primitiveName: `access-rd-fill`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[0],
            isRing: false
          })
        ]
      },
      primitiveOverrides: [
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `access-rd-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Access_Rd"),
            returnType: `Default`
          }
        }
      ]
    }
  })
});

export const padSiteWurmanRenderer = new SimpleRenderer({
  symbol: new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          // rings
          createCircleSymbolLayer({
            primitiveName: `pad-site-ring`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[3],
            isRing: true
          }),

          // fills
          createCircleSymbolLayer({
            primitiveName: `pad-site-fill`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[3],
            isRing: false
          })
        ]
      },
      primitiveOverrides: [
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `pad-site-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Pad_Site"),
            returnType: `Default`
          }
        }
      ]
    }
  })
});

export const foundationWurmanRenderer = new SimpleRenderer({
  symbol: new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          // rings
          createCircleSymbolLayer({
            primitiveName: `foundation-ring`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[2],
            isRing: true
          }),

          // fills
          createCircleSymbolLayer({
            primitiveName: `foundation-fill`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[2],
            isRing: false
          })
        ]
      },
      primitiveOverrides: [
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `foundation-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Foundation"),
            returnType: `Default`
          }
        }
      ]
    }
  })
});

export const structureWurmanRenderer = new SimpleRenderer({
  symbol: new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          // rings
          createCircleSymbolLayer({
            primitiveName: `structure-ring`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[4],
            isRing: true
          }),

          // fills
          createCircleSymbolLayer({
            primitiveName: `structure-fill`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[4],
            isRing: false
          })
        ]
      },
      primitiveOverrides: [
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `structure-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Structure"),
            returnType: `Default`
          }
        }
      ]
    }
  })
});

export const wirePullWurmanRenderer = new SimpleRenderer({
  symbol: new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          // rings
          createCircleSymbolLayer({
            primitiveName: `wire-pull-ring`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[5],
            isRing: true
          }),

          // fills
          createCircleSymbolLayer({
            primitiveName: `wire-pull-fill`,
            anchorPoint: { x: 0, y: 0 },
            color: colors[5],
            isRing: false
          })
        ]
      },
      primitiveOverrides: [
        {
          type: `CIMPrimitiveOverride`,
          primitiveName: `wire-pull-fill`,
          propertyName: `Size`,
          valueExpressionInfo: {
            type: `CIMExpressionInfo`,
            title: `Access road progress`,
            expression: createExpression("Wire_Pull"),
            returnType: `Default`
          }
        }
      ]
    }
  })
});