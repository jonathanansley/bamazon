DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id         INT         NOT NULL AUTO_INCREMENT COMMENT 'unique id for each product',
  product_name    VARCHAR(50)  COMMENT 'Name of product',
  department_name VARCHAR(50)  COMMENT 'product category',
  price           DECIMAL(5,2)  COMMENT 'cost to customer',
  stock_quantity  INT default 0 COMMENT 'how much of the product is available in stores',
  PRIMARY KEY (item_id)
);

INSERT INTO products ( product_name, department_name, price, stock_quantity )
VALUES
    ("hair brush", "health and beauty aid", 5.98, 22),
    ("toothpaste", "health and beauty aid", 2.99, 100),
    ("can of baked beans", "grocery", .95, 55),
    ("mango", "grocery fresh", 1.33, 10),
    ("flax seed", "grocery", 2.99, 40),
    ("dish soap", "kitchen", 3.02, 10),
    ("dish towel", "textile", 9.99, 6),
    ("bath towel", "textile", 13.88, 8),
    ("bath soap", "health and beauty aid", 3.99, 33),
    ("flashlight", "tools", 12.32, 29),
    ("hair dryer", "health and beauty aid", 45.93, 11);

SELECT * FROM products;
