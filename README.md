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