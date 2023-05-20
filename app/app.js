import './init.js';
import './utils.js';
import './data/tasks.js';
import './state.js';
import './check-list.js';
import './render-menu.js';

function bootstrap() {
    Bangle.setLCDBrightness(1);
    Bangle.setLocked(false);

    /** @type {State} */
    let storedState = storage.readJSON(stateStore, false);
    if (!storedState) {
        storedState = state;
        state.listItemRef = { lastID: 0 };
        state.lists = genRoutines();

        __MorningList.forEach((n) => {
            const id = ++state.listItemRef.lastID;
            state.lists[0].items.push(id);
            state.listItemRef[id] = { n, d: 0, id };
        });

        __NightList.forEach((n) => {
            const id = ++state.listItemRef.lastID;
            state.lists[1].items.push(id);
            state.listItemRef[id] = { n, d: 0, id };
        });
    }

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
        if (now - lastClick < 750) {
            lastClick = 0;
            if (state.screen === 'checkList') renderMenu();
            else if (state.screen === 'home') load(); // exit
        } else {
            lastClick = now;
        }

    }, BTN1, { repeat: true, debounce: 50, edge: 'falling' });

    // -- START -- //
    setTimeout(() => {
        renderMenu();
    }, 0);
}

wait(0).then(bootstrap);
