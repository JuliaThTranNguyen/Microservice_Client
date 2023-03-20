# :blush: [ MicroService - 2023 - Course: Web Service](https://github.com/e1800930/MicroService_Webservices):coffee:
*********************************************************
This Module will cover the React Application for Client Side.
**********************************************************
# Welcome to the CLient Side
## IDE I use for coding :bulb:

- VsCode
- IntelliJ Ultimate Edition
- Sublime

## Tools I use for testing :bulb:

- Docker
- Minikube
- Kubernetes

## Distribution : :bulb:

- Linux OS

## Deployment platform: :bulb:

- Heroku

## Backend technologies: :bulb:

- [Java - Springboot -PostgreSQL - CRUD application](https://github.com/e1800930/UX_JAVA_SPRINGBOOT)
- Python - Flask - PostgreSQL
- C# - .NET - PostgreSQL

## Frontend technology: :bulb:

- React App
- NodeJS
- PostgreSQL

### Proof of Complement :book:
- Fetching all data from Springboot Server:

![Screenshot from 2023-03-16 21-22-10](https://user-images.githubusercontent.com/49017322/226147284-3b01939f-444a-45d7-a8ce-2a106a77a66e.png)


- Creating new method (VIEW/DELETE/EDIT)
  ![Screenshot from 2023-03-18 22-49-28](https://user-images.githubusercontent.com/49017322/226147287-3a71e721-3a4a-472a-9b69-312dda883d78.png)


- Create new Account
  ![Screenshot from 2023-03-18 22-50-10](https://user-images.githubusercontent.com/49017322/226147291-bc766f61-bb62-4bf5-98e6-8135ae8ddcf0.png)


- Edit account by id

![Screenshot from 2023-03-18 22-49-51](https://user-images.githubusercontent.com/49017322/226147296-b61c9e88-8825-46c1-a82b-5345e09b1546.png)


- View account in details

![Screenshot from 2023-03-18 22-49-41](https://user-images.githubusercontent.com/49017322/226147141-6b265a88-4fe5-4ab1-92a8-52e356b4afae.png)

- Client service at "localhost://3000"
- 
![Screenshot from 2023-03-16 21-22-10](https://user-images.githubusercontent.com/49017322/226344763-9abb2783-88a7-46da-8af1-e8a1a0960b09.png)

- Client service for Springboot server:
- 
![Screenshot from 2023-03-18 22-49-28](https://user-images.githubusercontent.com/49017322/226344981-ab999145-4e09-4cb3-86d2-8c3eb9113177.png)


###[Heroku Deployment:](https://julia-microservice.herokuapp.com/)
At the moment the Heroku app is crashing due to out of memory heaps.
Pls be patient & wait for the next update! :heart:

## Extra dependencies & packages in used

```
npm install bootstrap@v5.2.3
npm install axios
npm i react-router-dom
```

## How to deploy a React App into Heroku
### First of all , make sure there are no errors or missing dependecies. Run & test the project before the actual deployment.

### Prepare your React App for Heroku deployment
To deploy a React application on Heroku, you can follow these steps:

- Make sure you have created a production build of your React application by running:

```
npm run build
```
in the client directory.

- Create a new Git repository for your project and commit your changes.

- Install the Heroku CLI if you haven't already done so, and log in to your Heroku account by running:

```
heroku login
```

- Create a new Heroku app by running:

```
heroku create
```

- Add the mars/create-react-app buildpack to your app by running:

```
heroku buildpacks:set mars/create-react-app -a < name-of-your-app >
```

- Add a Procfile to your app, save it as the parent level 

```
web: npm start
```

- Commit your changes and push them to Heroku by running:

```
git push heroku master
```

- Then you can also check for the logs by using:

```
heroku open
```

- Once the deployment is complete, open your app by running:

```
heroku logs --tail
```


As for addons, it depends on the specific requirements of your application. However, some common addons for a React app might include a database addon like Heroku Postgres, a logging addon like Papertrail, and a monitoring addon like New Relic. You can add addons using the Heroku CLI by running heroku addons:create <addon-name>.

