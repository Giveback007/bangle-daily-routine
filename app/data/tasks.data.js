function genID() {
    return Math.floor(Math.random() * 900719925474091);
}

const genRoutines = () => {
    /** @type {ListItem[]} */
    const lists = storage.readJSON(listStore, true);

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
