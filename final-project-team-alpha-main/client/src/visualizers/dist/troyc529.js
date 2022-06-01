"use strict";
exports.__esModule = true;
exports.troyc529Visualizer = void 0;
// project imports
var Visualizers_1 = require("../Visualizers");
exports.troyc529Visualizer = new Visualizers_1.Visualizer("Troy", function (p5, analyzer, analyzerfft) {
    var width = window.innerWidth;
    var height = window.innerHeight / 2;
    var dim = Math.min(width, height);
    p5.background(0, 0, 0, 255);
    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    var values = analyzer.getValue();
    var testValues = analyzerfft.getValue();
    p5.beginShape();
    for (var j = 0; j < values.length; j++) {
        var amplitude = values[j];
        var tester = testValues[j];
        var i = values.length;
        // const y = 0
        p5.translate(j, i);
        var y = 100;
        for (var k = 0; k < 40; k++) {
            var random_color = (Math.random() * 550);
            var random_r = (Math.random() * 3);
            var random_g = (Math.random() * 3);
            var random_b = (Math.random() * 3);
            p5.stroke(random_color / random_r, random_color / random_g, random_color / random_b, random_color).ellipse(50 * k, 100 - y, (500 * amplitude) * (Math.abs(tester * 0.1)));
            y += 100;
        }
        i--;
    }
    p5.endShape();
});
