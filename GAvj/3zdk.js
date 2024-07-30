function zbroji(a, b) {
    return function (c) {
        return a + b + c
    }
}

console.log(zbroji(2, 3)(4))