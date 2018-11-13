
//requires all the pacakges
var mysql = require("mysql");
var inquirer = require("inquirer");
//this one is for show the data as table in the terminal
const cTable = require('console.table');

var connection = mysql.createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your own username
  user: "",
  // Your own password
  password: "",
  database: "bamazon_db"
});
connection.connect(function(err) {
  if (err) throw err;
  // run the showProduct function after the connection is made
showProduct();
});

//Make a function that list all the products
function showProduct() {
  //To connect to the database and to show the id, product and price in the table
  connection.query("SELECT item_id,product_name,price FROM products", function (err, results) {
    if (err) throw err;
   console.log('\n Welcome! here is the avaiable items in our store\n')
    console.table(results);
    //To run the shopping function (note:must put inside the query otherwise it may run before list shown)
    shopping();
  })
}
//create a function for user prompting
function shopping(){
   inquirer.prompt([
     {
        type: 'input',
        name: 'idChoice',
        message:"Please enter the id for the item you would like to buy",
        validate: function(value) {
          //if the input is a number it eqals false, and set it within the range of the rows in database's table 
          if (isNaN(value) === false && value>0 && value<12) {
            return true;//the input is a number and the nubmer is within the products' id range
          }
          return false;
        }
      },
      {
        name:'quantity',
        type:'input',
        message:"how many do you want to buy?",
        validate: function(value) {
          if (isNaN(value) === false && value>0) {
            return true;//to declare it's a number
          }
          return false;
        }
      }
    ]).then(function(answer){
      quantityCheck(answer.idChoice,answer.quantity)


 })

}
function quantityCheck(idInput,quantityInput){
  //connect the database to check the quantity of chosen item with the input id 
  connection.query('SELECT stock_quantity, price FROM products WHERE item_id=?',[idInput], function(err, result){
    if (err) {
      console.log('the error in quantityCheck is: '+err);
    };
    if (quantityInput<= result[0].stock_quantity){
      enoughStock(idInput,quantityInput,result[0].stock_quantity,result[0].price)
    } else {
      console.log("\n Sorry Insufficient quantity! Return the product list\n")
      //may consider add a conformation to ask user to return to the list or exist
      showProduct()
    }
  })//close of the stock query
}

function enoughStock(idInput,inputQuantity,stock,price){
  //update the quantity in the database
  connection.query('UPDATE products SET stock_quantity = ? WHERE item_id = ?', [(stock - inputQuantity), idInput],function(err,results){
    if (err) {
      console.log('the error in enoughStock is "'+err);};
    console.log("\nTotal cost:$ "+(inputQuantity*price).toFixed(2)+"\n Transaction compelte!");
    // If got time try to make a comfirmation function to ask user to make another shopping or exist
  })
}
