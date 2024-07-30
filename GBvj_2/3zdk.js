function sum(a) {
    return (b) => {
        if (b == undefined) //ispituje predzadnji korak => (8)()
            return a > 10 ? a : 0
        else if (a < 10) //ispituje kada je prvi clan manji od 10 => (1)
            return sum(b)
        else if (b > 10) //ispituje kada je drugi član veći od 10  =>(1)(20)
            return sum(a + b)
        else
            return sum(a)
    }
}

console.log(sum(1)(2)(2)(3)(4)(8)())