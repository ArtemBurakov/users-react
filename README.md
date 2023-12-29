# users-react

This React project showcases various features, including optimistic data updates, error handling, request caching, and data reversion on error, leveraging the SWR library and other technologies.

## Project Features

This project incorporates the following features:

- **Optimistic Data Update:** Optimistically updates the UI before receiving a response from the server, providing a smooth user experience.

- **Error Handling:** Includes robust error handling mechanisms to gracefully handle failures and inform users about any issues.

- **Request Caching:** Utilizes SWR library for efficient caching of API requests, improving performance and reducing redundant network calls.

- **Data Revert on Error:** Reverts the UI to its previous state in case of a failed API request, ensuring data consistency.

## Run application

To clone this repository and run the application locally, use the following commands in your terminal:

> before running the application, make sure that the server part is running on your machine. How to run the server part open [users-golang](https://github.com/ArtemBurakov/users-golang).

```bash
git clone https://github.com/ArtemBurakov/users-react.git

cd users-react

npm install

npm start
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install project dependencies before running the application.

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more about:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [SWR library](https://swr.vercel.app/)