// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";
import { Sampler } from "tone";
import { TrumpetInstrument } from "../instruments/ColeBoel";


// project imports
import { Visualizer } from "../Visualizers";

export const JoshuaVisualizer = new Visualizer(
  "Joshua",
  (p5: P5, analyzer: Tone.Analyser, analyzerfft: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);
    //let img = p5.loadImage('../Assets/Cat.png');
    p5.background(100, 220, 420, 255);

    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    const values = analyzer.getValue();
    const fftvalues = analyzerfft.getValue();
    

    p5.beginShape();



    p5.rotateY(p5.frameCount * 0.01);
  
    for (let j = 0; j < 1; j++) {
     
      
      const amp = values[j] as number;
      const fft = fftvalues[j] as number;


      
        p5.translate(
          -fft,
          -fft
        );
      
      
      const random_color = (Math.random() * 50)
      //const random_color = (Math.random() * 255)  ** will go blind.
      const random_r = ( Math.random() * 3)
      const random_g = ( Math.random() * 3)
      const random_b = ( Math.random() * 3)
      p5.stroke(random_color / random_r , random_color / random_g, random_color / random_b, random_color);
      //p5.box(100,100,100);
      p5.sphere(amp * 100 + 100);
      
    }
    p5.endShape();
  }
);

