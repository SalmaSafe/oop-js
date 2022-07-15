// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"
function calculateFruitCost(fruitName,quantity){
const fruit =[{name:"Orange", price:30.00},{name:"Apple",price:25}]
let NeededItem=fruit.find(item =>item.name===fruitName)
let itemPrice=NeededItem.price
console.log(`${quantity} ${fruitName} for ${itemPrice * quantity} shillings`)
}
calculateFruitCost("Apple",42)


// for(price in fruit){
//     console.log(2 * price)
// }

/*Write a class KioskCalc that has the following fruitsPriceList object.
this.fruitsPriceList = { "orange": 30, "mango": 15, "avocado": 40 }; 
and takes two parameters (fruit, quantity) when initialized i.e. 
var kioskCalc = new KioskCalc(“orange”, 2);
Thereafter, it allows one to calculate the total cost of the fruit by accessing the 
getTotalCost( ) method.*/

class kioskCalc{
    constructor(fruit, quantity){
        this.fruit = fruit
        this.quantity=quantity
        this.fruitsPriceList={"orange": 30, "mango": 15, "avocado": 40}
    
        this.getTotalCost=function(){
            // var itemPrice=this.fruit*this.quantity
            return `${quantity} ${fruit} for ${quantity*this.fruitsPriceList.orange} shillings`
        }
    }
}
let orangePurchase = new kioskCalc("orange",3)
console.log(orangePurchase.getTotalCost())

