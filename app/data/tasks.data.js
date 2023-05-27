const __MorningList = { n: "Morning", c: [
    {
        n: "Morning Brain",
        c: [
            "Caff 50mg",
            "Es Oil 15m: Mt & Rm",
            "40hz [1h]",
            "Dress Up",
        ],
    },
    {
        n: "Morning Intestine",
        c: [
            "TEA: Green",
            "TEA: Ginger",
            "TEA: Dill Weed (Eneldo)",
            "TEA: Curcuma",
            "SDW: Garlic 5m",
            "SDW: Olive Oil",
            "SDW: Bread + Butter",
            "Have Breakfast",
            "Sangre de Drago (3dr)",
            "Water + Salt (2g)",
        ]
    },
    "[30m] Writing",
    "Brush Teeth",
    "Pu & Sq",
    "[5m] Exercise",
    "[5m] Stretch",
    "[5m] Meditation",
    "Shave",
    "Shower",
    "Make Bed",
    {
        n: "Work Prep",
        c: [
            "Panax Ginseng",
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

const __NightList = { n: "Night", c: [
    {
        n: "Night Intestine",
        c: [
            "TEA: Ginger",
            "TEA: Dill Weed (Eneldo)",
            "TEA: Curcuma",
            "SDW: Olive Oil",
            "SDW: Bread + Butter",
            "Sangre de Drago",
        ]
    },
    "Brush Teeth",
    "Meditation 5min",
    "Melatonin",
    "Sleeping Mask",
    "Earplugs",
]};

const __TasksList = { n: "Tasks", t: 2, c: [
    "Bread",
    "Butter",
]};

// const genID = () => {
//     const randomNumber = Math.random();
//     return randomNumber.toString().split('.')[1];
// }

function genID() {
    return Math.floor(Math.random() * 900719925474091);
}

const genRoutines = () => {
    const lists = [__MorningList, __NightList, __TasksList, 'Task 1', 'Task 2'];

    /** @param {string | { n: string; c: any[]; t?: 1 | 2 }} task */
    function genItem(task) {
        const id = genID();

        if (typeof task === 'string') {
            state.listItemRef[id] = { n: task, d: 0, id, t: 0 };
        } else {
            if (!task.c) log(task)
            const children = task.c.map((x) => genItem(x));
            state.listItemRef[id] = { n: task.n, c: children, id, t: task.t || 1 };
        }

        return id;
    }

    return lists.map(genItem);
};
