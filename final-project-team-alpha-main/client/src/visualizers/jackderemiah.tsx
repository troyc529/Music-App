// 3rd party library imports
import P5 from 'p5';
import * as Tone from 'tone';

// project imports
import { Visualizer } from '../Visualizers';


export const JackVisualizer = new Visualizer(
  'Jack',
  (p5: P5, analyzer: Tone.Analyser,  analyzerfft: Tone.Analyser) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    const dim = Math.min(width, height);


    p5.strokeWeight(dim * 0.01);
    p5.stroke(255, 255, 255, 255);
    p5.noFill();

    
    
    const values = analyzer.getValue();

    const frequencies = analyzerfft.getValue();

    for ( const x in values){
      p5.rotateZ(p5.frameCount * Number(x)* 0.002);
      p5.rotateY(p5.frameCount * Number(x)* 0.002);
      p5.rotateX(p5.frameCount * Number(x)* 0.002);
      const _x = 0;
      const amplitude = Number(values[x]) * .008;

      p5.vertex(_x, amplitude);
      const random_color = (Math.random() * 255)
      // const random_color = (Math.random() * 255)  ** will go blind.
      const random_r = ( Math.random() * 3)
      const random_g = ( Math.random() * 3)
      const random_b = ( Math.random() * 3)

    
     // p5.background(random_color  , random_color / random_g, random_color / random_b, random_color);
     p5.background(0)
      p5.stroke(random_color / random_r , random_color / random_g, random_color / random_b, random_color);
    }


    p5.box(45, 45, 45 );
    p5.box(45, 45, 45 );
    p5.box(45, 45, 39);

    p5.beginShape();
    for (let i = 0; i < values.length; i++) {
      const amplitude = values[i] as number;
      const x = p5.map(i, 0, values.length - 1, 0, width * amplitude);
      const freq = frequencies[i]
      const y = Math.abs(Number(freq)) / amplitude * height ;
      

      p5.vertex(x, y);
      
    }
    p5.endShape();
  },
);