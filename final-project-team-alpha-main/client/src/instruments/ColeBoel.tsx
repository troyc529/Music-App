// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, {useEffect} from 'react';


import C1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 1 - C.wav";
import Cs1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 6 - C#.wav";
import D1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 8 - D.wav";
import Ds1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 11 - D#.wav";
import E1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 14 - E.wav";
import F1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 16 - F.wav";
import G1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 18 - G.wav";
import Gs1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 21 - G#.wav";
import A1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 22 - A.wav";
import As1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 24 - A#.wav";
import B1 from "../samples/Vocal Shots/Cymatics - Vocal Essentials One Shot 25 - B.wav";




// project imports
import { Instrument, InstrumentProps } from '../Instruments';


/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */


const sampler = new Tone.Sampler({
    urls: {
      "C2" : C1,
      "C#2" : Cs1,
      "D2" : D1,
      "D#2" : Ds1,
      "E2" : E1,
      "F2" : F1,
      "G2" : G1,
      "G#2" : Gs1,
      "A2" : A1,
      "A#2" : As1,
      "B2" : B1,
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
      className={classNames('ba pointer absolute grow-large br-pill', {
        'bg-black green h3': minor, // minor keys are green
        'black bg-green h4': !minor, // major keys are white
      })}
      style={{
        // CSS
        maxWidth: '10rem',
        top: 10,
        left: `${index * 5}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? '1.5rem' : '2rem',
        marginLeft: minor ? '0.25rem' : 0,
      }}
    ></div>
  );
}

function Trumpet({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C2', idx: 0 },
    { note: 'D2', idx: 1 },
    { note: 'E2', idx: 2 },
    { note: 'F2', idx: 3 }, 
    { note: 'G2', idx: 4 },
    { note: 'A2', idx: 5 },
    { note: 'B2', idx: 6 },
  ]);

 

  useEffect(() => {
    setSynth(oldSynth => {
      oldSynth.disconnect();
      return sampler.toDestination();
    })
    return () => {};
}, [] );

  const oscillators: List<OscillatorType> = List([
    'sine',
    'sawtooth',
    'square',
    'triangle',
    'fmsine',
    'fmsawtooth',
    'fmtriangle',
    'amsine',
    'amsawtooth',
    'amtriangle',
  ]) as List<OscillatorType>;

  return (
    <div className="pv5 pl7 bg-light-blue shadow5 br-pill b--dashed bw4 b--blue">
      <div className="relative dib h4 w-100">
        {Range(2, 10).map(octave =>
          keys.map(key => {
            //const isMinor = key.note.indexOf('#') !== -1;
            const note = `${key.note}`;
            return (
              <PianoKey
                key={note} //react key
                note={note}
                synth={synth}
                //minor={isMinor}
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

export const TrumpetInstrument = new Instrument('Vocal Shots', Trumpet);
