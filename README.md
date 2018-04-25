# bangazon-site

Bangazon Corp. is an NSS subsidiary company that employs students for Node project work


server-side application to for the customer to interface with the bangazon database 

# Start here to initilizate the project

this interface assumes a global installation of psql 
if not already installed

`npm install psql -g`

steps :
to access all required dependencies 
`npm install`


#how to build database and connect to postgres
  **once your project is initiliazed as above**
1. Open in your terminal run `psql` 

2. `CREATE DATABASE sickquelize` create database named sickquelize

3. `\c sickquelize` connect to sickquelize

in the command line you will see "You are now connected to the database"

4. In your config.json file enter the name of the database you created in the previous step

`"database": "sickquelize",`

5. To build the database from the project

run `node build_db` OR `npm start`


# Issues this project fixes 
 1. User can view latest products on home page (**fixes issue 10**)
 2. User can add a payment type (**fixes issue 21**)
 3. User can add a product to sell (**fixes issue 15**)
 4. User can view all products that are of a particular product type (**fixes issue 4**)
 5. User can view product detail (**fixes issue 5**)
 6. User can complete an order (**fixes issue 16**)
 7. User can remove a product listing (**fixes issue 11**)
 8. User can select product category when selling product (**fixes issue 2**)
 9. User can view all products (**fixes issue 33**)

**Before any testing please be sure to update database to ensure that you have the latest JSON information added to your tables.** 

``` node build_db.js 
```

**Ensure your local host is running by using the following in your terminal:** 

``` npm start
```

**All issues begin from login, if logged in step 1 within in the issue does not need to be repeated**

**if not logged in the only available functionality is to view only for products on the home page or product categories with associated products and their details**
# 1.  User can view latest products on home page (**fixes issue 10**)
steps to execute: 

1. Visit ```localhost:8080``` and register / log in. Once you are logged in, select "Home" in the navbar. This will take you to the home page which will have the 20 newest items listed. 

#2. User can add a payment type (**fixes issue 21**)

steps to execute: 
1. Login as an existing user, or register as a new user.
2. Once logged in click on the **Profile** link within the nav.
3. Next, click on the **_Add Payment Type_** link.
4. Fill out the required fields and click submit.
5. User will be see a message that lets them know their payment type has been added.
6. Click on the **_Return to Payment Types_** link to add another Payment Type.

steps to test: 


`select * from payment_type` will show all payment types added for each user

#3. User can add a product to sell (**fixes issue 15**)
1. `localhost:8080/` and login as existing or register. 
2. Select"Sell a Product" link in the nav bar  click that to go to the form. 
3. Fill out the form (with text/numbers for name and description, and numbers for quantity and price - otherwise you'll get an error) and "Submit". 
4. You will be taken to the product detail view for your new product. 
5. You can either go Home and see the most recently added products, or click the "Sell a Product" button again to go back and add another product.


 #4. User can view all products that are of a particular product type (**fixes issue 4**)
1. `localhost:8080/` and login or register and log in . 
2. Select the "Product Categories" link in the nav bar to view the product category list. 
3. Select a product category and view product details for products in that category.


#5. User can view product detail (**fixes issue 5**)
1. `localhost:8080/`login or register
2. in your url enter the following address, replacing id with the id of the product you wish to view:

```
http://localhost:8080/product/<id>
```
or 
select product link from anywhere on the site

3. select add to order button to add order to cart 



#7. User can remove a product listing (**fixes issue 11**)

1. `localhost:8080/`login or register
2.  select my products link from the nav bar, if no products then add a product to sell see #3
3.  select delete to remove the product listing, the page will reload 

#8. User can view all products (**fixes issue 11**)

1. `localhost:8080/`login or register
2. select all products link from the nav bar to view all products