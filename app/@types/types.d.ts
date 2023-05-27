type State = {
    screen: 'home' | str;
    navHistory: ('home' | str)[];
    homeScreen: str[];
    listItemRef: {
        [key: str]: checkListItem;
    };
}

type checkListItem = {
    /** Name */
    n: string;
    /** ID */
    id: string;
} & ({
    /** (undefined | 0) === "item" */
    t: 0;
    /** Not-Done = 0, Done = 1 */
    d: 0 | 1;
} | {
    /** 1 = "routine" */
    t: 1;
    /** Child ids */
    c: string[];
} | {
    /** 1 = "checklist" */
    t: 2;
    /** Child ids */
    c: string[];
});

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