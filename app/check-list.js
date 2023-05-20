/** @param {number[]} list */
const sortCheckList = (list) => list.sort((a, b) => {
    if (a === -1) return -1;
    if (b === -1) return 1;

    const aDone = state.listItemRef[a].d;
    const bDone = state.listItemRef[b].d;

    if (aDone && !bDone) return 1;
    if (!aDone && bDone) return -1;

    return 0;
});

/**
 * @param {str} checkListID
 */
function renderCheckList(checkListID) {
    state.screen = 'checkList';

    const pad = { x: 4, y: 8 }
    const checkList = state.lists[checkListID];
    let items = [-1].concat(checkList.items);

    let selectedIndex = -1;
    
    const debounceClearSelected = debounce(() => {
        selectedIndex = -1;
        // sortCheckList(items);
        scroller.draw();
    }, 500);

    const scroller = E.showScroller({
        h: 55,
        c: items.length,
        draw: (i, r) => {
            const item = state.listItemRef[items[i]];
            const sel = selectedIndex === i;

            // handle the title
            if (i === 0) {
                debounceClearSelected.cancel();

                g.setFontVector(20);
                const title = ellipsis(sel ? "Tap Again: \nReset Marks" : checkList.name, 2);
                g.setColor(sel ? "#FF0000" : "#FFFFFF");

                // draw a box around the title if it is selected
                if (sel) g.drawRect(r.x, r.y, r.x + r.w - 1, r.y + r.h - 5);

                // draw the title in the center of the box, with max two lines
                title.forEach((line, i) => {
                    const titleHeight = g.getFontHeight();
                    const titleWidth = g.stringWidth(line);

                    const x = (r.w - titleWidth) / 2;
                    const y = r.y + (r.h - titleHeight) / (title.length * 2) + i * titleHeight;

                    g.drawString(line, x, y);
                });

                return;
            }
            
            g.setColor(sel ? "#00FF00" : "#FFFFFF");

            // draw the checkbox & task text
            g.setFont("6x8:2")
            const arr = ellipsis(`[${item.d ? "x" : " "}] ${item.n}`, 2);
            arr.forEach((line, i) => g.drawString(line,
                r.x + pad.x,
                r.y + pad.y + i * g.getFontHeight() + (i * 5)
            ));
            g.drawRect(r.x, r.y, r.x + r.w - 1, r.y + r.h - 5);
        },
        select: (i) => {
            if (i === 0) {
                if (selectedIndex === 0) {
                    log("resetting checklist")
                    resetChecklist(checkListID);
                    selectedIndex = -1;
                } else {
                    selectedIndex = i;
                }
    
                return scroller.draw();
            }

            selectedIndex = i;
            const item = state.listItemRef[items[i]];
            item.d = item.d ? 0 : 1;

            scroller.draw();
            debounceChangeOnState.fnc();
            debounceClearSelected.fnc();
        }
    });
}