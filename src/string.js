/**
 * String utilities
 */

export const trim = text => {
    if (text.trim) {
        return text.trim();
    }
    return text.replace(/^\s*|\s*$/g, '');
}

export const isEmpty = (text) => trim(text) === '';

export const rgxEsc = text => {
    let chars = /[-\/\\^$*+?.()|[\]{}]/g;
    let escMatch = '\\$&';
    return String(text).replace(chars, escMatch);
}

export const matchCase = (text, caseSensitive) => {
    if (!caseSensitive) {
        return text.toLowerCase();
    }
    return text;
}

/**
 * Checks if passed data contains the searched term
 * @param  {String} term           Searched term
 * @param  {String} data           Data string
 * @param  {Boolean} exactMatch    Exact match
 * @param  {Boolean} caseSensitive Case sensitive
 * @return {Boolean}
 */
export const contains =
    (term, data, exactMatch = false, caseSensitive = false) => {
        // Improved by Cedric Wartel (cwl) automatic exact match for selects and
        // special characters are now filtered
        let regexp;
        let modifier = caseSensitive ? 'g' : 'gi';
        if (exactMatch) {
            regexp = new RegExp('(^\\s*)' + rgxEsc(term) + '(\\s*$)',
                modifier);
        } else {
            regexp = new RegExp(rgxEsc(term), modifier);
        }
        return regexp.test(data);
    }
