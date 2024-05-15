// leet code
// 1. Two Sum
// Input nums = [2,7,11,15], target = 9
// Output [0,1]
// explanation: nums[0] + nums[1] == 9, so return [0,1]
//  let nums = [2,7,11,15];
//  let target = 9;

//  let twoSum1 = function(nums, target){
//     //Brutce force
//     for (let i=0; i<nums.length;i++){
//         for (let j=i+1;j<nums.length;j++){
//             if(nums[i] + nums[j] ==target)
//             return [i,j];
//         }
//     }
// }

// console.log(twoSum(nums, target));

// or 

// var twoSum = function(nums, target){
//     let map = new Map();
//     for (let i=0; i<nums.length;i++){
//         let complement = target - nums[i];
//         if(map.has(complement)){
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
// }

// binary string
for(let i=1; i<=32; i++){
    count+= n&1;
    n=n>>1;

}
return count



//Class is a template of properties
// andmethod

class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    login(){
        console.log('Hi',this.name)
        console.log('you are logged in')
    }
    logout(){
        
        console.log('you are logged out')
    }

    
}

let userone = new User('mario', 25);

// inheritance // dereived class
class PaidUser extends User{
    constructor(name,age,balance){
        super(name,age);
        this.balance = balance;
    }
    message(){
        console.log("you have 100gb frre stack")
    }
    // method overriding
    login(){
        
        console.log('you are logged in')
        return this;
    }
}

let PaidUser1 = new PaidUser('ragul',25)
PaidUser1.login();

//method ch
PaidUser1.login().message();

// Asynchronus
console.log('hello')
function sync(){
console.log('step1')
console.log('step2')
console.log('step3')
}

sync();

setTimeout (() => console.log('step1'),4000);
setTimeout (() => console.log('step2'),2000);
setTimeout (() => console.log('step3'),1000);

console.log('bye')

for (let i=0; i<5; i++){
    console.log(i);
}

setInterval( ()=> console.log('hi...'), 2000)
