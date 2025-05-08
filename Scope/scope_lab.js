// Global Scope

// var globalVar = "I'm a global variable!";
// let globalLet = "I'm also global, but scoped with let";
// const globalConst = "I'm a global constant";

// {
//     //Block Scope
//     var blockVar = "I'm a block-scoped var";
//     let blockLet = "I'm a block-scoped let";
//     const blockConst = "I'm a block-scoped const";
// }

// // Global scope
// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// //Block Scope
// //console.log(blockVar);
// //console.log(blockLet);

// function show() {
//     var functionVar = "I'm a block-scoped var";
//     let functionLet = "I'm a block-scoped let";
//     const functionConst = "I'm a block-scoped const";
// }
// show();

// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);

// PRACTICE TASK

// 1. Create one block using {} and declare variables using let, const, and var.
// 2. Then, try to reassign these variables within the curly braces {}. Check for any errors that may occur.

// 1.
{
    var practiceVar = "Practice task - var";
    let practiceLet = "Practice task - let";
    const practiceConst = "Practice task - const"; //Error: Assignment to constant variable  
    
    // 2.
    practiceVar = "Updated var";
    practiceLet = "Updated let";
    practiceConst = "Updated const";
}

// 3.
practiceVar = "Updated var - again";
practiceLet = "Updated let - again";
practiceConst = "Updated const - again";

console.log(practiceVar)
console.log(practiceLet)
console.log(practiceConst)

