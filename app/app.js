import './utils.js';
import './tasks.js';

/**
 * @param {str} taskName
 */
function renderList(taskName) {
    const tsk = clone(tasks[taskName]);
    const scroller = E.showScroller({
        h: 50,
        c: tsk.length,
        draw : (idx, r) => {
            const item = tsk[idx];
            const str = `[${item[0] ? "X" : " "}] ${item[1]}`;
            g.setFont("6x8:2").drawString(str, r.x+10, r.y+4);
    
            // draw a rectangle around each item
            g.drawRect(r.x, r.y, r.x + r.w, r.y + r.h); 
        },
        select : (idx) => {
            const item = tsk[idx];
            item[0] = !item[0];
            scroller.draw();
        }
    });
}

renderList("Morning");
