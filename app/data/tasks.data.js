const __MorningList = { n: "Morning", c: [
    "Caff 50mg",
    "[2m] Es Oil: Mt & Rm",
    "Curcm & Mint Tea",
    "Ginko Bil",
    "Shower H&C",
    "Brush Teeth",
    "Shave",
    "15m Writing",
    "1L Water",
    "3-Pu & 3-Sq",
]};

// const __NightList = { n: "Night", c: [
//     "Tea",
//     "Brush Teeth",
//     "Meditation 5min",
//     "Sleeping Mask",
//     "Earplugs",
// ]};

function genID() {
    return Math.floor(Math.random() * 900719925474091);
}

const genRoutines = () => {
    const lists = [
        __MorningList,
        // __NightList
    ];

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
