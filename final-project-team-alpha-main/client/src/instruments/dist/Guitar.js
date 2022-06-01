"use strict";
//Troy Carloni
exports.__esModule = true;
exports.GuitarInstrument = exports.PianoKey = void 0;
// 3rd party library imports
var Tone = require("tone");
var classnames_1 = require("classnames");
var immutable_1 = require("immutable");
var react_1 = require("react");
var A2_mp3_1 = require("../samples/guitar-electric/A2.mp3");
var A3_mp3_1 = require("../samples/guitar-electric/A3.mp3");
var A4_mp3_1 = require("../samples/guitar-electric/A4.mp3");
var A5_mp3_1 = require("../samples/guitar-electric/A5.mp3");
var C3_mp3_1 = require("../samples/guitar-electric/C3.mp3");
var C4_mp3_1 = require("../samples/guitar-electric/C4.mp3");
var C5_mp3_1 = require("../samples/guitar-electric/C5.mp3");
var C6_mp3_1 = require("../samples/guitar-electric/C6.mp3");
var Cs2_mp3_1 = require("../samples/guitar-electric/Cs2.mp3");
var Ds3_mp3_1 = require("../samples/guitar-electric/Ds3.mp3");
var Ds4_mp3_1 = require("../samples/guitar-electric/Ds4.mp3");
var Ds5_mp3_1 = require("../samples/guitar-electric/Ds5.mp3");
var E2_mp3_1 = require("../samples/guitar-electric/E2.mp3");
var Fs2_mp3_1 = require("../samples/guitar-electric/Fs2.mp3");
var Fs3_mp3_1 = require("../samples/guitar-electric/Fs3.mp3");
var Fs4_mp3_1 = require("../samples/guitar-electric/Fs4.mp3");
var Fs5_mp3_1 = require("../samples/guitar-electric/Fs5.mp3");
// project imports
var Instruments_1 = require("../Instruments");
/** ------------------------------------------------------------------------ **
 * Contains implementation of components for Piano.
 ** ------------------------------------------------------------------------ */
var sampler = new Tone.Sampler({
    urls: {
        "A2": A2_mp3_1["default"],
        "A3": A3_mp3_1["default"],
        "A4": A4_mp3_1["default"],
        "A5": A5_mp3_1["default"],
        "C3": C3_mp3_1["default"],
        "C4": C4_mp3_1["default"],
        "C5": C5_mp3_1["default"],
        "C6": C6_mp3_1["default"],
        "C#2": Cs2_mp3_1["default"],
        "D#3": Ds3_mp3_1["default"],
        "D#4": Ds4_mp3_1["default"],
        "D#5": Ds5_mp3_1["default"],
        "E2": E2_mp3_1["default"],
        "F#2": Fs2_mp3_1["default"],
        "F#3": Fs3_mp3_1["default"],
        "F#4": Fs4_mp3_1["default"],
        "F#5": Fs5_mp3_1["default"]
    },
    release: 1
}).toDestination();
function PianoKey(_a) {
    var note = _a.note, synth = _a.synth, minor = _a.minor, index = _a.index;
    /**
     * This React component corresponds to either a major or minor key in the piano.
     * See `PianoKeyWithoutJSX` for the React component without JSX.
     */
    return (
    // Observations:
    // 1. The JSX refers to the HTML-looking syntax within TypeScript.
    // 2. The JSX will be **transpiled** into the corresponding `React.createElement` library call.
    // 3. The curly braces `{` and `}` should remind you of string interpolation.
    react_1["default"].createElement("div", { onMouseDown: function () { return synth === null || synth === void 0 ? void 0 : synth.triggerAttack("" + note); }, onMouseUp: function () { return synth === null || synth === void 0 ? void 0 : synth.triggerRelease('+0.25'); }, className: classnames_1["default"]('ba pointer absolute dim', {
            'bg-red black h3': minor,
            'white bg-black h4': !minor
        }), style: {
            // CSS
            top: 0,
            left: index * 2 + "rem",
            zIndex: minor ? 1 : 0,
            width: minor ? '1.5rem' : '2rem',
            marginLeft: minor ? '0.25rem' : 0
        } }));
}
exports.PianoKey = PianoKey;
function Guitar(_a) {
    var synth = _a.synth, setSynth = _a.setSynth;
    var keys = immutable_1.List([
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
    react_1.useEffect(function () {
        setSynth(function (oldSynth) {
            oldSynth.disconnect();
            var samplerRun = sampler;
            var dist = new Tone.Distortion(0.5).toDestination();
            var phaser = new Tone.Phaser({
                frequency: 15,
                octaves: 5,
                baseFrequency: 1000
            }).toDestination();
            return samplerRun.connect(dist).connect(phaser).toDestination();
        });
        return function () { };
    }, []);
    return (react_1["default"].createElement("div", { className: "pv4" },
        react_1["default"].createElement("div", { className: "relative dib h4 w-100 ml4" }, immutable_1.Range(2, 10).map(function (octave) {
            return keys.map(function (key) {
                var isMinor = key.note.indexOf('#') !== -1;
                var note = "" + key.note;
                return (react_1["default"].createElement(PianoKey, { key: note, note: note, synth: synth, minor: isMinor, octave: octave, index: key.idx }));
            });
        })),
        react_1["default"].createElement("div", { className: 'pl4 pt4 flex' })));
}
exports.GuitarInstrument = new Instruments_1.Instrument('Guitar', Guitar);
