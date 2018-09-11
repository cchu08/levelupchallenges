export const ang = (n: number) => {
    const zeroToNineteen = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
    ];

    const tens = [
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

    const ang19 = (n: number): string => {
        return zeroToNineteen[n];
    }

    const ang99 = (n: number): string => {
        return n%10 === 0 ? tens[ n / 10 ] : `${tens[ Math.floor(n/10) ]} ${ang19(n%10)}`;
    }

    const ang999 = (n: number): string => {

        if (n % 100 === 0) {
            return `${ang19(n/100)} hundred`
        }
        return `${ang19(Math.floor(n/100))} hundred ${ang99(n%100)}`
    }

    const angBig = (n: number): string => {
        if (n % 1000 === 0) return `${ang19(n/1000)} thousand`

        return `${ang(Math.floor(n/1000))} thousand ${ang(n%1000)}`;
    }

    if (n <= 19) return ang19(n);

    if (n <= 99) return ang99(n);

    if (n <= 999) return ang999(n);

    return angBig(n);

};
