
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT(10) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(225) NOT NULL,
department_name VARCHAR(225) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY(item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity )
-- First row--
VALUES("PlayMonster Stinky Pig","Baby", 8.99,2166),
-- Second row--
 ('Apple iPhone X, Fully Unlocked 5.8", 256 GB -- Silver',"Cell Phones & Accessories", 750 , 500),
-- Third row--
 ('Samsung Galaxy Note 9 Factory Unlocked Phone with 6.4" Screen and 512GB (U.S. Warranty), Midnight Black',"Cell Phones & Accessories", 1317.61,50),
-- Fourth row--
 ("Wrigley's Chewing Gum Assortment 40 Packs","Grocery & Gourmet Food", 14.32,2866),
-- Fifth row--
 ("Polychromos 120 Pencil Wood Box Set","Office Products", 299, 100),
-- Sixth row--
 ("HP 63 Black & Tri--color Original Ink Cartridges","Office Products", 42.89, 500000),
-- Seventh row--
 ("Microsoft Office Home and Student 2019 | 1 device","Software", 129.99, 20000000),
-- Eighth row--
 ("ORLANE PARIS Creme Royale Body Cream, 6.7 fl. oz.","Beauty & Personal Care", 350, 2),
-- Ninth row--
 ("MARS Chocolate Favorites Fun Size Halloween Candy Bars Variety Mix 33.9--Ounce 60--Piece Bag","Grocery & Gourmet Food", 6.08, 21000),
-- Tenth row--
 ("Mila Moursi Slimming Cream, 6.7 Fl Oz","Beauty & Personal Care",160 ,5),
-- Eleventh row--
 ("Turkey Trouble","Books", 7.99, 66)