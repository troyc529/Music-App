//Troy Carloni

// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, {useEffect} from 'react';

import A2 from "../samples/guitar-electric/A2.mp3";
import A3 from "../samples/guitar-electric/A3.mp3";
import A4 from "../samples/guitar-electric/A4.mp3";
import A5 from "../samples/guitar-electric/A5.mp3";
import C3 from "../samples/guitar-electric/C3.mp3";
import C4 from "../samples/guitar-electric/C4.mp3";
import C5 from "../samples/guitar-electric/C5.mp3";
import C6 from "../samples/guitar-electric/C6.mp3";
import Cs2 from "../samples/guitar-electric/Cs2.mp3";
import Ds3 from "../samples/guitar-electric/Ds3.mp3";
import Ds4 from "../samples/guitar-electric/Ds4.mp3";
import Ds5 from "../samples/guitar-electric/Ds5.mp3";
import E2 from "../samples/guitar-electric/E2.mp3";
import Fs2 from "../samples/guitar-electric/Fs2.mp3";
import Fs3 from "../samples/guitar-electric/Fs3.mp3";
import Fs4 from "../samples/guitar-electric/Fs4.mp3";
import Fs5 from "../samples/guitar-electric/Fs5.mp3";
// project imports
import { Instrument, InstrumentProps } from '../Instruments';
import { disconnect } from 'process';


/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */


const sampler = new Tone.Sampler({
    urls: {
       "A2" : A2,
       "A3" : A3,
       "A4" : A4,
       "A5" : A5,
       "C3" : C3,
       "C4" : C4,
       "C5" : C5,
       "C6" : C6,
       "C#2": Cs2,
       "D#3": Ds3,
       "D#4": Ds4,
       "D#5": Ds5,
       "E2" : E2,
       "F#2": Fs2,
       "F#3": Fs3,
       "F#4": Fs4,
       "F#5": Fs5,
    },
    release : 1,
  }).toDestination() as any;


interface PianoKeyProps {
  note: string; // C, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
  duration?: string;
  synth?: Tone.Synth; // Contains library code for making sound
  minor?: boolean; // True if minor key, false if major key
  octave: number;
  index: number; // octave + index together give a location for the piano key
}

export function PianoKey({
  note,
  synth,
  minor,
  index,
}: PianoKeyProps): JSX.Element {
  /**
   * This React component corresponds to either a major or minor key in the piano.
   * See `PianoKeyWithoutJSX` for the React component without JSX.
   */
  return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    <div
      onMouseDown={() => synth?.triggerAttack(`${note}`)} // Question: what is `onMouseDown`?
      onMouseUp={() => synth?.triggerRelease('+0.25')} // Question: what is `onMouseUp`?
      className={classNames('ba pointer absolute dim', {
        'bg-red black h3': minor, // minor keys are black
        'white bg-black h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      }}
    ></div>
  );
}



function Guitar({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C2', idx: 0 },
    { note: 'C#2', idx: 0.5 },
    { note: 'D2', idx: 1 },
    { note: 'D#2', idx: 1.5 },
    { note: 'E2', idx: 2 },
    { note: 'F2', idx: 3 },
    { note: 'F#2', idx: 3.5 },
    { note: 'G2', idx: 4 },
    { note: 'G#2', idx: 4.5 },
    { note: 'A2', idx: 5 },
    { note: 'A#2', idx: 5.5 },
    { note: 'B2', idx: 6 },
    { note: 'C3', idx: 7 },
    { note: 'C#3', idx: 7.5 },
    { note: 'D3', idx: 8 },
    { note: 'D#3', idx: 8.5 },
    { note: 'E3', idx: 9 },
    { note: 'F3', idx: 10 },
    { note: 'F#3', idx: 10.5 },
    { note: 'G3', idx: 11 },
    { note: 'G#3', idx: 11.5 },
    { note: 'A3', idx: 12 },
    { note: 'A#3', idx: 12.5 },
    { note: 'B3', idx: 13 },
    { note: 'C4', idx: 14 },
    { note: 'C#4', idx: 14.5 },
    { note: 'D4', idx: 15 },
    { note: 'D#4', idx: 15.5 },
    { note: 'E4', idx: 16 },
    { note: 'F4', idx: 17 },
    { note: 'F#4', idx: 17.5 },
    { note: 'G4', idx: 18 },
    { note: 'G#4', idx: 18.5 },
    { note: 'A4', idx: 19 },
    { note: 'A#4', idx: 19.5 },
    { note: 'B4', idx: 20 },
    { note: 'C5', idx: 21 },
    { note: 'C#5', idx: 21.5 },
    { note: 'D5', idx: 22 },
    { note: 'D#5', idx: 22.5 },
    { note: 'E5', idx: 23 },
    { note: 'F5', idx: 24 },
    { note: 'F#5', idx: 24.5 },
    { note: 'G5', idx: 25 },
    { note: 'G#5', idx: 25.5 },
    { note: 'A5', idx: 26 },
    { note: 'A#5', idx: 26.5 },
    { note: 'B5', idx: 27 },
    { note: 'C6', idx: 28 },
    { note: 'C#6', idx: 28.5 },
    { note: 'D6', idx: 29 },
    { note: 'D#6', idx: 29.5 },
    { note: 'E6', idx: 30 },
    { note: 'F6', idx: 31 },
    { note: 'F#6', idx: 31.5 },
    { note: 'G6', idx: 32 },
    { note: 'G#6', idx: 32.5 },
    { note: 'A6', idx: 33 },
    { note: 'A#6', idx: 33.5 },
    { note: 'B6', idx: 34 },
    
  ]);



  useEffect(() => {
    setSynth(oldSynth => {
        oldSynth.disconnect();
        var samplerRun = sampler;
        const dist = new Tone.Distortion(0.5).toDestination();
        const phaser = new Tone.Phaser({
            frequency: 15,
            octaves: 5,
            baseFrequency: 1000
        }).toDestination();
        return samplerRun.connect(dist).connect(phaser).toDestination();
    })
    return () => {};
}, [] );


  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4">
        {Range(2, 10).map(octave =>
          keys.map(key => {
            const isMinor = key.note.indexOf('#') !== -1;
            const note = `${key.note}`;
            return (
              <PianoKey
                key={note} //react key
                note={note}
                synth={synth}
                minor={isMinor}
                octave={octave}
                index={key.idx}
              />
            );
          }),
        )}
      </div>
      <div className={'pl4 pt4 flex'}>
      </div>
    </div>
  );
}


export const GuitarInstrument = new Instrument('Guitar', Guitar);
