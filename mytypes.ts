let myvariable:boolean = true;
console.log("My boolean value is: "+myvariable);

let num:number = 5;
console.log("My number value is: "+num);

let message:string = "Hello World";
console.log("My string value is: "+message);

let myarray:number[]= [1,2,3];
for(let i=0;i<myarray.length;i++){
    console.log("Value of number "+(i+1)+" is: "+myarray[i]);
}

let notSure:any = 5;
console.log("unkown data value is: "+notSure)

let myData:any[] = [3,"jhfsjdf", true];
for(let i=0;i<myData.length;i++){
    console.log("Value of number "+(i+1)+" is: "+myData[i]);
}