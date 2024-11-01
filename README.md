# **Book Management API**
## Overview
This API manages books and readers. Built with Node.js, Express.js and Mongoose.\
## Installation
Install dependencies: npm install\
Start the server: nodemon index.js
## API Routes
### Books
Route	Method	CRUD Operation	Description\
/books	GET	Read	Retrieve all books\
/books	POST	Create	Add a new book\
/books/:id	GET	Read	Retrieve a book by ID\
/books/:id	PUT	Update	Update a book by ID\
/books/:id	DELETE	Delete	Delete a book by ID
### Readers
Route	Method	CRUD Operation	Description\
/readers	GET	Read	Retrieve all readers\
/readers	POST	Create	Register a new reader\
/readers/:email	GET	Read	Retrieve a reader by email\
/readers/:email	DELETE	Delete	Delete a reader account\\

Request/Response Formats\
JSON (application/json)\
Environment Variables\
PORT: Server port (default: 4007)\
MONGODB_URI: MongoDB connection string

### Contact
Jean Billy Montoute 
