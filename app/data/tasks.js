const __MorningList = [
    "LIST: Morning Brain",
    "Exercise 5min",
    "Meditation 5min",
    "Shower",
    "Brush Teeth",
    "Shave",
    "Make Bed"
];

const __MorningBrainList = [
    "Caffeine",
    "Dress Up",
    "LIST: Morn Intestine",
    "Es Oil (15m): Mint & Rsmr",
    "Water + Electrolytes",
    "Bread",
];

const __MorningIntestineList = [
    "TEA: Green",
    "TEA: Ginger",
    "TEA: Dill Weed (Eneldo)",
    "TEA: Curcuma",
    "Garlic",
    "Olive Oil",
    "Sangre de Drago",
    "Mastic Gum",
];

const __NightList = [
    "Brush Teeth",
    "Meditation 5min",
    "Sleeping Pills",
    "Sleeping Mask",
    "Earplugs",
];

const __NightIntestineList = [
    "TEA: Curcuma",
    "TEA: Dill Weed (Eneldo)",
    "Olive Oil",
    "Sangre de Drago",
    
];

const __TasksList = [
    "Go: Tienda Naturista",
    "TD: Gastriten",
    "TD: Sangre De Drago",
    "TD: Mastic Gum",
    "Go: Ferrisariato",
    "FR: Eneldo",
    "FR: Curcuma",
    "FR: Ginger",
    "FR: Mint",
    "FR: Manuka Honey",
    "FR: Olive Oil",
];



const genRoutines = () => {
    /** @param {string} n */
    function genItem(n) {
        const id = ++state.listItemRef.lastID;
        state.listItemRef[id] = { n, d: 0, id };
        return id;
    }

    /** @type {Dict<checkList>} */
    const lists_routines = {
        0: {
            name: 'Morning',
            type: 'routine',
            items: __MorningList.map(genItem),
        },
        1: {
            name: 'Morning Brain',
            type: 'routine',
            items: __MorningBrainList.map(genItem),
        },
        2: {
            name: 'Morning Intestine',
            type: 'routine',
            items: __MorningIntestineList.map(genItem),
        },
        4: {
            name: 'Night',
            type: 'routine',
            items: __NightList.map(genItem),
        },
        // 2: {
        //     name: 'Co Work Prep',
        //     type: 'routine',
        //     items: [],
        // },
        6: {
            name: 'Tasks',
            type: 'checklist',
            items: __TasksList.map(genItem),
        },
    };

    return lists_routines;
};


// TODO: Separate routines and checklists