var current = 42000;
var wished = 50000;

function calPayWished(current, wished) {
    var ouput = {};
    ouput.current = current;
    ouput.wished = wished;
    ouput.augmentation = {};

    ouput.poucentage = getNumberWith2decimals(((wished - current) / current) * 100);
    ouput.augmentation.year = getNumberWith2decimals(wished - current);
    ouput.augmentation.month = getNumberWith2decimals(ouput.augmentation.year / 12);

    return ouput;
}

function calPayWishedInPourcentage(current, wishedPourcentage) {

    var ouput = {};

    ouput = current + (current / 100) * wishedPourcentage;

    return getNumberWith2decimals(ouput);
}

function getNumberWith2decimals(val) {
    var output = parseFloat((val).toFixed(2));

    return output;
}
//console.table((calPayWished(current, wished)))
// console.log('1 % plus')
// console.log((calPayWished(current, calPayWishedInPourcentage(current, 1))))
// console.log('10 % plus')
// console.log((calPayWished(current, calPayWishedInPourcentage(current, 10))))
// console.log('12 % plus')
// console.log((calPayWished(current, calPayWishedInPourcentage(current, 12))))
// console.log('15 % plus')
// console.log((calPayWished(current, calPayWishedInPourcentage(current, 15))))

// var salaireNew = 2779.97;
// var salaireOld = 2623.83;

// ((salaireNew - salaireOld) / salaireOld) * 100;

var current = 50000;
var wished = 63000;

console.log((calPayWished(current, wished)))
