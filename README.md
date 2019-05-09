## Setup 

1. Clone this project

2. ```Composer install```

3. ```npm install```

4. Copy the .env.example into a .env file 

5. Setup a mysql db 
   
     - login to mysql
     
     - ```CREATE DATABASE productivityMatrix;```
     
     - exit
     
     - put the database details in the .env file
     
(if you want to seed you database do 6)

6. Fill in the 3 TEST variables at the bottom of your .env 

7. ```php artisan migrate ``` if you are seeding you db, use ```--seed``` with this command

8. ```passport install``` (note down the keys generated)

9. ```npm run dev```

10. ```php artisan serve```

11. Go visit your website at ```http:\\localhost:8000``` 
