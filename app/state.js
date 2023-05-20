/** @type {State} */
let state = {
    screen: 'home',
    lists: {},
    listItemRef: { lastID: 0 }
};

/**
 * @param {State} [newState]
 */
function onStateChange(newState) {
    state = newState || state;
    storage.writeJSON(stateStore, state);
}

/** @param {str} id */
function resetChecklist(id) {
    const checkList = state.lists[id];
    checkList.items.forEach((id) =>
        state.listItemRef[id].d = 0);

    onStateChange();
}

const debounceChangeOnState = debounce(onStateChange, 300);

// TODO
// Next steps:
// 1. Save the state of the check list to the Bangle's storage
//  a. To do this we need to handle this in the state.js file
//  b. The function will update the state object
//  c. And will save the state of the check list
// 2. Add a button to clear the check list