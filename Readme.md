# Feather - Fullstack Engineer code challenge

This repository contains the solution of an exercise provided by the team of [Feather](https://feather-insurance.com/) as part of their application process.

The aim was to create an admin panel starting from a simple boilerplate provided by the company. 
The [frontend](./frontend) part would communicate with the [backend](./backend) through a GraphQL API.



## Built with

• [Apollo Server](https://www.apollographql.com/docs/apollo-server)

• [Express](https://expressjs.com/)

• [GraphQL](https://graphql.org/)

• [mongoose](https://mongoosejs.com/)

• [Apollo Client](https://www.apollographql.com/docs/react/)

• [React](https://reactjs.org/)

• [TailwindCSS](https://tailwindcss.com/)

• [TypeScript](https://www.typescriptlang.org/)



## Installation 

Clone this repository.

Make sure you have [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) and [node](https://nodejs.org/en/) installed on your machine, then navigate to the [backend](./backend) folder and run in the terminal:

```bash
npm install
```

or

```bash
yarn install
```

You will need to navigate also to the [frontend](./frontend) folder and run the same command. 

This command installs a package and any packages that it depends on.

By default, this command will install all modules listed as dependencies in package.json.



## Database 

To run the server, first you need to create a simple [mongoDB](https://www.mongodb.com/) database. If you don't have an account yet, you can create one here: [Sign Up](https://account.mongodb.com/account/register). If you have already an account, just [Log In](https://account.mongodb.com/account/login) and click on "New Project". 

After entering the information required by the sign-up process, please perform the following steps to set up your cloud database.


### Create a Cluster
When choosing what kind of database you'd like to create, select **Shared**. You will select [AWS](https://aws.amazon.com/) as your cloud provider. Select your preferred region and move on by clicking on **Create Cluster**:


https://user-images.githubusercontent.com/73818991/144071554-a0234d31-0339-4d21-8b74-d33f55396aac.mov


### Authenticate Connection
You will authenticate the connection to your database through **Username** and **Password** and you will connect from your **Local Environment**. Please provide the information requested and move on by clicking on **Finish and Close**, then on **Go to database**:  


https://user-images.githubusercontent.com/73818991/144071623-c53e1f3b-848b-4089-b356-b1147fe4524e.mov

### Create an .env file
The link to connect your local environment to the database is already written in the file **dbconnection.ts**. You will just need to add a new **.env** file at the root of the backend folder with the following information: 

DB_USER=YourChosenUsername

DB_PASSWORD=YourChosenPassword

**_Remember to include the .env file in your .gitignore._**


### Create a Database
To create a database, click on **Browse Collection** and then **Add my own Data**. The configuration of this app expect to connect to database called **Data**, whose **Collection Name** is **policies**. Provide the abovementioned information and move on by clicking on **Create**:


https://user-images.githubusercontent.com/73818991/144071680-b6629eb3-8576-4591-ae19-d730aada3190.mov


### Insert Data into the Database
At this point you only need to feed some sample datas to the database! Please copy the content of the **DataSample.txt** file that you can find at the root of the backend folder. On your cloud, click on **Insert Document** and then **{}**, delete the object and paste the DataSample.txt. Click on **Insert** to save. 


https://user-images.githubusercontent.com/73818991/144071725-94b17bc8-b1df-4c82-ab82-77947c96e7f2.mov


## How to run

To run your server, please navigate to the root of the backend folder and run: 

```bash
nodemon
```

To run your client, please navigate to the root of the frontend folder and run:

```bash
npm start
```

You can visit http://localhost:3000 to view the app in the browser.
