type checkListItem = { n: str; d: 0 | 1; id: num };
type checkList = {
    name: str;
    type: "routine" | "checklist";
    items: number[];
};