type State = {
    screen: 'home' | 'checkList';
    lists: Dict<checkList>;
    listItemRef: {
        /** This is incremented for every new checkListItem */
        lastID: num;
        [key: num]: checkListItem;
    };
}