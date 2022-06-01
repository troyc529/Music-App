"use strict";
exports.__esModule = true;
exports.JoshuaVisualizer = void 0;
// project imports
var Visualizers_1 = require("../Visualizers");
exports.JoshuaVisualizer = new Visualizers_1.Visualizer("Joshua", function (p5, analyzer, analyzerfft) {
    var width = window.innerWidth;
    var height = window.innerHeight / 2;
    var dim = Math.min(width, height);
    //let img = p5.loadImage('../Assets/Cat.png');
    p5.background(100, 220, 420, 255);
    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();
    var values = analyzer.getValue();
    var fftvalues = analyzerfft.getValue();
    p5.beginShape();
    p5.rotateY(p5.frameCount * 0.01);
    for (var j = 0; j < 1; j++) {
        var amp = values[j];
        var fft = fftvalues[j];
        p5.translate(-fft, -fft);
        var random_color = (Math.random() * 50);
        //const random_color = (Math.random() * 255)  ** will go blind.
        var random_r = (Math.random() * 3);
        var random_g = (Math.random() * 3);
        var random_b = (Math.random() * 3);
        p5.stroke(random_color / random_r, random_color / random_g, random_color / random_b, random_color);
        //p5.box(100,100,100);
        p5.sphere(amp * 100 + 100);
    }
    p5.endShape();
});
