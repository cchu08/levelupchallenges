export const ang = (n: number) => {
    const nToNineTeen = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5:'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
    };

    const nTens = [
        '',
        '',
        'twenty',
        'thirty',
        'fourty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    const ang19 = (n: number) => {
        return nToNineTeen[n];
    }

    const ang99 = (n: number) => {
        return n%10 ? `${nTens[ n/10 ]} ${ang19(n%10)}` : nTens[ n / 10 ]; 
    }

    if (n <= 19) return ang19(n);

    if (n <= 100) return ang99(n);





};
