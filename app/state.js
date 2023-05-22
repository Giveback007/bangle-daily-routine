/** @type {State} */
let state = {
    screen: 'home',
    navHistory: [],
    homeScreen: [],
    listItemRef: { lastID: 0 }
};

/**
 * @param {State} [newState]
 */
function onStateChange(newState) {
    state = newState || state;
    storage.writeJSON(stateStore, state);
}

/** @param {num} id */
function resetChecklist(id) {
    const itm = state.listItemRef[id];
    if (typeof itm.d === 'number') 
        itm.d = 0;
    else
        itm.d.forEach(resetChecklist);

    debounceChangeOnState.fnc();
}

const debounceChangeOnState = debounce(onStateChange, 100);
