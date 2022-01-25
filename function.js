function string_length(value) {
    return value.length;
}
var count = string_length("test 1");
console.log(count);
function string_nospaces(value) {
    return value.replace(" ", "").length;
}
var mycount = string_nospaces("test 1");
console.log(mycount);
function count_both(value, spaces) {
    if (spaces) {
        return value.length;
    }
    else {
        return value.replace(" ", "").length;
    }
}
var bothCount = count_both("test 1");
console.log(bothCount);
