// let numVal : string = 'one';
// //numVal = 8;//error as its an integer

// let anyVar:any = undefined;//u can use integer, null, string
// let unknownVar:unknown = null;//u can use integer, null, string

// function getName(name:any){
//     const val1 : number = name;
//     const val2:string = name;//since it is any I can equate it to string or number
// }

// function getCity(name:unknown){
//     //const val3 : number = name;
//     //const val4:string = name;//for unknown its different the type has to be same
//     const val5:unknown = name;
// }

// function getN(name:string){

// }
// getN('Sagun');
// //getN(2);//error as parameter has to be string


// //TYLE ALIASES
// type empName = {
//     name: string,
//     employeeId: number
// }

// function getEmployeeName(name : empName){
//     console.log(name);
// }

// getEmployeeName({name:"", employeeId : 2});

// //INTERFACES
// interface emplName = {
//     name: string,
//     employeeId: number
// }

// interface getEmplName{
    
// }

// getEmplName({name:"", employeeId : 2});


// //symbol 
// let a = Symbol('a');
// let b = Symbol('a');
// //but a and b are uniques
// //console.log(a===b);