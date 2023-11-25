## configuration setup
{
  "development": {
    "username": "postgres",
    "password": "Anurag@9634",
    "database": "Airline_Management",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}


##  first clone this project 
1. then use npm install to get all pckgs
2. setup the .env file 
3. use  npx sequelize init 
4. for creation of db in postgres use npx sequelize create:db command it would setup your db


## db design 

- Airplane table  -  with one airplane we can have multiple flight (id model capacity created_at updated_at )
    |
  (1:n)
    |
-flight   -      (id src_city_id  dest_airport_id, departure_date, arrival_date, departure_time, arrival_time)
     | \
-    |  \
         \________________  (1 :n)_____________________________
                                                               \
     |                                                          \
 -City     - (id name )   --------> 1:n------->              Airport  - (id name  city_id, addrees )

   
  
##  explanation

   1. A flight belongs to an airplane but ane airplane can be used in multiple flights
   2. A city has many irports but one airportds belongs to a city
   3. one airport can have many flighs , but a flight belong t  airports