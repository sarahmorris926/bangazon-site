# bangazon-site

#how to build database and connect to postgres

this interface assumes a global installation of psql 
`npm install psql -g`

steps :
`npm install`

1. Open another tab in your terminal and run `psql` 

2. `CREATE DATABASE sickquelize`

3. `\c sickquelize`

in the command line you will see "You are now connected to the database"

4. In your config.json file enter the name of the database you created in the previous step
ex:

`"database": "sickquelize",`

5. Navigate to your previous tab and run 

`node build_db`

to build out your database.



# Product Details

To test, run 

```
 npm start
```
to begin running your sever.  Visit localhost8080 to pull up the log in screen. If you have not registered your account, select the register account button. Else, select the log in button and proceed to log in.

Once you have logged in, in your url enter the following address, replacing id with the id of the product you wish to view (1 - 11 please):

```
http://localhost:8080/product/<id>
```

You will then see the product details for the product you have selected!


# Add Payment Types

Users are now able to click on the 'Profile' link and add a Payment Type to their account.

## To Add a New Payment Type

1. Login as an existing user, or register as a new user.
2. Once logged in click on the **Profile** link within the nav.
3. Next, click on the **_Add Payment Type_** link.
4. Fill out the required fields and click submit.
5. User will be see a message that lets them know their payment type has been added.
6. Click on the **_Return to Payment Types_** link to add another Payment Type.
