var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//    compainig Array with spread operators with spread operators suppose u are comapring price of two different
//sets of laptop used this spread operator to combine this array into singlke array  sorted
//use sort((a , b) => a - b)in acending order 
var priceset1 = [1200, 1500, 1100];
var priceset2 = [1000, 1300, 1600];
var combinedprices = __spreadArray(__spreadArray([], priceset1, true), priceset2, true).sort(function (a, b) { return a - b; });
console.log(combinedprices);
