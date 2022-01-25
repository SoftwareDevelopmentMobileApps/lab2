function string_length(value:string):number{
    return value.length;
}
let count:number = string_length("test 1");
console.log(count);

function string_nospaces(value:string):number{
    return value.replace(" ","").length;
}
let mycount:number = string_nospaces("test 1");
console.log(mycount);

function count_both(value:string, spaces?:boolean):number{
    if(spaces){
        return value.length;
    } else {
        return value.replace(" ","").length;
    }
}
let bothCount = count_both("test 1");
console.log(bothCount);