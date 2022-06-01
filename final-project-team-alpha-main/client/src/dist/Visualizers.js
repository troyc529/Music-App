"use strict";
exports.__esModule = true;
exports.VisualizerContainer = exports.Visualizer = void 0;
// 3rd party library imports
var Tone = require("tone");
var react_p5_1 = require("react-p5");
var react_1 = require("react");
var Visualizer = /** @class */ (function () {
    function Visualizer(name, draw) {
        this.name = name;
        this.draw = draw;
    }
    return Visualizer;
}());
exports.Visualizer = Visualizer;
function VisualizerContainer(_a) {
    var visualizer = _a.visualizer;
    var name = visualizer.name, draw = visualizer.draw;
    var analyzer = react_1.useMemo(function () { return new Tone.Analyser("waveform", 256); }, []);
    var analyzerfft = react_1.useMemo(function () { return new Tone.Analyser("fft", 256); }, []);
    var onResize = react_1.useCallback(function (p5) {
        var width = window.innerWidth;
        var height = window.innerHeight / 2;
        p5.resizeCanvas(width, height, false);
    }, []);
    react_1.useEffect(function () {
        Tone.getDestination().volume.value = -5;
        Tone.getDestination().connect(analyzer).connect(analyzerfft);
        return function () {
            Tone.getDestination().disconnect(analyzer).disconnect(analyzerfft);
        };
    }, [analyzer]);
    var setup = function (p5, canvasParentRef) {
        var width = window.innerWidth;
        var height = window.innerHeight / 2;
        //original*****
        //p5.createCanvas(width, height).parent(canvasParentRef);
        //below for 3D.
        var names = ["jay", "joshua", "jack", "troy"];
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var x = names_1[_i];
            if (x === name.toLowerCase() && name.toLowerCase() !== "troy") {
                p5.createCanvas(width, height, "webgl").parent(canvasParentRef);
            }
            else {
                p5.createCanvas(width, height).parent(canvasParentRef);
            }
        }
    };
    return (react_1["default"].createElement("div", { className: "bg-black absolute bottom-0 right-0 left-0 h-50" },
        react_1["default"].createElement("div", { className: "z-1 absolute left-0 top-0 pa4 white f5" }, name),
        react_1["default"].createElement(react_p5_1["default"], { setup: setup, draw: function (p5) { return draw(p5, analyzer, analyzerfft); }, windowResized: onResize })));
}
exports.VisualizerContainer = VisualizerContainer;
