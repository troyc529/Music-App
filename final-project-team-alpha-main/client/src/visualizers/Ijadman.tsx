// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";

// project imports
import { Visualizer } from "../Visualizers";

export const JayVisualizer = new Visualizer(
  "Jay",
  (p5: P5, analyzer: Tone.Analyser, analyzerfft: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);

    p5.background(0, 0, 0, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue();
    const testValues = analyzerfft.getValue();

    const random_color = Math.random() * 50;
    // const random_color = (Math.random() * 255)  ** will go blind.
    const random_r = Math.random() * 3;
    const random_g = Math.random() * 3;
    const random_b = Math.random() * 3;

    // p5.background(
    //   random_color / random_r,
    //   random_color / random_g,
    //   random_color / random_b,
    //   random_color
    // );
    p5.stroke(
      random_color / random_r,
      random_color / random_g,
      random_color / random_b,
      random_color
    );
    p5.beginShape();
    for (let j = 0; j < 5; j++) {
      p5.push();
      let amp = 0;
      let freq = 0;
      for (const x of values) {
        amp = x as number;
        amp += amp;
      }
      for (const y of testValues) {
        freq = y as number;
        if (freq < 0) {
          freq = 1;
        }
        freq += freq;
      }

      for (let i = 0; i < 80; i++) {
        p5.translate(
          p5.sin(p5.frameCount * 0.009 + j) * 100 +
            amp * 100 * Math.abs(freq * 5),
          i * 1.0
        );
        p5.translate(
          p5.sin(p5.frameCount * 0.009 + j) * 100 +
            amp * 100 * Math.abs(freq * 5),
          i * -1.0
        );
        p5.rotateZ(p5.frameCount * 0.002);
        p5.push();
        p5.sphere(8, 6, 4);
        p5.pop();
      }
      p5.pop();
    }
    p5.endShape();
  }
);
