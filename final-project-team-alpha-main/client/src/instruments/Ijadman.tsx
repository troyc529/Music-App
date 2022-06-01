// 3rd party library imports
import * as Tone from "tone";
import classNames from "classnames";
import { List, Range } from "immutable";
import React, { useEffect } from "react";

import A2 from "../samples/cello/A2.mp3";
import A3 from "../samples/cello/A3.mp3";
import A4 from "../samples/cello/A4.mp3";
import As2 from "../samples/cello/As2.mp3";
import As3 from "../samples/cello/As3.mp3";
import As4 from "../samples/cello/As4.mp3";
import B2 from "../samples/cello/B2.mp3";
import B3 from "../samples/cello/B3.mp3";
import B4 from "../samples/cello/B4.mp3";
import C2 from "../samples/cello/C2.mp3";
import C3 from "../samples/cello/C3.mp3";
import C4 from "../samples/cello/C4.mp3";
import C5 from "../samples/cello/C5.mp3";
import Cs3 from "../samples/cello/Cs3.mp3";
import Cs4 from "../samples/cello/Cs4.mp3";
import D2 from "../samples/cello/D2.mp3";
import D3 from "../samples/cello/D3.mp3";
import D4 from "../samples/cello/D4.mp3";
import E2 from "../samples/cello/E2.mp3";
import E3 from "../samples/cello/E3.mp3";
import E4 from "../samples/cello/E4.mp3";
import F2 from "../samples/cello/F2.mp3";
import F3 from "../samples/cello/F3.mp3";
import F4 from "../samples/cello/F4.mp3";
import G2 from "../samples/cello/G2.mp3";
import G3 from "../samples/cello/G3.mp3";
import G4 from "../samples/cello/G4.mp3";
// project imports
import { Instrument, InstrumentProps } from "../Instruments";
import { disconnect } from "process";

/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */

const sampler = new Tone.Sampler({
  urls: {
    A2: A2,
    A3: A3,
    A4: A4,
    "A#2": As2,
    "A#3": As3,
    "A#4": As4,
    B2: B2,
    B3: B3,
    B4: B4,
    C2: C2,
    C3: C3,
    C4: C4,
    C5: C5,
    "C#3": Cs3,
    "C#4": Cs3,
    D2: D2,
    D3: D3,
    D4: D4,
    E2: E2,
    E3: E3,
    E4: E4,
    F2: F2,
    F3: F3,
    F4: F4,
    G2: G2,
    G3: G3,
    G4: G4,
  },
  release: 1,
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
      onMouseUp={() => synth?.triggerRelease("+0.25")} // Question: what is `onMouseUp`?
      className={classNames("ba pointer absolute dim", {
        "bg-black gold h3": minor, // minor keys are black
        "black bg-purple h4": !minor, // major keys are white
      })}
      style={{
        // CSS
        top: 0,
        left: `${index * 2}rem`,
        zIndex: minor ? 1 : 0,
        width: minor ? "1.5rem" : "2rem",
        marginLeft: minor ? "0.25rem" : 0,
      }}
    ></div>
  );
}

function Cello({ synth, setSynth }: InstrumentProps): JSX.Element {
  const keys = List([
    { note: "C2", idx: 0 },
    { note: "C#2", idx: 0.5 },
    { note: "D2", idx: 1 },
    { note: "D#2", idx: 1.5 },
    { note: "E2", idx: 2 },
    { note: "F2", idx: 3 },
    { note: "F#2", idx: 3.5 },
    { note: "G2", idx: 4 },
    { note: "G#2", idx: 4.5 },
    { note: "A2", idx: 5 },
    { note: "A#2", idx: 5.5 },
    { note: "B2", idx: 6 },
    { note: "C3", idx: 7 },
    { note: "C#3", idx: 7.5 },
    { note: "D3", idx: 8 },
    { note: "D#3", idx: 8.5 },
    { note: "E3", idx: 9 },
    { note: "F3", idx: 10 },
    { note: "F#3", idx: 10.5 },
    { note: "G3", idx: 11 },
    { note: "G#3", idx: 11.5 },
    { note: "A3", idx: 12 },
    { note: "A#3", idx: 12.5 },
    { note: "B3", idx: 13 },
    { note: "C4", idx: 14 },
    { note: "C#4", idx: 14.5 },
    { note: "D4", idx: 15 },
    { note: "D#4", idx: 15.5 },
    { note: "E4", idx: 16 },
    { note: "F4", idx: 17 },
    { note: "F#4", idx: 17.5 },
    { note: "G4", idx: 18 },
    { note: "G#4", idx: 18.5 },
    { note: "A4", idx: 19 },
    { note: "A#4", idx: 19.5 },
    { note: "B4", idx: 20 },
  ]);

  useEffect(() => {
    setSynth((oldSynth) => {
      oldSynth.disconnect();
      var samplerRun = sampler;
      const phaser = new Tone.Phaser({
        frequency: 1,
        octaves: 1,
        baseFrequency: 500,
      }).toDestination();
      return samplerRun.connect(phaser).toDestination();
    });
    return () => {};
  }, []);

  return (
    <div className="pv4">
      <div className="relative dib h4 w-100 ml4">
        {Range(2, 10).map((octave) =>
          keys.map((key) => {
            const isMinor = key.note.indexOf("#") !== -1;
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
          })
        )}
      </div>
      <div className={"pl4 pt4 flex"}></div>
    </div>
  );
}

export const CelloInstrument = new Instrument("Cello", Cello);
