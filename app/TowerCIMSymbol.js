define(["require", "exports", "esri/symbols"], function (require, exports, symbols_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TowerCIMSymbol = new symbols_1.CIMSymbol({
        data: {
            type: "CIMSymbolReference",
            symbol: { "type": "CIMPointSymbol", "symbolLayers": [{ "type": "CIMVectorMarker", "enable": true, "anchorPointUnits": "Relative", "dominantSizeAxis3D": "Y", "size": 10, "billboardMode3D": "FaceNearPlane", "frame": { "xmin": 0, "ymin": 0, "xmax": 512, "ymax": 512 }, "markerGraphics": [{ "type": "CIMMarkerGraphic", "geometry": { "rings": [[[231, 445], [224, 450], [222, 452], [222, 455], [224, 471], [225, 478], [287, 478], [288, 471], [290, 455], [290, 452], [288, 450], [281, 445], [256, 425], [231, 445]], [[295, 394], [287, 400], [267, 416], [284, 429], [290, 434], [292, 436], [295, 414], [298, 395], [298, 391], [295, 394]], [[214, 395], [217, 414], [220, 436], [222, 434], [229, 429], [245, 416], [225, 400], [217, 394], [214, 391], [214, 395]], [[335, 351], [335, 371], [335, 377], [333, 391], [332, 393], [332, 398], [419, 349], [335, 351]], [[180, 398], [177, 373], [177, 351], [93, 349], [180, 398]], [[220, 355], [214, 360], [211, 361], [211, 370], [211, 372], [215, 374], [222, 380], [256, 407], [290, 380], [298, 374], [301, 372], [301, 370], [301, 361], [298, 360], [292, 355], [256, 326], [220, 355]], [[294, 296], [267, 317], [294, 338], [300, 344], [301, 344], [301, 290], [294, 296]], [[211, 301], [211, 319], [211, 344], [212, 344], [218, 338], [245, 317], [218, 296], [211, 290], [211, 290], [211, 301]], [[218, 261], [211, 266], [211, 266], [211, 270], [211, 272], [211, 273], [218, 278], [256, 308], [294, 278], [301, 273], [301, 266], [294, 261], [256, 231], [218, 261]], [[341, 220], [335, 249], [335, 272], [433, 217], [341, 220]], [[177, 272], [177, 249], [171, 220], [79, 217], [177, 272]], [[200, 190], [204, 210], [211, 243], [211, 249], [218, 243], [245, 222], [213, 196], [213, 196], [204, 190], [200, 186], [200, 190]], [[308, 189], [308, 190], [299, 196], [267, 222], [294, 243], [301, 249], [301, 246], [308, 210], [308, 210], [312, 189], [313, 186], [308, 189]], [[195, 161], [195, 161], [196, 165], [200, 169], [209, 175], [256, 213], [304, 175], [312, 169], [317, 165], [317, 162], [256, 113], [195, 161]], [[192, 146], [192, 146], [245, 104], [173, 47], [192, 146]], [[267, 104], [320, 146], [320, 146], [340, 46], [267, 104]], [[341, 40], [341, 40], [341, 40], [341, 40], [341, 40]], [[171, 40], [171, 40], [171, 40], [171, 40]], [[176, 0], [256, 63], [336, 0], [384, 0], [345, 199], [456, 196], [456, 276], [456, 276], [435, 276], [435, 240], [335, 296], [335, 331], [441, 328], [441, 408], [421, 408], [421, 372], [328, 424], [317, 512], [195, 512], [192, 491], [184, 424], [91, 372], [91, 408], [71, 408], [71, 328], [177, 331], [177, 303], [177, 296], [77, 240], [77, 276], [56, 276], [56, 196], [167, 199], [128, 0], [176, 0]]] }, "symbol": { "type": "CIMPolygonSymbol", "symbolLayers": [{ "type": "CIMSolidFill", "enable": true, "color": [0, 0, 0, 255] }] } }, { "type": "CIMMarkerGraphic", "geometry": { "rings": [[[231, 445], [224, 450], [222, 452], [225, 478], [287, 478], [290, 455], [290, 452], [282, 445], [256, 425], [231, 445]], [[220, 436], [229, 429], [245, 416], [225, 400], [217, 394], [214, 391], [220, 436]], [[295, 394], [267, 416], [292, 436], [298, 395], [298, 391], [295, 394]], [[180, 399], [177, 373], [177, 351], [93, 349], [180, 399]], [[335, 351], [335, 371], [333, 391], [332, 393], [332, 399], [419, 349], [335, 351]], [[220, 354], [214, 359], [211, 361], [211, 370], [211, 372], [256, 407], [298, 374], [301, 372], [301, 370], [301, 361], [298, 359], [256, 326], [220, 354]], [[294, 296], [267, 317], [301, 344], [301, 290], [294, 296]], [[211, 344], [211, 344], [218, 339], [245, 317], [218, 296], [211, 290], [211, 344]], [[218, 261], [211, 266], [211, 270], [211, 273], [218, 278], [256, 308], [294, 278], [301, 273], [301, 266], [256, 230], [218, 261]], [[177, 273], [177, 249], [171, 219], [79, 217], [177, 273]], [[341, 220], [335, 249], [335, 249], [335, 273], [433, 217], [341, 220]], [[211, 243], [211, 249], [218, 244], [245, 222], [205, 190], [200, 186], [211, 243]], [[299, 196], [267, 222], [294, 243], [301, 249], [301, 246], [308, 210], [312, 189], [312, 186], [299, 196]], [[195, 161], [196, 165], [256, 213], [312, 169], [317, 165], [317, 161], [256, 113], [195, 161]], [[192, 146], [245, 104], [172, 47], [192, 146]], [[267, 104], [320, 147], [339, 46], [267, 104]], [[256, 63], [336, 0], [383, 0], [345, 199], [456, 196], [456, 275], [435, 276], [435, 239], [335, 296], [335, 331], [441, 328], [441, 408], [421, 408], [421, 372], [328, 424], [317, 512], [195, 512], [192, 491], [184, 424], [91, 372], [91, 408], [71, 408], [71, 328], [177, 331], [177, 303], [177, 296], [77, 240], [77, 275], [56, 276], [56, 196], [167, 199], [128, 0], [176, 0], [256, 63]]] }, "symbol": { "type": "CIMPolygonSymbol", "symbolLayers": [{ "type": "CIMSolidFill", "enable": true, "color": [55, 65, 73, 255] }] } }], "scaleSymbolsProportionally": true, "respectFrame": true, "clippingPath": { "type": "CIMClippingPath", "clippingType": "Intersect", "path": { "rings": [[[0, 0], [512, 0], [512, 512], [0, 512], [0, 0]]] } } }], "haloSize": 1, "scaleX": 1, "angleAlignment": "Display" }
        }
    });
});
//# sourceMappingURL=TowerCIMSymbol.js.map