/** Base Conversion functions for the Calculators page */

console.log(fromDecimal(5, 2)); // returns 101
console.log(fromDecimal(9, 8)); // returns 11
console.log(fromDecimal(10, 16)); // returns 'A'

/**
 * Converts a decimal number to a given base representation.
 * @param {number} newBase - the new base
 * @param {number} dec - a base 10 number
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
 * @param {number} bin - a binary number
 * @param {number} newBase - the new base
 * @return {number} the converted number
 */ 
function fromBinary(bin, newBase) {
    if(newBase === 10) {
        return binToDec(bin);
    }
    else if(newBase === 16) {
        return binToOther(bin, 4);
    }
    return binToOther(bin, 3);
}

function binToDec(bin) {
    var len = bin.length();
    var dec = 0;
}

function binToOther(bin, n) {
    
}

function letterMap(num) {
    switch(num) {
        case 10: return "A";
        case 11: return "B";
        case 12: return "C";
        case 13: return "D";
        case 14: return "E";
        case 15: return "F";
        default: return num;
    }
}