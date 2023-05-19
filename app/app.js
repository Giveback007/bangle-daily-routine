import './utils.js';
import './tasks.js';

/**
 * @param {str} taskName
 */
function renderCheckList(taskName) {
    const pad = { x: 5, y: 5 }
    const tsk = clone([[false, taskName]].concat(tasks[taskName]));

    g.setFont("6x8:2").drawString(taskName, 10, 10);
    const scroller = E.showScroller({
        h: 55,
        c: tsk.length,
        draw : (idx, r) => {
            const item = tsk[idx];

            // handle the title
            if(idx === 0) {
                g.setFontVector(20);
                const title = ellipsis(taskName, 2);

                // calculate the starting point for each line of the title and draw each line
                title.forEach((line, i) => {
                    const titleHeight = g.getFontHeight();
                    const titleWidth = g.stringWidth(line);

                    const x = (r.w - titleWidth) / 2;
                    const y = r.y + (r.h - titleHeight) / (title.length * 2) + i * titleHeight;

                    g.drawString(line, x, y);
                });

                return;
            }

            // draw the checkbox & task text
            g.setFont("6x8:2")
            const arr = ellipsis(`[${item[0] ? "x" : " "}] ${item[1]}`, 2);
            arr.forEach((line, i) => g.drawString(line,
                r.x + pad.x,
                r.y + pad.y + i * g.getFontHeight() + (i * 5)
            ));
            g.drawRect(r.x, r.y, r.x + r.w - 1, r.y + r.h - 5); 
        },
        select : (idx) => {
            const item = tsk[idx];
            item[0] = !item[0];
            scroller.draw();
        }
    });
}

renderCheckList("Co Working Preparation Stuff 12345 More");
// renderCheckList("Morning");

// the next step:
// 1. Add a menu to toggle between the different task lists

