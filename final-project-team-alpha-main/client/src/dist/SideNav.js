"use strict";
exports.__esModule = true;
exports.SideNav = void 0;
// 3rd party library imports
var classnames_1 = require("classnames");
var immutable_1 = require("immutable");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var icons_react_1 = require("@carbon/icons-react");
// project imports
var Reducer_1 = require("./Reducer");
function SideNav(_a) {
    /**
     *
     * SideNav
     * |-----------------|
     * | Nameless App    |
     * | |-----------|   |
     * | |           |   |
     * | |-----------|   |
     * |                 |
     * | InstrumentsNav  |
     * | |-----------|   |
     * | |           |   |
     * | |-----------|   |
     * |                 |
     * | VisualizersNav  |
     * | |-----------|   |
     * | |           |   |
     * | |-----------|   |
     * |                 |
     * | SongsNav        |
     * | |-----------|   |
     * | |           |   |
     * | |-----------|   |
     * |                 |
     * |-----------------|
    */
    var state = _a.state, dispatch = _a.dispatch;
    return (react_1["default"].createElement("div", { className: "absolute top-0 left-0 bottom-0 w5 z-1 shadow-1 bg-white flex flex-column" },
        react_1["default"].createElement("div", { className: "h3 fw7 f5 flex items-center pl3 bb b--light-gray" }, "TEAM ALPHA"),
        react_1["default"].createElement("div", { className: "flex-auto" },
            react_1["default"].createElement(InstrumentsNav, { state: state, dispatch: dispatch }),
            react_1["default"].createElement(VisualizersNav, { state: state, dispatch: dispatch }),
            react_1["default"].createElement(SongsNav, { state: state, dispatch: dispatch }))));
}
exports.SideNav = SideNav;
/** ------------------------------------------------------------------------ **
 * SideNav Sub-Components
 ** ------------------------------------------------------------------------ */
function InstrumentsNav(_a) {
    /**
     *  InstrumentsNav
     *  |-----------------|
     *  | Section         |
     *  | |-------------| |
     *  | | RadioButton | |
     *  | |-------------| |
     *  | | RadioButton | |
     *  | |-------------| |
     *  |      ...        |
     *  |-----------------|
    */
    var _b;
    var state = _a.state;
    var instruments = state.get('instruments');
    var activeInstrument = (_b = state.get('instrument')) === null || _b === void 0 ? void 0 : _b.name;
    var location = react_router_dom_1.useLocation();
    return (react_1["default"].createElement(Section, { title: "Instruments" }, instruments.map(function (i) { return (react_1["default"].createElement(RadioButton, { key: i.name, to: "/" + i.name + location.search, text: i.name, active: i.name === activeInstrument, onClick: function () { return console.log(i.name); } })); })));
}
function VisualizersNav(_a) {
    /**
     *  VisualizersNav
     *  |-----------------|
     *  | Section         |
     *  | |-------------| |
     *  | | RadioButton | |
     *  | |-------------| |
     *  | | RadioButton | |
     *  | |-------------| |
     *  |      ...        |
     *  |-----------------|
    */
    var _b;
    var state = _a.state;
    var visualizers = state.get('visualizers');
    var activeVisualizer = (_b = state.get('visualizer')) === null || _b === void 0 ? void 0 : _b.name;
    var location = react_router_dom_1.useLocation();
    return (react_1["default"].createElement(Section, { title: "Visualizers" }, visualizers.map(function (v) { return (react_1["default"].createElement(RadioButton, { key: v.name, to: {
            pathname: location.pathname,
            search: "?visualizer=" + v.name
        }, text: v.name, active: v.name === activeVisualizer, onClick: function () { return console.log(v.name); } })); })));
}
function SongsNav(_a) {
    /**
     *
     *  SongsNav
     *  |-----------------|
     *  | Section         |
     *  | |-------------| |
     *  | | Music20     | |
     *  | |-------------| |
     *  | | Music20     | |
     *  | |-------------| |
     *  |      ...        |
     *  |-----------------|
    */
    var state = _a.state, dispatch = _a.dispatch;
    var songs = state.get('songs', immutable_1.List());
    return (react_1["default"].createElement(Section, { title: "Playlist" }, songs.map(function (song) { return (react_1["default"].createElement("div", { key: song.get('id'), className: "f6 pointer underline flex items-center no-underline i dim", onClick: function () {
            return dispatch(new Reducer_1.DispatchAction('PLAY_SONG', { id: song.get('id') }));
        } },
        react_1["default"].createElement(icons_react_1.Music20, { className: "mr1" }),
        song.get('songTitle'),
        " ",
        react_1["default"].createElement("br", null),
        "Album: " + song.get('albumTitle'),
        " ",
        react_1["default"].createElement("br", null),
        "Artist: " + song.get('artistName'),
        " ",
        react_1["default"].createElement("br", null))); })));
}
function RadioButton(_a) {
    var to = _a.to, text = _a.text, active = _a.active, onClick = _a.onClick;
    return (react_1["default"].createElement(react_router_dom_1.Link, { to: to, className: "no-underline" },
        react_1["default"].createElement("div", { className: classnames_1["default"]('f6 flex items-center black', { fw7: active }), onClick: onClick },
            active ? (react_1["default"].createElement(icons_react_1.RadioButtonChecked20, { className: "mr1" })) : (react_1["default"].createElement(icons_react_1.RadioButton20, { className: "mr1" })),
            react_1["default"].createElement("div", { className: "dim" }, text))));
}
/** ------------------------------------- **
 * Section
 ** ------------------------------------- */
var Section = function (_a) {
    var title = _a.title, children = _a.children;
    return (react_1["default"].createElement("div", { className: "flex flex-column h-25 bb b--light-gray pa3" },
        react_1["default"].createElement("div", { className: "fw7 mb2" },
            title,
            " "),
        react_1["default"].createElement("div", { className: "flex-auto overflow-scroll" }, children)));
};
