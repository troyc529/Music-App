"use strict";
exports.__esModule = true;
exports.defaultState = void 0;
// 3rd party
var immutable_1 = require("immutable");
// project dependencies
var Ijadman_2_1 = require("./instruments/Ijadman_2");
var ColeBoel_1 = require("./instruments/ColeBoel");
var Waveform_1 = require("./visualizers/Waveform");
var Ijadman_1 = require("./visualizers/Ijadman");
var ColeBoel_2 = require("./visualizers/ColeBoel");
var jackderemiah_1 = require("./visualizers/jackderemiah");
var troyc529_1 = require("./visualizers/troyc529");
var troyc529_2 = require("./instruments/troyc529");
var Ijadman_2 = require("./instruments/Ijadman");
var jackderemiah_2 = require("./instruments/jackderemiah");
/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
var instruments = immutable_1.List([
    ColeBoel_1.TrumpetInstrument,
    Ijadman_2_1.DrumInstrument,
    troyc529_2.GuitarInstrument,
    Ijadman_2.CelloInstrument,
    jackderemiah_2.CellPhoneInstrument,
]); // similar to Instrument[]
/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
var visualizers = immutable_1.List([
    Waveform_1.WaveformVisualizer,
    Ijadman_1.JayVisualizer,
    ColeBoel_2.JoshuaVisualizer,
    jackderemiah_1.JackVisualizer,
    troyc529_1.troyc529Visualizer,
]); // similar to Visualizer[]
/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
exports.defaultState = immutable_1.Map({
    instruments: instruments,
    visualizers: visualizers
});
