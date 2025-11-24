function check(val) {
    if (val == null) {
        console.log(false)
        return false
    }
    const val2 = val.toString()
    const val2len = val2.length
    if (val2len <= 1) {
        console.log(true);
        return true;
    }
    for (let i = 0; i < val2len / 2 - 1; i++) {
        if (val2[i] != val2[val2len - i - 1]) {
            console.log(false)
            return false;
        }
    }
    console.log(true);
    return true;
}

check(1234)
check('abcd')
check('abcdcba')
check('a')
check('')
check(0)