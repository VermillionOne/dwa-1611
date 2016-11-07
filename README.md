# URL-Shortener

This application is used to create shortened URLs from pre-existing URLs, similar to Bitly.
___
## Getting Started

Create a directory to pull in the repository and `cd` into it"

```
mkdir url-shortener
cd url-shortener
```

Initialize git and Pull in the git repo:

```
git init
git pull git@github.com:VermillionOne/URL-Shortener.git
```

### Prerequisites

This application is built using
- Node.js v7.0.0

### Installing

Run `npm install` to load in the NPM dependencies.

Set up your .env file (example):

```
DB_NAME=url-shortener
DB_USER=root
DB_PASS=root
DB_HOST=localhost
DB_SCHEMA=mysql
DB_PORT=8889
```

Run 'node server.js'

Alternatively, if you have [nodemon.js](http://nodemon.io/) installed, run `nodemon server.js` to have automated updating. With this method, each time you make a change in files, you can just reload the browser to access the updates.

Direct your browser to [localhost:3000](http://localhost:3000). You can also update line 9 in server.js to use a port of your choosing.
___
## Routes

### Views
These routes are used to navigate the pre-built application that uses the tool. You may use it as is or edit the files to your needs.

#### `'/'`
Brings the user to the home page.

#### `'/urls'`
Displays all URLs created by current user.

### API
These routes are used to make requests to the data base using GET and POST methods to create, read, update, and destroy data. The `'/v1/'` is used to create a versioning path that will allow for updates to the API without destroying previous written functionality.

#### `'/api/v1/urls'`
This method retrieves and creates new entries in the URLs table.

##### Method: GET
Retrieve data for every URL in the database

##### Method: POST
Create a new url database entry

Example Request Package for creating new URL:

```
{
  "name": "John Doe", // String
  "description": "Lorem ipsum dolor sit amet", // Text
  "origin": "www.example.com/page.php?rm='more-things'?th='also-more-things'" // String
}
```

#### `'/api/v1/urls/:id'`
This method retrieves, edits, or deletes a single entry in the URLs table.

Example:
```
'/api/v1/urls/2'
```

##### Method: GET
Retrieve a single URL entry

##### Method: POST
Edit / Update a single entry.

Use one or many values in the request body to update those values for the specific URL entry.

List of values:

| Value |    Definition     |
|-------|-------------------|
| name  | Name of the link. |
| description | A short sentence or even paragraph of what the link is. |
| origin | The actual link used. |
| url | The newly formatted URL. |

##### Method: DELETE
Delete a single URL entry

___
## Built With

* [NodeJS](https://nodejs.org/en/)
* [EmbeddedJS](http://www.embeddedjs.com/)
* [NPM](https://www.npmjs.com/)
* [MySQL 5.5.42](https://www.mysql.com/)
