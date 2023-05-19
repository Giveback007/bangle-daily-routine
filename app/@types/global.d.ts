/// <reference types="espruino" />

type str = string;
type bol = boolean;
type num = number;

declare module 'heatshrink';

declare var g: Graphics & {
    setFontAlign(alignX: number, alignY: number): void;
    setFont(font: string, size?: number): typeof g;
    flip(): void;
    setBgColor(color: string): typeof g;
    clearRect(x1: number, y1: number, x2: number, y2: number): typeof g;
    drawString(str: string, x: number, y: number): typeof g;
    getFontHeight(): number;
    wrapString(str: string, width: number): string[];

    theme: {
        /** foreground color */
        fg: number,
        /** background color */
        bg: number,
        /** accented foreground color */
        fg2: number,
        /** accented background color */
        bg2: number,
        /** highlighted foreground color */
        fgH: number,
        /** highlighted background color */
        bgH: number,
        /** Is background dark (e.g. foreground should be a light color) */
        dark: boolean,
    }
};

namespace E {
    /** To clear/remove the scroller call E.showScroller() */
    function showScroller(): void;
    function showScroller(options: {
      h: number,
      c: number,
      draw: (idx: number, rect: { x: number, y: number, w: number, h: number }) => void,
      select: (idx: number, touch: { x: number, y: number }) => void,
      back?: () => void,
      remove?: () => void,
    }): {
        draw();
        drawItem(idx: number);
    };

    function showMessage(msg: string, title?: string): void;
}

/** https://www.espruino.com/ReferenceBANGLEJS2#Bangle */
declare var Bangle: any;
