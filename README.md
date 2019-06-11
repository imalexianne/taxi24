# taxi24

## By IMANIRAKARAMA Alexianne

## Introduction
With this taxi24 application I built a set of APIs that other companies can use to manage their fleet of drivers and allocate drivers to passengers.


## Project description
This is an application by which a user is able to create (add) a new driver to the database,edit or delete the existing drivers,  able to create (add) a new trip to the database, edit or delete the existing trips, able to create (add) a new rider to the database, edit or delete the existing riders.

## Technologies used
Javascript, Nodejs, PostgreSQL, Postman, RESTful_API.
I used the terminal from ubuntu operating system 

## Project set up and installations
1. We have to update & upgrade our Ubuntu to latest packages using the commands below in terminal

sudo apt-get update && sudo apt-get upgrade

2. Install PostgreSQL by running the command below

sudo apt-get install postgresql

3. Now that our PostgreSQL database is ready. we can log into PostgreSQL and create a username and a database.

sudo - su postgres
psql

4. Create a username by running the command below

CREATE USER bkuser SUPERUSER;

5. We have to create a password for the user with the command below

ALTER USER bkuser WITH PASSWORD '123';

6. To create a database with the user created, run

CREATE DATABASE taxi24 WITH OWNER bkuser;

7. To exit from psql shell, run \q.

8. run the command below to set up babel

npm install babel-preset-env --save-dev
npm install babel-cli --save
npm install babel-core --save

9. Install express alongside some dependencies

npm install express body-parser morgan

10. We need to install nodemon to restart our server whenever we make changes to any of our file.

npm install --save-dev nodemon

11. With our application up and running, we need to install the sequelize library to connect to our postgreSQL database.

npm install sequelize pg pg-hstore

12. We need to install the sequelize CLI which enable us to run database migration easily from the terminal and bootstrap a new project.

npm install -g sequelize-cli

13. Run the command below to create a database

createdb taxi24

14. To create a driver model run the command

sequelize model:create --name Driver --attributes name:string,username:string,email:string,password:string,location:string,closestdrivers:string

15. To create a trip model run the command

sequelize model:create --name Trip --attributes name:string,startingtime:string,completetime:string,driverId:integer

16. To create a rider model run the command

sequelize model:create --name Rider --attributes name:string,driverId:integer,tripId:integer

17. For migration run the command

Sequelize db:migrate

18. Run server with the command

npm start

19. Navigate to http://127.0.0.1:3000/. 
The app will automatically reload if you change any of the source files.

20. Using Postman, you will be able to create, update and delete any data.

21. To get the list of riders navigate to http://127.0.0.1:3000/riders

22. To get the list of drivers navigate to http://127.0.0.1:3000/drivers

23. To get the list of trips navigate to http://127.0.0.1:3000/trips


## Link to live site on Github 
https://github.com/imalexianne/taxi24

## Copyright and license information
This project is licensed under the MIT License