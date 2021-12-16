# Admin Panel (in development :tractor:)

The **Admin Panel** is a full-stack project I am creating in order to experiment with **TypeScript**, **mongoDB**, and **Apollo**.

The [frontend](./frontend) part communicates with the [backend](./backend) through a **GraphQL API**.

It features a **login** page and a **dashboard**, which contains a **table** that displays information about policies purchased by some customers.

I am currently working on restyling each page using **material-ui** components, and on creating a page for each **customers** which contains more information related to them.

## Built with

• [Apollo Server](https://www.apollographql.com/docs/apollo-server)

• [Express](https://expressjs.com/)

• [mongoose](https://mongoosejs.com/)

• [GraphQL](https://graphql.org/)

• [Apollo Client](https://www.apollographql.com/docs/react/)

• [React](https://reactjs.org/)

• [Material-ui](https://mui.com/)

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

### Create a Database

To create a database, click on **Browse Collection** and then **Add my own Data**. The configuration of this app expect to connect to a database called **Data**, whose **Collection Name** is **policies**. Provide the abovementioned information and move on by clicking on **Create**:

https://user-images.githubusercontent.com/73818991/144071680-b6629eb3-8576-4591-ae19-d730aada3190.mov

### Insert Data into your Database

At this point you only need to feed some sample data! Please copy the content of the **DataSample.json** file that you can find at the root of the backend folder. On your cloud, click on **Insert Document** and then **{}**, delete the object and paste the DataSample.json. Click on **Insert** to save.

https://user-images.githubusercontent.com/73818991/144071725-94b17bc8-b1df-4c82-ab82-77947c96e7f2.mov

### Create an .env file

You will need to add a new **.env** file at the root of the backend folder with the following information:

DB_USER=YourChosenUsername

DB_PASSWORD=YourChosenPassword

SECRET_KEY=YourChosenSecretKey

The **SECRET_KEY** is a key the code will use to generate a token to authenticate the user login. Feel free to make it as intricate as possible.

**_Remember to include the .env file in your .gitignore._**

### Connect to your Cluster

We're almost there! The file **dbconnection.ts** contains a string saved in the variable **databaseURL** that you will need to update. From the **Database Deplyoments** page, click on **Connect**, then **Connect your application**. Copy the connection string and assign it as the new value of **databaseURL**.

Replace your **Username** and **Password** with the environmental variables that you have just created and **MyFirstDatabase** with the name of your database (which, if you have followed these instructions, is **Data**).

https://user-images.githubusercontent.com/73818991/144085297-078135b2-c581-4026-b43b-549966eecfa2.mov

### Create your first Account

In order to access the app, you need first to create a new account. You can do so on [Apollo Sandbox](https://www.apollographql.com/docs/apollo-server/testing/build-run-queries/). Start your server, then visit http://localhost:8080/graphql to run the **registerUser** mutation againts your GraphQL API. Provide all the variables requested as inputs: **email**, **password**, and **roles** (you can choose between _ADMIN_ or _EDITOR_). The values will be stored into a new collection of your Data database called **users**. For security concerns, the password will be hashed with [bcrypt](https://www.npmjs.com/package/bcrypt).

https://user-images.githubusercontent.com/73818991/145446531-7e59becd-fb04-4eb8-9d25-e24e4da0ffd7.mov

## How to run

To run your server, please navigate to the root of the backend folder and run:

```bash
npm run dev
```

To run your client, please navigate to the root of the frontend folder and run:

```bash
npm start
```

You can visit http://localhost:3000 to view the app in the browser.
