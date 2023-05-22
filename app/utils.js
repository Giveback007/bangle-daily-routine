/** @param {number} ms */
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @template T
 * @param {T} obj
 * @returns {T}
 */
const clone = obj => JSON.parse(JSON.stringify(obj));

/**
 * @param {str} str
 * @param {number} maxLines
 * @param {number} [maxWidth]
 */
const ellipsis = (str, maxLines, maxWidth) => {
    maxWidth = maxWidth || g.getWidth();

    /** @type {string[]} */
    const allLines = g.wrapString(str, maxWidth);
    let lines = allLines.slice(0, maxLines);
    let lastLine = `${lines[lines.length - 1]}${allLines.length > maxLines ? '...' : ''}`;
    let lastLineWidth = g.stringWidth(lastLine);

    if (lastLineWidth > maxWidth) {
        while (lastLineWidth > maxWidth) {
            lastLine = lastLine.slice(0, -1);
            lastLineWidth = g.stringWidth(lastLine);
        }

        lastLine = lastLine.slice(0, -3) + '...';
    }

    lines[lines.length - 1] = lastLine;
    return lines;
}

/**
 * Debounces a function, ensuring it is not called multiple times within a specified time period.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to wait before invoking the debounced function.
 * @returns {{ fnc: Function, cancel: Function }}
 */
function debounce(func, wait) {
    let timeoutId;
  
    return {
        fnc: function() {
            const args = arguments;
            clearTimeout(timeoutId || 0);
            timeoutId = setTimeout(() => {
                // @ts-ignore
                func.apply(this, args);
            }, wait);
        },
        cancel: () => clearTimeout(timeoutId || 0)
    }
}

/** Math.random().toString(); */
const genID = () => Math.random().toString().substring(2);

/** Get last item from an array
 * @template T
 * @param {T[]} arr
 */
const arrLast = arr => arr[arr.length - 1];

/**
 * Returns an object indicating how many total and how many left
 * @param {number} id
 * @returns {{ done: number, total: number, isDone: boolean }}
 */
function calcItemStatus(id) {
    const itm = state.listItemRef[id];
    if (typeof itm.d === 'number') return { done: itm.d, total: 1, isDone: itm.d === 1 };
    
    let total = 0;
    let done = 0;
    itm.d.forEach(x => {
        total++;
        const status = calcItemStatus(x);
        if (status.isDone) done++;
    });

    return { done, total, isDone: done === total };
}