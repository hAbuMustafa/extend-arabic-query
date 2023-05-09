/**
 * Takes in a query string and returns the replaced string with better replacements
 * @param {queryText} queryText the string to be modified for further lookup
 * @returns String
 */
function extendQuery(queryText) {
  const result = queryText
    .trim() // remove terminal whitespaces
    .replace(/\s+/g, ' ') // remove all extra whitespaces
    .replace(/ـ/g, '') // remove all Arabic length extenders (Shift + ت)
    .replace(/(?:يحيى|يحى)(?![^\(\[]*[\)\]])/g, '(?:يحيى|يحي|يحى)') // the name "YAHIA" is one of the most commonly mis-written words. it has so many forms
    .replace(/(?:عبدال|عبد ال)(?![^\(\[]*[\)\]])/g, '(?:عبدال|عبد ال)') // It's also largely controversion if to add a space between the word "AL" and its preceding "ABD"
    .replace(/[ةه](?![^\(\[]*[\)\]])/g, '[ةه]') // whether to write the "coined-HAA" or "coined-TAA" is largely un understood
    .replace(/[اأإآء](?![^\(\[]*[\)\]])/g, '[اأإآءئؤ]') // The many forms of "HAMZA"s are expected to be mis-interpreted
    .replace(/ئ(?![^\(\[]*[\)\]])/g, '[اأإآءئؤيئ]') // The "HAMZA" on a "YAA" is expected to be mistaken for a "YAA" or a shortened "ALEF" or other forms of "HAMZA"s
    .replace(/ؤ(?![^\(\[]*[\)\]])/g, '[اأإآءئؤو]') // The "HAMZA" on a "WAW" is expected to be mistaken for a "WAW" or a "HAMZA" on a "WAW" or other forms of "HAMZA"s
    .replace(/و(?![^\(\[]*[\)\]])/g, '[وؤ]') // the "WAW" however is expected to be mistaken for a "HAMZA" on a "WAW"
    .replace(/[يى](?![^\(\[]*[\)\]])/g, '[يئى]') // "YAA" or shortened "ALEF" are expected to be mistaken for either of both, or even a "HAMZA" on a "YAA"
    .replace(/[زذ](?![^\(\[]*[\)\]])/g, '[زذ]') // Egyptians specifically are expected to mis-use both charactes and they might use them interchangebly uncounciously
    .replace(/[ثس](?![^\(\[]*[\)\]])/g, '[ثس]'); // Egyptians specifically are expected to mis-use both charactes and they might use them interchangebly uncounciously
  return result;
}

module.exports = extendQuery;
