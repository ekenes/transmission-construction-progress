import { SimpleRenderer, UniqueValueRenderer } from "esri/renderers";
import { CIMSymbol } from "esri/symbols";
import Color = require("esri/Color");
import UniqueValueInfo = require("esri/renderers/support/UniqueValueInfo");
import { colorizeCIMSymbol, createCircleSymbolLayer, size, towerSymbolLayer } from "./symbolUtils";
import { BarrierCIMSymbol, Forest_RoadCIMSymbol, FoundationCIMSymbol, PowerlineCIMSymbol, TowerCIMSymbol } from "./webStyles";

// #b30000|#7c1158|#4421af|#1a53ff|#00b7c7|#8be04e|#ebdc78
// #437a75|#d9d78c|#bf7860|#72231f|#afbfa2|#5a9bc8|#89a6a6
const colors1 = ["#437a75", "#d9d78c", "#bf7860", "#72231f", "#afbfa2", "#5a9bc8", "#89a6a6"];
// #ccb642|#6998b4|#a67474|#6bb38f|#9a6bb3|#bf8739|#96aedc
const colors2 = ["#ccb642", "#6998b4", "#a67474", "#6bb38f", "#9a6bb3", "#bf8739", "#96aedc"];
const colors3 = ["#b30000", "#7c1158", "#4421af", "#1a53ff", "#00b7c7", "#8be04e", "#ebdc78"];
const colors4 = ["#7c1158", "#1a53ff", "#00b7c7", "#8be04e", "#ebdc78"];

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

export const stackedRendererWithTower = new SimpleRenderer({
  symbol: new CIMSymbol({
    data: {
      type: `CIMSymbolReference`,
      symbol: {
        type: `CIMPointSymbol`,
        symbolLayers: [
          towerSymbolLayer,

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



// Wurman renderers

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

// Web style renderers

export const accessRdWebStyleRenderer = createUniqueValueRenderer(Forest_RoadCIMSymbol, "Access_Rd");

export const padSiteWebStyleRenderer = createUniqueValueRenderer(BarrierCIMSymbol, "Pad_Site");

export const foundationWebStyleRenderer = createUniqueValueRenderer(FoundationCIMSymbol, "Foundation");

export const structureWebStyleRenderer = createUniqueValueRenderer(TowerCIMSymbol, "Structure");

export const wirePullWebStyleRenderer = createUniqueValueRenderer(PowerlineCIMSymbol, "Wire_Pull");


function createUniqueValueRenderer(symbol: CIMSymbol, field: string): UniqueValueRenderer {
  return new UniqueValueRenderer({
    field,
    legendOptions: {
      title: field.replace("_", " ")
    },
    uniqueValueInfos: [
      new UniqueValueInfo({
        value: "100% Complete",
        label: "100% Complete",
        symbol: colorizeCIMSymbol({ symbol, color: new Color(colors4[4]) }),
      }),

      new UniqueValueInfo({
        value: "75% Complete",
        label: "75% Complete",
        symbol: colorizeCIMSymbol({ symbol, color: new Color(colors4[3]) }),
      }),

      new UniqueValueInfo({
        value: "50% Complete",
        label: "50% Complete",
        symbol: colorizeCIMSymbol({ symbol, color: new Color(colors4[2]) }),
      }),

      new UniqueValueInfo({
        value: "25% Complete",
        label: "25% Complete",
        symbol: colorizeCIMSymbol({ symbol, color: new Color(colors4[1]) }),
      }),

      new UniqueValueInfo({
        value: "Not Started",
        label: "Not started",
        symbol: colorizeCIMSymbol({ symbol, color: new Color(colors4[0]) }),
      })
    ]
  });
}