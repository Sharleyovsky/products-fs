# Products-fs

To start the application you have to follow steps listed below.

### Steps:
1. Go to the both directories and run `cp .env.dist .env` and fill the environment variables.

2. Install packages in frontend and backend repo by running `npm i`

3. Start the frontend application by running `npm run dev`

4. To run the backend application you will be needing docker installed.

5. For this to happened you will have to set every environment variable that exists in the docker-compose on your hardware and run `npm run start:be` or you can start the other command `npm run start:be-env` which will use the environment variables that you have set in the be/.env file.

6. After running application you can access swagger documentation which you can access under the `/api-docs` path. If you have not changed the API_PORT from 4000 you should be able to access it here `http://localhost:4000/api-docs`

7. For adding data to the database you can use endpoint `http://localhost:4000/api-docs` and use one or more mock items for testing your logic (mock items are available in the be/src/shared/mocks/data.ts) or you can just keep changing the code property in one item since it's the only one that should be unique.

8. After adding data you should be able to see it after refreshing frontend application.

### Tests:
1. To run the unit tests in the backend repo you can use `npm run tests:unit`
2. To run the e2e tests in the backend repo you can use `npm run tests:e2e`, it's good to change the port in the environment file if you are running docker application in the background at that moment.
