function arrayPrimes(total: number) {

    let primeArr: number[] = [];
    for (let i = 2; i <= total; i++) {
        let isNotPrime: boolean = false;
        for (let j = 2; j <= (i - 1); j++) {
            if (i % j === 0) {
                isNotPrime = true
                break;
            }
        }
        if (isNotPrime == false) {
            primeArr.push(i);
        }
    }
    return primeArr.toString();
}


export default arrayPrimes;