/** @type {{ [key: str]: [bol, str][] }} */
const tasks = {
    Morning: new Array(8).fill(null).map((_, i) => [false, `Task ${i + 1}`]),
    Evening: [ ],
    "Co Working Preparation Stuff 12345 More": new Array(12).fill(null).map((_, i) => [false, `This is a task, withalsl ${i + 1}`])
}