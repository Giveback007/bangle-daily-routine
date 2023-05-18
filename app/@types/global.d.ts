/// <reference types="espruino" />

declare module 'heatshrink';

declare var g: Graphics & {
    setFontAlign(alignX: number, alignY: number): void;
    setFont(font: string, size?: number): typeof g;
    flip(): void;
    setBgColor(color: string): typeof g;
    clearRect(x1: number, y1: number, x2: number, y2: number): typeof g;
    drawString(str: string, x: number, y: number): typeof g;
    theme: {
        /** foreground colour */
        fg: number,
        /** background colour */
        bg: number,
        /** accented foreground colour */
        fg2: number,
        /** accented background colour */
        bg2: number,
        /** highlighted foreground colour */
        fgH: number,
        /** highlighted background colour */
        bgH: number,
        /** Is background dark (e.g. foreground should be a light colour) */
        dark: boolean,
    }
};

namespace E {
    export function showScroller(options: {
      h: number,
      c: number,
      draw: (idx: number, rect: { x: number, y: number, w: number, h: number }) => void,
      select: (idx: number, touch: { x: number, y: number }) => void,
      back?: () => void,
      remove?: () => void,
    }): void;
}

/** https://www.espruino.com/ReferenceBANGLEJS2#Bangle */
declare var Bangle: any;
