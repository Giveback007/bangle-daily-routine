// TODO:
// 1. Dark & Light Mode
// 2. Routines and Checklists, different behaviors.

import './init.js';
import './utils.js';
import './data/enums.js';
import './data/tasks.data.js';
import './state.js';
import './render-checklist.js';

function bootstrap() {
    Bangle.setLCDBrightness(1);
    Bangle.setLocked(false);

    /** @type {State} */
    let storedState = storage.readJSON(stateStore, true);
    if (!storedState || storedState.ver !== state.ver) {
        storedState = state;
        state.homeScreen = genRoutines();
    }

    storedState.navHistory = [];
    onStateChange(storedState);

    // -- Double Click BTN1 Render: [Main Menu] -- //
    /**
     * @typedef {Object} arg
     * @property {boolean} state
     * @property {number} lastTime
     * @property {number} time
     * @property {Pin} pin
     */

    let lastClick = 0;
    setWatch(/** @param {arg} _ */ (_) => {
        const now = Date.now();
        if ((now - lastClick) < 750) {
            lastClick = 0;
            renderScreen('prev');
        }

        else lastClick = now;
    }, BTN1, { repeat: true, debounce: 50, edge: 'falling' });
    // -- START -- //
    setTimeout(() => {
        renderScreen('home');
    }, 0);
}

wait(0).then(bootstrap);
