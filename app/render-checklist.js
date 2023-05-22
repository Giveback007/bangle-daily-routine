/**
 * @arg {'home' | 'prev' | num} screen
 */
function renderScreen(screen) {
    if (screen === 'prev') {
        const prevScreen = state.navHistory.pop();
        log('prevScreen:', prevScreen);
        if (prevScreen === undefined) return load();
        screen = prevScreen;
    } else if (screen === 'home') {
        state.navHistory = [];
    } else {
        state.navHistory.push(state.screen);
    }

    state.screen = screen;
    return renderCheckList();
}

function renderCheckList() {
    const ref = state.listItemRef;
    const screen = state.screen;
    const pad = { x: 2, y: 3 }
    const checkBoxWidth = 36;

    let list = screen === 'home' ? state.homeScreen : ref[screen].d;
    if (typeof list === 'number') throw 'Invalid screen';
    
    const titleText = screen === 'home' ? 'Routines & Check Lists' : ref[screen].n;
    list = [-1].concat(list) // To add the title to the list
    
    let selcIndex = -1;
    const debounceClearSelected = debounce(() => {
        selcIndex = -1;
        scroller.draw();
    }, 500);

    const scroller = E.showScroller({
        h: 55,
        c: list.length,
        draw: (i, r) => {
            const isSelc = selcIndex === i;
            const isHome = screen === 'home';

            if (i === 0)
                return drawTitle(isSelc, titleText, r, isHome ? 24 : 20);

            const itm = ref[list[i]];
            const type = checkListItemType[itm.t || 0];
            const status = calcItemStatus(itm.id);

            let color = "#FFFFFF";
            if (isSelc) {
                if (type === 'ITEM') {
                    color = "#808080";
                } else {
                    color = "#0080FF";
                }
            } else if (status.done) {
                // green
                color = "#00FF00";
            }
            // grey: "#808080"
            // darkGrey: "#404040"
            // blue: "#0080FF"

            drawText(r, itm, pad, checkBoxWidth, color, isHome);
            drawCheckBox(r, itm, pad, checkBoxWidth, status);
            g.drawRect(r.x, r.y, r.x + r.w - 1, r.y + r.h - 5);
        },
        select: (i) => {
            if (i === 0) {
                if (screen === 'home') return;
                if (selcIndex === 0) {
                    resetChecklist(screen);
                    selcIndex = -1;
                } else {
                    selcIndex = i;
                }

                return scroller.draw();
            }

            const itm = ref[list[i]];
            const type = checkListItemType[itm.t || 0];
            if (type !== 'ITEM' && selcIndex === i) {
                return renderScreen(itm.id);
            }

            if (type === 'ITEM') {
                itm.d = itm.d ? 0 : 1;
    
                debounceChangeOnState.fnc();
                debounceClearSelected.fnc();
            }
            
            selcIndex = i;
            scroller.draw();
        }
    });
}

/**
 * @param {boolean} isSelected
 * @param {string} text
 * @param {rect} r
 * @param {number} fontSize
 * @description
 * Draws the title text in the center of the given rectangle
 * 
*/
function drawTitle(isSelected, text, r, fontSize) {
    g.setFontVector(fontSize);
    const title = ellipsis(isSelected ? "Tap Again: \nReset Marks" : text, 2);
    g.setColor(isSelected ? "#FF0000" : "#FFFFFF");

    // draw a box around the title if it is selected
    if (isSelected) g.drawRect(r.x, r.y, r.x + r.w - 1, r.y + r.h - 5);

    // calculate the starting point for each line of the title and draw each line
    title.forEach((line, i) => {
        const titleHeight = g.getFontHeight();
        const titleWidth = g.stringWidth(line);

        const x = (r.w - titleWidth) / 2;
        const y = r.y + (r.h - titleHeight) / (title.length * 2) + i * titleHeight;

        g.drawString(line, x, y);
    });
}

/**
 * 
 * @param {rect} r 
 * @param {checkListItem} itm
 * @param {{ x: number; y: number; }} pad
 * @param {number} checkBoxWidth
 * @param {string} color
 * @param {boolean} isHome
 * @description
 * Draws the text of the given item in the given rectangle
 */
function drawText(r, itm, pad, checkBoxWidth, color, isHome) {
    g.setColor(color);

    // draw the task text
    g.setFontVector(isHome ? 19 : 17);
    const fontH = g.getFontHeight();
    ellipsis(itm.n, 2, r.w - checkBoxWidth - pad.x).forEach((line, i) => {
        const width = g.stringWidth(line);
        const y = r.y + pad.y + (i * fontH) + (i * pad.y) + pad.y;
        const x = isHome ?
            (r.w - width + checkBoxWidth) / 2 + pad.x
            :
            r.x + checkBoxWidth + (pad.x * 4);

        g.drawString(line, x, y)
    });
}

/**
* @param {rect} r
 * @param {checkListItem} itm
 * @param {{ x: number; y: number; }} pad
 * @param {number} checkBoxWidth
 * @param {ReturnType<calcItemStatus>} status
 * @description
 * Draws the checkbox of the given item in the given rectangle
 */
function drawCheckBox(r, itm, pad, checkBoxWidth, status) {
    // Draw the checkbox at left
    g.drawRect(r.x, r.y, r.x + checkBoxWidth, r.y + r.h - 5);
    const centerX = w => (r.x + checkBoxWidth - w) / 2;

    // Fill the checkbox based on the completion status
    if (typeof itm.d === 'number' && itm.d) {
        g.setFontVector(41);
        const fontH = g.getFontHeight();
        const text = "X";
        const w = g.stringWidth(text);
        g.drawString(text,
            centerX(w) + (pad.x * 2),
            r.y + (r.h - fontH) / 2
        );
    } else if (typeof itm.d === 'object') {
        g.setFontVector(16);
        const fontH = g.getFontHeight();

        const w1 = g.stringWidth(status.done);
        g.drawString(status.done,
            centerX(w1) + pad.x,
            r.y + (pad.y * 2) + 1
        );

        const str2 = '--'
        const w2 = g.stringWidth(str2);
        g.drawString(str2,
            centerX(w2) + pad.x,
            r.y + (r.h - fontH) / 2
        );


        const w3 = g.stringWidth(status.total);
        g.drawString(status.total,
            centerX(w3)  + pad.x,
            r.y + (fontH * 2) - 1
        );
    }
}
