// 3rd party
import { List, Map } from "immutable";

// project dependencies

import { TrumpetInstrument } from "./instruments/ColeBoel";
import { WaveformVisualizer } from "./visualizers/Waveform";
import { JayVisualizer } from "./visualizers/Ijadman";
import { JoshuaVisualizer } from "./visualizers/ColeBoel";
import { JackVisualizer } from "./visualizers/jackderemiah";
import { troyc529Visualizer } from "./visualizers/troyc529";
import { GuitarInstrument } from "./instruments/troyc529";
import { CelloInstrument } from "./instruments/Ijadman";
import { CellPhoneInstrument } from "./instruments/jackderemiah";

/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */
export type AppState = Map<string, any>; // similar to { [id: string]: any }

/**
 * Start with the default piano instrument.
 * Add your instruments to this list.
 */
const instruments = List([
  TrumpetInstrument,
  GuitarInstrument,
  CelloInstrument,
  CellPhoneInstrument,
]); // similar to Instrument[]

/**
 * Start with the default waveform visualizer.
 * Add your visualizers to this list.
 */
const visualizers = List([
  WaveformVisualizer,
  JayVisualizer,
  JoshuaVisualizer,
  JackVisualizer,
  troyc529Visualizer,
]); // similar to Visualizer[]

/**
 * The default application state contains a list of instruments and a list of visualizers.
 *
 * 'instrument': List<Instrument>
 * 'visualizer': List<Visualizer>
 */
export const defaultState: AppState = Map<string, any>({
  instruments: instruments,
  visualizers: visualizers,
});
