# Node.js-MySQL
------------------------------

## Overview
an Amazon-like storefront CLI app that will take in orders from customers and deplete stock from the store's inventory.

## Set up 
_______________________________

**_Prerequisites_**
**In order to use this app you should have nodeJS installed and a form of database software installed such as(MySQL)**

- Download files:
    - Download the files from https://github.com/jian001qq2/Node.js-MySQL

- Install node packages:
    - Open a terminal.
    - Navigate to Node.js-MySQL folder containing **bamazonCustomer.js**.
    - Enter the command ```npm i```.

- Create the database:
  - Open and connect to the MySQL workbench
  - Copy the code in bamazonDB.sql file to the workbench. Note: this file is in the same folder as **bamazonCustomer.js**.
  - Run the code in workbench or sequel pro or some other database creating apps.

## Instructions
------------------------------------
**All commands should be entered in the NOde.js-MySQL folder in terminal**

1. Lauch the App

in the terminal enter the following command:

 ``node bamazonCustomer.js``

 it will display all of the items available for sale


2. User Input

Following the items list, the app will prompt users answer two messages;

   * The first will ask for the ID of the product they would like to buy.
   * The second would ask how many units of the product they would like to buy.

   * Once the customer has placed the order, the app will check to see if it has enough units in the stock.
       * If not, the app will log a phrase of `Insufficient quantity!`, and then go back the items list for user to choose another one.
       *  if yes, then it will take out the quantity in the stock and show the total of users' order.

 ## Link to video walk through of app: 
 * check out the video for a demostration
 https://drive.google.com/file/d/1nVr55fetpZ75vUzO9yS-BtAhPOYdmNFD/view
