/**
 * Takes in a query string and returns the replaced string with better replacements
 * @param {string} queryText the string to be modified for further lookup
 * @returns String
 */
export function getRegexString(queryText: string): string {
  const result = queryText
    .trim() // remove terminal whitespaces
    .replace(/\s+/g, ' ') // remove all extra whitespaces
    .replace(/ـ/g, '') // remove all Arabic length extenders (Shift + ت)
    .replace(/(?:يحيى|يحى)(?![^\(\[]*[\)\]])/g, '(?:يحيى|يحي|يحى)') // the name "YAHIA" is one of the most commonly mis-written words. it has so many forms
    .replace(/(?:عبدال|عبد ال)(?![^\(\[]*[\)\]])/g, '(?:عبدال|عبد ال)') // It's also largely controversion if to add a space between the word "AL" and its preceding "ABD"
    .replace(
      /(?:[اأإآ]بو[ء-ي]|[اأإآ]بو [ء-ي])(?![^\(\[]*[\)\]])(?![^\(\[]*[\)\]])/g,
      '(?:[اأإآ]بو[ء-ي]|[اأإآ]بو [ء-ي])',
    ) // It's also largely controversion if to add a space between names and their preceding "ABO"
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

/**
 * Takes the text to be converted to a RegExp object and returns the RegExp object after replacing the string with the regex patterns
 * @param str The RegEx string to be converted to a RegExp object
 * @param flags all regex flags to consider (optional)
 * @returns {RegExp}
 */
export function regexify(str: string, flags?: string): RegExp {
  const regex = new RegExp(getRegexString(str), flags);

  return regex;
}

/**
 * Takes in at least 2 strings, and checks to see if they are both phonetically equivalent.
 * @param {string} str1 The first string to be compared
 * @param {string[]} strs Other strings to be compared
 * @returns {boolean}
 */
export function compare(str1: string, ...strs: string[]): boolean {
  const regex = regexify(str1);
  return strs.every((str) => regex.test(str));
}

// DEPRECATION ZONE

/**
 * Takes in a text string and converts it to an expanded strings that can be used in a RegEx to check for alike strings
 * @deprecated since version 0.3.0.
 * Use `getRegexString` instead, or do the comparison directly using `compare`.
 * @param {string} queryText the string you want to expand to a RegEx string
 * @returns {string}
 */
export function extendQuery(queryText: string) {
  return getRegexString(queryText);
}
