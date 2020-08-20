## Server Side

***
The server side and back-end development is built using a Node.js runtime enviroment and express framework. The server utilizes a variety of modules to execute both general server broadcasting capabilities, but logic evaluation based on user interactions.
+ Routing for various HTTP requests
    + GET, POST, DELETE, PUT requests
+ MongDB communication with CRUD capabilities (raw Mongo)
    + Ability to ingest user information
    + Verify key components against existing documents in collection
    + Prompt a UI/UX response based upon database interaction
+ Asyncronous fuctions utilizing promises and callbacks to apporpriotely navigate application logic
    + try, catch, finally blocks
    + switch cases for error handling
    + Network response codes and JSON messaging
+ 'www' server code as to not bog down app logic
+ Routing and controller implementation
+ MCV (*Model-View-Controller*) structure; primarily utilizing controllers for front end responsiveness - models were not fully utilized due to the app using raw Mongo rather than a DOM 

***
