console.log('This is from bamazonCustomer.js');

const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  // connection.query("SELECT * FROM products", function(err, res) {
  //   if (err) throw err;
  //   console.log(res);
  // });

  // Show items for sale.
	itemsForSale();

  // Prompt user to buy product.
  buyProduct();

});

function itemsForSale() {
  console.log('This is the itemsForSale function.');

	//display all of the items available for sale
	connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    console.log('These items available for sale: ' + JSON.stringify(res));
  });
}; // end of function itemsForSale

function buyProduct() {

  console.log('This is the buyProduct function.');

  inquirer
    .prompt([{
      name: "item",
      type: "input",
      message: "Please enter ID of the product you would like to buy."
    }

    ,

    {
      name: "quantity",
      type: "input",
      message: "How many units of the product would you like?"
    }]
    )
    .then(function(answer) {
      console.log('ID of the product you would like to buy answer.input: ' + answer.item);
      console.log('User would like to buy answer.quantity: ' + answer.quantity );

      // var query = "SELECT position, song, year FROM top5000 WHERE ?";
      // connection.query(query, { artist: answer.artist }, function(err, res) {
      //   for (var i = 0; i < res.length; i++) {
      //     console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
      //   }
      //   runSearch();
      // });
    });
}; // end of function buyProduct()

// function buyProduct() {
//   console.log('This is the buyProduct function.');
//   //7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
  
//   //   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
  
// if (product quantity >= answer.quantity)
//   UPDATE products SET quantity = quantity - answer.quantity;
//   console.log('User purchased product: ' + answer.product + '; quantity: ' + answer.quantity);

// else
//   console.log('Insufficient quantity!');

// } // end of buyProduct()

