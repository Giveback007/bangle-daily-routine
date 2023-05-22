type checkListItem = {
    /** Name */
    n: str;
    /** Done */
    d: 0 | 1 | number[];
    /** ID */
    id: num,
    /** Type: if `undefined` t = `"item"` */
    t?: 0 | 1 | 2;
};

type rect = {
    x: number;
    y: number;
    w: number;
    h: number;
};

type checkListItemType = {
    0: 'ITEM',
    1: 'ROUTINE',
    2: 'CHECKLIST',
    'ITEM': 0,
    'ROUTINE': 1,
    'CHECKLIST': 2
};