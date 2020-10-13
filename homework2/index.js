// conversion from F to C

const conversionfc = (f) => {

    return (f - 32) / 1.8 ;

}

let presmetajc = conversionfc(42);
console.log(presmetajc);



// conversion from C to F

const conversioncf = (c) => {

    return (c * 1.8) + 32;

}

let presmetajf = conversioncf(123);
console.log(presmetajf);

// conversion km - mi

const conversionkm = (km) => {

    return km / 1.6;

}

let presmetajm = conversionkm(20);
console.log(presmetajm);

// conversion mi - km

const conversionmk = (mi) => {

    return mi * 1.6;

}

let presmetajkm = conversionmk(20);
console.log(presmetajkm);

// conversion kg - lb (pounds)

const conversionKg = (kg) => {

    return kg / 0.45;

}

let presmetajKg = conversionKg(20);
console.log(presmetajKg);

// conversion lbs - kg

const conversionLbs = (lbs) => {

    return lbs * 0.45;

}

let presmetajLbs = conversionLbs(20);
console.log(presmetajLbs);

// conversion l - galon

const conversionL = (l) => {

    return l * 0.26;

}

let presmetajL = conversionL(20);
console.log(presmetajL);

// conversion galon - l

const conversionG = (g) => {

    return g * 3.78;

}

let presmetajG = conversionG(20);
console.log(presmetajG);


// TODO: what is the difference between a fat arrow function and a regular function in JS
// Постојат повеќе разлики помеѓу regular & fat arrow functions:
//  - fat arrow се поедноставни, "почисти" и покомпактни за пишување и разбирање.
//  - fat arrow имаат различно значење за keyword "this": 
//      * во fat arrow, this се однесува на контекстот од опкружувачкиот код, тие немаат свое предефинирано this
//      * во regular function this е предефинирано и се однесува на одреден или глобален објект (window object) 
//
