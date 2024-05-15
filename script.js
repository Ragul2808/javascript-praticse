// // // //let score = 0// intialization
// // // score = 100; //assignment
// // // //console.log("score is" + score );

// // // // Operators

// // // //promt
// // // //let a = prompt("enter a number")
// // // //console.log("Result is " + (Number(a) + 10));

// // // let name = "ragul";
// // // let randomIndex = Math.floor(Math.random() * name.length)
// // // // let randomNumber = name[randomIndex];
// // // // console.log(randomNumber)

// // // // let first = "ragul";
// // // // let last = "venba";
// // // // let city = "bengaluru";



// // // // let msg = `My name is ${first} loves     ${last} and Lives in ${city}`;
// // // // msg = msg.trim();
// // // // msg=msg.toUpperCase();

// // // // console.log(msg);

// // // // array method
// // // let arr = [1, 2, 4, 5];
// // // arr.push[6]
// // // console.log(arr)

// // // // exer
// // //  Arr = [5, 8, 10, 7, 9, 11];
// // //  Arr.splice(3,3,  '17', '19', '111');
// // //  Arr.unshift(1000)
// // //  Arr.splice(Arr.length -1, 0, 200);
// // //  Arr.splice(8,0, 1000)
// // //  let MiddleIndex = Math.floor(Arr.length /2)
// // //  Arr.splice(MiddleIndex, 0, 0);
// // // console.log(Arr)


// // // if else 
// // let pwd_correct = true;
// //  if (pwd_correct){
// //     console.log("welocome to ragul home")
// //  } else {
// //     console.log("not ragu home")
// //  }
// //  console.log("bye")

 
// //  let eligible = 18;
// //  if (eligible < 18) {
// //      console.log("You are less than eligible age for vote");
// //  } else if (eligible == 18) {
// //      console.log("You are just eligible for vote");
// //  } else { 
// //      console.log("You are eligible for vote");
// //  }
// //  // max of two numbers
// //   let a =20; b=30;
// //   max = a>b ? a:b;
// //   console.log(max)

// // // objects
// // //  let item ={
// // //     name: "phone",
// // //     price: 25000,
// // //     quantity:1,
// // //     dimensions:{
// // //         length:5,
// // //         width:3,
// // //         height:8

// // //     }

// // // } 
// // //  console.log(item)
// // //   // accesing object
// // //   //dot notation
// // //     console.log(item.name)
// // //     console.log(item.price)
// // //  item = {
// // //     name: "phone",
// // //     price: 25000,
// // //     quantity:1,
// // //     buy: function(){
// // //         console.log('item added to cart')
// // //     },
// // //     addToList(){
// // //         console.log('item added to list')
// // //     }
// // // }
// // // item.buy()
// // // item.addToList()
  
// // // loop

// // for(let i=1;i<=5;i++){
// //     console.log('hello')
// // }
// // let i
// // for(i=1;i<=5;i++){
// //     console.log(i)  }
// //     console.log('outside loop',i)

// // for (i=10;i>=1;i--){
// //     console.log(i)
// // }

// // i = 10;
// // while(i>=1){
// //     console.log(i)
// //     i--
// // }

// // i = 10;
// // do{
// //     console.log(i)
// //     i--;
// // }while(i>=1)

// // // break - stops the loop

// // // while(true){
// // //     let num = Number(prompt("enter a number"))
// // //     if(!isNaN(num))
// // //         break;
    
// // // }

// // // console.log('continue demo')
// // // for(i=1;i<=10;i++){
// // //     if(i%3==0)
// // //     continue
// // //     console.log(i)

// // // }

// // // function
// // function isPOstive(){// parameter
// //     return isPOstive < 0;
// // }
// // console.log(isPOstive(-4))

// // function greet(){
// //     console.log( 'hello' + 'suhu') 
// // }
// // greet()

// function findproduct(a,b){
//     return a*b
// }

// console.log(findproduct(4 , 9))

// // call back
// function greetConsole(name){
    
//     console.log("hello" + name);
// }

// function greetHeading(name){
//     const heading = document.querySelector('h1')
//     heading.innerHTML = "hello" + name;
// }

// function greet(callback){
//     console.log(callback)
//     callback('ram')
// }
// greet(greetConsole)
// //greet(greetHeading)

// // for each

// arr = ['a','b','c','d']
// arr.forEach(print)

// function print(val){
//     console.log(val)
// }

// let arr1 = ['ECE','EEE', 'CSE', 'MECH']

// arr1.forEach(val => {
//     const opt = document.createElement('option');
//     opt.textContent = val;
//     opt.value = val;
//     document.querySelector('#branch').appendChild(opt);

// })

// // map - execute callback function on each element of array and return new array
// // element and return new array
// let priceUSD = [10,20,30,40];
// let priceInr = priceUSD.map(val => val * 75);
// console.log(priceInr)

// const input = [ // array of objects
//     {name: 'ragul', age: 25},
//     {name: 'venba', age: 24},
//     {name: 'suhu', age: 22}
// ]
// const ages = input.map(x => x.age)
// console.log(ages)
// const names = input.map(val => val.name)
// console.log(names)

// console.clear()
// // filter - return new array with elements that pass the condition
// // return new array with elements that pass the condition

// let cost = [10,20,30,40,50,60,70,80,90]
// lessThan100=cost.filter(val => val< 100)
// console.log(lessThan100)

// //reduce - executes a reducer function on each element of the array

// const cost1 = [10,20,30,40,50,60,70,80,90]
// let cartTotal = cost1.reduce((total, el) => total + el, +1000);
// console.log(cartTotal)

// // returning function - higher order function
//  function outer(){
//     let outerVaribale ="Bread"
//     function inner(name){
//         let innerVariable = "butter"
//         console.log('innerVariable', innerVariable)
//         console.log('outerVariable', outerVaribale)
//         console.log('hello,', name);
//     }
//     return inner

// }
// let call1 = outer()
// call1('ram')

// function makeAdder(x){
//     return function(y){
//         return x+y
//     }
// }
// let add5 = makeAdder(5)
// let add10 = makeAdder(10)
// console.log(add5(2))
// console.log(add10(50))
// console.clear()


// //set object - collection of unique values
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mySet = new Set(arr2)

// console.log(arr2)
// console.log(mySet) 

//map
// key-value pair
// a key in the map can be of any type

// let myMap = new Map()
// myMap.set(1, "one")
// myMap.set(2, "two")
// console.log(myMap)
// console.log(myMap.size)
// console.log(myMap.has('c'))
// myMap.set(3, "three")

// for (let i of myMap){
//     console.log(i)
// }
 
// for (let k of myMap.keys()){
//     console.log(k)
// }

// myMap.forEach((v,k) => {
//     console.log('value',v,'key',k)
// })


// error handling
//exception handling 

try{
    num = promt("enter a number")
    if(num==='')
      throw 'cannmot empty'
    if(isNaN(num))
        throw 'not a number'
    console.log(num**2)
}
catch(err){
    console.log(err)
}
finally{
    console.log('finally')
}