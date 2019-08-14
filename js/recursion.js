function factorial(n) {
    let f = 1;

    for (let index = 1; index <= n; index++) {
        f *= index;
    }

    return f;
}


function factorialRecursion(n) {
    if (n == 0)
        return 1;
    else {``
        return n * factorialRecursion(n - 1);
    }
}