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

    if (n <= 19) return ang19(n);

    if (n <= 100) return ang99(n);





};
