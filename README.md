# rest-api built with express and sequelize 
### list of todo routes
| Route            | HTTP   | Headers   |  Body                         |   Description                 |
| `/api/todos`     | GET    | token     |  None                         |   Get all todos               |
| `/api/todos/:id` | GET    | token     |  None                         |   Get a single todo           |
| `/api/todos`     | POST   | token     | title:string(required)        |   Create a todo               |   
                                        | description:string(required)  |                               |     
| `/api/todos/:id` | DELETE | token     |  None                         |   Delete a todo               |
| `/api/todos/:id` | PUT    | token     | title:string(required)        |   Update a todo with new info |
                                        | description:string(required)  |
| `/api/todos/:id` | PATCH  | token     | title:string(optional)        |   Update a todo with new info |
                                        | description:string(optional)  |                               |
                                        
### list of user routes
| Route            | HTTP    | Headers   |  Body                         |   Description                 |
| `/api/signup`    | POST    | token     |  username:string(required)    |   User Register               |
                                            password:string(required)
| `/api/signin`    | POST    | token     |  username:string(required)    |   User Login                  |
                                            password:string(required)

### USAGE
Make sure you have node.js and npm installed in your computer and then run these commands:
* $ npm install sequelize pg express
* $ npm install nodemon
* $ nodemon app.js (for running the app)