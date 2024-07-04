/** @type {State} */
let state = {
    ver: 3,
    screen: 'home',
    navHistory: [],
    homeScreen: [],
    listItemRef: { }
};

/**
 * @param {State} [newState]
 */
function onStateChange(newState) {
    state = newState || state;
    storage.writeJSON(stateStore, state);
}

/** @param {ID} id */
function resetChecklist(id) {
    const itm = state.listItemRef[id];
    if (itm.t === 0) 
        itm.d = 0;
    else
        itm.c.forEach(resetChecklist);

    debounceChangeOnState.fnc();
}

const debounceChangeOnState = debounce(onStateChange, 100);
