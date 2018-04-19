# bangazon-site

#how to build database and connect to postgres

this interface assumes a global installation of psql 
`npm install psql -g`

steps :
`npm install`

1. open another tab in your terminal and run `psql` 
2. `CREATE DATABASE _your_database_goes_here_`
3. `\c _your_database_name`
in the command line you will see "You are now connected to the database"

4. in your config.json file enter the name of the database you created in the previous step
ex)
`"database": "sickquelize",`
5.navigate to your previous tab and run 

`node build_db`


`
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