const log = console.log;

/** @param {number} ms */
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @template T
 * @param {T} obj
 * @returns {T}
 */
const clone = obj => JSON.parse(JSON.stringify(obj));