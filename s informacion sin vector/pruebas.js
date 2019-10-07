function vectorBinario(array, item) {
    var min = 0;
    var max = array.length - 1;

    while (min <= max) {

        var med = Math.floor((min + max) / 2);
        var guess = array[med];

        if (guess === item) {
            return med;
        }
        if (guess > item) {
            max = med - 1;
        } else {
            min = med + 1;
        }

    }
    return -1;

}
console.log(vectorBinario([1, 2, 3, 4, 6, 8, 9], 8));