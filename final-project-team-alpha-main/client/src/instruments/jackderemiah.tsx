// Jack Deremiah

// 3rd party library imports
import * as Tone from 'tone';
import classNames from 'classnames';
import { List, Range } from 'immutable';
import React, {useEffect} from 'react';

 


// project imports

import { Instrument, InstrumentProps } from '../Instruments';
import { PingPongDelay } from 'tone';

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */


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
      className={classNames('ba pointer grid sdfaf rGap h10pix' , {
        "green": minor, // minor keys are green
        "purple": !minor, // major keys are white
        
      })}
      style={{
        
        maxWidth: '10rem',
        top: 10,
        left: `${index * 5}rem`,
        width: "10px",
       
      }}
    ></div>
  );
}



function CellPhone({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: 'C', },
    { note: 'Db',},
    { note: 'D',},
    { note: 'Eb',},
    { note: 'E', },
    { note: 'F',},
    { note: 'Gb', },
    { note: 'G', },
    { note: 'Ab', },
    { note: 'A', },
    { note: 'Bb', },
    { note: 'B', },
  ]);


  useEffect(() => {
    setSynth(oldSynth => {
        oldSynth.disconnect();
       
      
        const crusher = new Tone.BitCrusher(1).toDestination();
        const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
        const dist = new Tone.Distortion(0.5).toDestination();
        const membrane =  new Tone.MembraneSynth({
        
          envelope: {
            attack: 0.2,
            decay: 1,
            sustain: 0,
           release: 1,
          },
        })
        return membrane.
        connect(crusher).
        connect(pingPong).
        connect(dist).
       toDestination();
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
    <div className="pv4 bg-white-90 flex-m ma-auto w-80-l dib-ns br3">

      <div className="pv4 bg-navy
       flex-m ma-auto w-10-ns dib-ns grid sdfaf center-ns br3 "> 

        <div className="pv4 bg-near-black h-100 ml20-p
       flex-m ma-auto w3-ns dib-ns center-ns br3  ma-auto "> </div>
       </div>

      <div className="pv4 bg-navy flex-m ma-auto w-10-ns
       dib-ns grid sdfaf center-ns rGap br3 h-75-ns ">
      <div className="grid sdfaf_inner dib-ns gap ml40-p  ">
        {Range(1, 3).map(octave => keys.map(key => {
          const isMinor = key.note.indexOf('b') !== -1;
          const note = `${key.note}${octave}`;
          return (
            <PianoKey
              key={note} //react key
              note={note}
              synth={synth}
              minor={isMinor}
              octave={octave / 2}
              index={(octave - 2)} />
          );
        })
        )}
      </div>
      </div>
      <div className={'pl4 pt4 flex'}>
      </div>
    </div>
  );

}

export const CellPhoneInstrument = new Instrument('CellPhone', CellPhone);
