module.exports = function toReadable(number) {
    const dict = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    if (number === 0) {
        return dict[number];
    }

    const strNumber = number.toString();
    let result = "";

    if (number > 99 && number < 1000) {
        result = dict[strNumber[0]] + " hundred ";
    }

    const strLastTwoDigits = strNumber.slice(-2);
    const lastTwoDigits = parseInt(strLastTwoDigits);

    if (lastTwoDigits < 20) {
        if (lastTwoDigits != 0) {
            result += dict[lastTwoDigits];
        }
    } else {
        const lastDigit = parseInt(strLastTwoDigits[1]);
        result += dict[lastTwoDigits - lastDigit];

        if (lastDigit != 0) {
            result += " " + dict[lastDigit];
        }
    }
    return result.trim();
};
