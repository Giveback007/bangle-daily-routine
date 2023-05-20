function renderMenu() {
    state.screen = 'home';

    const pad = { x: 4, y: 8 }
    const list = Object.entries(state.lists);
    // @ts-ignore
    list.unshift(['', { name: 'Routines & Check Lists' }]);
    
    let selectedIndex = -1;
    const scroller = E.showScroller({
        h: 55,
        c: list.length,
        draw: (i, r) => {
            // handle the title
            if(i === 0) {
                g.setFontVector(24);
                const title = ellipsis(list[i][1].name, 2);

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

            const items = list[i][1].items.map((id) => state.listItemRef[id].d);
            // @ts-ignore
            const totalDone = items.reduce((acc, cur) => acc + cur, 0);
            const name = (totalDone ? `${totalDone}/${items.length}:` : '') + list[i][1].name;

            // change the color of the box if it is selected
            g.setColor(i === selectedIndex ? "#0080FF" : "#FFFFFF");

            // draw the checkbox & task text
            g.setFont("6x8:2");
            ellipsis(name, 2).forEach((line, i) => {
                const width = g.stringWidth(line);
                g.drawString(line,
                    (r.w - width) / 2,
                    r.y + pad.y + i * g.getFontHeight() + (i * 5)
                )
            });

            g.drawRect(r.x, r.y, r.x + r.w - 1, r.y + r.h - 5);
        },
        select: (i) => {
            if (i === 0) return;
            if (selectedIndex === i)
                return renderCheckList(list[i][0]);
                
            selectedIndex = i;
            scroller.draw();
        }
    });
}