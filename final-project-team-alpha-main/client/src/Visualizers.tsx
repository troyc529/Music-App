// 3rd party library imports
import * as Tone from "tone";
import Sketch from "react-p5";
import P5 from "p5";
import React, { useEffect, useMemo, useCallback } from "react";
import { FFT } from "tone";

type VisualizerDrawer = (p5: P5, analyzer: Tone.Analyser, analyzerfft: Tone.Analyser) => void;

interface VisualizerContainerProps {
  visualizer: Visualizer;
}

export class Visualizer {
  public readonly name: string;
  public readonly draw: VisualizerDrawer;

  constructor(name: string, draw: VisualizerDrawer) {
    this.name = name;
    this.draw = draw;
  }
}

export function VisualizerContainer({ visualizer }: VisualizerContainerProps) {
  const { name, draw } = visualizer;

  const analyzer: Tone.Analyser = useMemo(
    () => new Tone.Analyser("waveform", 256),
    []
  );

  const analyzerfft: Tone.Analyser = useMemo(
    () => new Tone.Analyser("fft", 256),
    []
  );




  const onResize = useCallback((p5: P5) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;

    p5.resizeCanvas(width, height, false);
  }, []);

  useEffect(() => {
    Tone.getDestination().volume.value = -5;
    Tone.getDestination().connect(analyzer).connect(analyzerfft);
    return () => {
      Tone.getDestination().disconnect(analyzer).disconnect(analyzerfft);
    };
  }, [analyzer]);



  const setup = (p5: P5, canvasParentRef: Element) => {
    const width = window.innerWidth;
    const height = window.innerHeight / 2;
    
    //original*****
    //p5.createCanvas(width, height).parent(canvasParentRef);

    //below for 3D.

    const names = ["jay", "joshua", "jack", "troy"]
    
    for ( const x of names){
      if (x === name.toLowerCase() && name.toLowerCase()!== "troy" ) {
        p5.createCanvas(width, height,"webgl" ).parent(canvasParentRef);
      }

    else {
      p5.createCanvas(width, height).parent(canvasParentRef);
    }
  }
  };

  return (
    <div className={"bg-black absolute bottom-0 right-0 left-0 h-50"}>
      <div className={"z-1 absolute left-0 top-0 pa4 white f5"}>{name}</div>
      <Sketch
        setup={setup}
        draw={(p5) => draw(p5, analyzer, analyzerfft)}
        windowResized={onResize}
      />
    </div>
  );
}
