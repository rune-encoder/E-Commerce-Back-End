# E-Commerce Web Application BACK-END [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

 ## Description
 
  **E-Commerce Web Application BACK-END Video Walkthrough Link: [Youtube Video](https://www.youtube.com/watch?v=UUwZrEMcCjw)** 
  
  This application consists of the BACK-END of an E-Commerce site.  

  It uses Sequelize, an Object-Relational Mapping tool that uses Object-Oriented programming that enables us to communicate with MySQL database.  

  We will be using Sequelize alongside Node.js and Express.js to manipulate the MySQL database. dotenv is also required to use your own environemt variables. 
  
  In this application we have created API routes that allow you to manipulate tables in the MySQL database. These tables are categories, products, product tags, and tags. 

  Using this application you may:
  1. Obtain complete list of data for the categories, products and tags table.
  2. Find specific data from categories, products, and tags using an id.
  3. Create new data for the categories, products and tags table.
  4. Update existing data for the categories, products, and tags table using an id.
  5. Delete existing data for the categories, products, and tags table using and id.
 
 ## Table of Contents
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [Tests](#tests)
 - [License](#license)
 - [Questions](#Questions)

 ## Installation
 
 **Before using this application, you will need to install:**  
>1. Node.js  
>2. Express.js  
>3. MySQL  
>4. sequelize  
>5. dotenv  
>6. Insomnia 
 
 ## Usage
 
 1. Clone repository to your local machine.
 2. Open your terminal and run `npm i` to install dependencies.
 3. Next, type `mysql -u root -p` then log in with your password to MySQL. 
 4. You will need to make a database first by running `SOURCE db/schema.sql;` on the terminal.  
 5. Afterwards, you will need to then seed the database.  
 Exit MySQL with the `quit` command then run `npm run seed` to pre-populate database.  
 6. Run `node server.js` in the terminal.  
 7. You will now be able to access the API using Insonmia. 

Note: Ensure you have a `.env` file in the root directory. The `.env` file must have:  
```
DB_NAME='ecommerce_db' 
DB_USER='Your_Username_Here' 
DB_PASSWORD='Your_Password_Here'
```
 
 ## Contributing
 
 Created by: Christian Palacios
 
 To contribute to this repository you may contact me for further details.  
 Contact details below in the Questions Section.
 
 ## Tests
 
**Testing API routes was done using Insomnia.**  
Using insomnia you are able to test the GET, POST, PUT and DELETE routes for the Categories Table, Product Table, and Tag Table. 

>**Testing Preview:**
  ![Application Test](./assets/screenshots/E-Commerce-Screenshot.gif) 
 ## Credits

N/A
 
 ## License

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
 **The MIT License**  
 Please refer to the LICENSE in the repository.

 ## Questions
 
 **If you have any questions you may reach me at my email: [cont_rune_encoder@outlook.com](mailto:cont_rune_encoder@outlook.com)**  

 **Here is a link to my Github Profile: [Profile Link: rune-encoder](https://github.com/rune-encoder)**  

 **If you would like to check out my other projects visit this link: [Projects Link: rune-encoder](https://github.com/rune-encoder?tab=repositories)**  
    
