# bamazon
MySQL demonstration of store





# Node.js & MySQL

## Overview

Amazon-like storefront with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory.

done
Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.



## Submission Guide

Make sure you use the normal GitHub. Because this is a CLI App
include screenshots, a gif, and/or a video showing us that you got the app working with no bugs. You can include these screenshots or a link to a video in a `README.md` file.

* Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works. 

* Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

If you haven't written a markdown file yet, [click here for a rundown](https://guides.github.com/features/mastering-markdown/), or just take a look at the raw file of these instructions.



## Instructions

### Challenge #1: Customer View (Minimum Requirement)

done
1. Create a MySQL Database called `bamazon`.

done
2. Then create a Table inside of that database called `products`.

done
3. The products table should have each of the following columns:
   * item_id (unique id for each product)
   * product_name (Name of product)
   * department_name
   * price (cost to customer)
   * stock_quantity (how much of the product is available in stores)

done
4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).



done - needs improvement
5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.




6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.



8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.





- - -

sample md

### Challenge #3: Supervisor View (Final Level)

alled `departments`. Your

   * department_id

   * department_name

   * over_head_costs (A














### Overview

Restaurant reservations

* Check out [this demo version of the site](https://friend-finder.herokuapp.com/).

  ```
  Team members
    - Jonathan Ansley
  ```

### Instructions

1. The restaurant has 5 tables. Fill the first five.

2. After the five tables are fille, new reservations will be added to the wait list.