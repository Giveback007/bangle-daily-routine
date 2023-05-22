type State = {
    screen: 'home' | num;
    navHistory: ('home' | num)[];
    homeScreen: num[];
    listItemRef: {
        /** This is incremented for every new checkListItem */
        lastID: num;
        [key: num]: checkListItem;
    };
}