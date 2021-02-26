module.exports = function toReadable(number) {

    if(!number) {
        return 'zero';
    }
    const nums = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];
    const scales = ["", "thousand", "million", "billion", "trillion"];
    let words = [];
    let word = '';
    let arr = [];
    let num = number.toString().split('').reverse().join('');
    for (let i = 0; i < num.length; i += 3) {
        arr.push(num.substr(i, 3));
    }

    for (let i = 0; i < arr.length; i++) {
        let part = arr[i].split('').map((elem) => +elem);

        if (part[1] === 1) {
            part[0] += 10;
        }

        if ((word = scales[i])) {
            words.push(word);
        }

        if ((word = nums[part[0]])) {
            words.push(word);
        }

        if ((word = tens[part[1]])) {
            words.push(word);
        }

        if ((word = nums[part[2]])) {
            words.push(word + ' hundred');
        }
    }
    return words.reverse().join(' ');
}
