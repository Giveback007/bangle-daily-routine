const __MorningList = { n: "Morning", t: 1, d: [
    {
        n: "Morning Brain",
        d: [
            "Caff 50mg",
            "Es Oil 15m: Mt & Rm",
            "40hz [1h]",
            "Dress Up",
        ],
    },
    {
        n: "Morning Intestine",
        d: [
            "TEA: Green",
            "TEA: Ginger",
            "TEA: Dill Weed (Eneldo)",
            "TEA: Curcuma",
            "SDW: Garlic 5m",
            "SDW: Olive Oil",
            "SDW: Bread + Butter",
            "Sangre de Drago (3dr)",
            "Water + Salt (2g)",
        ]
    },
    "Brush Teeth",
    "5min Exercise",
    "5min Stretch",
    "5min Meditation",
    "Shave",
    "Shower",
    "Make Bed",
    {
        n: "Work Prep",
        d: [
            "Laptop + Case",
            "Laptop Stand",
            "Extension Cord",
            "Charger",
            "2 Chrg Cables",
            "Bangle.js",
            "Bangle.js Cable",
            "Mouse",
            "Mousepad",
            "Earbuds",
            "Notebook",
            "Pencil",
        ]
    }
]};

const __NightList = { n: "Night", t: 1, d: [
    {
        n: "Night Intestine",
        d: [
            "TEA: Ginger",
            "TEA: Dill Weed (Eneldo)",
            "TEA: Curcuma",
            "SDW: Olive Oil",
            "SDW: Bread + Butter",
            "Sangre de Drago",
            "Panax Ginseng",
        ]
    },
    "Brush Teeth",
    "Meditation 5min",
    "Melatonin",
    "Sleeping Mask",
    "Earplugs",
]};

const __TasksList = { n: "Tasks", t: 2, d: [
    "Bread",
    "Butter",
]};

const genRoutines = () => {
    const lists = [__MorningList, __NightList, __TasksList];

    /** @param {string | { n: string; d: any[]; t: 0 | 1 | 2 }} task */
    function genItem(task) {
        const id = ++state.listItemRef.lastID;

        if (typeof task === 'string') {
            state.listItemRef[id] = { n: task, d: 0, id };
        } else {
            const ids = task.d.map((x) => genItem(x));
            state.listItemRef[id] = { n: task.n, d: ids, id, t: task.t ? task.t : 1 };
        }

        return id;
    }

    // @ts-ignore
    return lists.map(genItem);
};


// TODO: Separate routines and checklists