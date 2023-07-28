# REACT Dashboard

Simple dashboard developed with:

- GraphQL
- React
- Typescript
- Rechart
- Tailwind

### SERVER SIDE / BACK-END

In the backend folder is the development of the server side, developed with **Express** and **GraphQL**.
API returns data provided by the JSON file _mockData_.
To run it, we must launch the following commands in the root of the folder:

```sh
$ npm install
$ npm run start
```

Open [http://localhost:8000/graphql](http://localhost:8000/graphql) to check the GraphiQL

### CLIENT SIDE / FRONT-END

In the frontend folder is the development of the client side, developed with **React**.
To run it, we must launch the following commands inside the folder:

```sh
$ npm install
$ npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Finally, you will show the complete app in [http://localhost:3000](http://localhost:3000)

**Note**:

- Release `v1.0.0`: `dashboard-localdata` branch can be used the branch to get data from your local database (in this case you also have to have a schema in the database with some data to get information).
- Release `v2.0.0`: `develop` branch can be used to get data from the Mobietrain DEV environment database.

Remember to use your `.env` file in any case.
