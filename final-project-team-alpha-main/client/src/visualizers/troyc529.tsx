// 3rd party library imports
import P5 from "p5";
import * as Tone from "tone";
import { Abs, FFT } from "tone";

// project imports
import { Visualizer } from "../Visualizers";

export const troyc529Visualizer = new Visualizer(
  "Troy",
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

    p5.beginShape();

  

    for (let j = 0; j < values.length; j++) {
        const amplitude = values[j] as number;
        const tester = testValues[j] as number
       
        let i = values.length;
  
       // const y = 0
       p5.translate(j,i);
        let y = 100;
       for(let k = 0; k < 40; k++){
        const random_color = (Math.random() * 550)
        const random_r = ( Math.random() * 3)
        const random_g = ( Math.random() * 3)
        const random_b = ( Math.random() * 3)
       p5.stroke(random_color / random_r , random_color / random_g, random_color / random_b, random_color).ellipse(50*k, 100-y,(500*amplitude)*(Math.abs(tester*0.1)));
            y+=100;
          
       }  
         i--;
      }
     p5.endShape();
    },
   
);

