/** Base Conversion functions for the Calculators page */

/**
 * Converts a decimal number to a given base representation.
 * @param {number} dec - a base 10 number
 * @param {number} newBase - the new base
 * @return {number} the converted number
 */ 
function fromDecimal(dec, newBase) {
    var digits = "";
    while(dec > 0) {
        digits = letterMap(dec % newBase) + digits;
        dec = Math.floor(dec/newBase);
    }
    return digits;
}

/**
 * Converts a binary number to a given base representation.
 * @param {string} bin - a binary number
 * @param {number} newBase - the new base
 * @return {number} the converted number
 */ 
function fromBinary(bin, newBase) {
    return fromDecimal(parseInt(bin, 2), newBase);
}

/**
 * Converts an octal number to a given base representation.
 * @param {string} oct - an octal number
 * @param {number} newBase - the new base
 * @return {number} the converted number
 */
function fromOctal(oct, newBase) {
    return fromDecimal(parseInt(oct, 8), newBase);
}

/**
 * Converts an hexacedimal number to a given base representation.
 * @param {string} hex - an octal number
 * @param {number} newBase - the new base
 * @return {number} the converted number
 */
function fromHexadecimal(hex, newBase) {
    return fromDecimal(parseInt(hex, 16), newBase);
}

/**
 * Modifies incoming integers to represent the correct digit in a
 * converted number, supporting bases 2 to 26, returning letters
 * where appropriate.
 * @param {number} num - a decimal number
 * @return {string} the original number or a mapped base 16 letter
 */
function letterMap(num) {
    if(num > 26) {
        return "Input Error";
    }
    if(num < 10) {
        return num;
    }
    
    return String.fromCharCode('A'.charCodeAt() + num - 10);
}